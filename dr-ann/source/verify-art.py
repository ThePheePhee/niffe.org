"""Independent integrity checks on the artwork actually served to readers."""
from pathlib import Path
import base64
import json
import re
import xml.etree.ElementTree as ET
import numpy as np
from PIL import Image
ROOT=Path(__file__).resolve().parent.parent
ink={r['page']:r for r in json.loads((ROOT/'assets/ink/manifest.json').read_text(encoding='utf-8'))}
colour=json.loads((ROOT/'assets/colour-v2.json').read_text(encoding='utf-8'))
expected=[2,3,4,5,7,9,11,13,15,17]
assert sorted(ink)==[1]+expected and [r['page'] for r in colour]==expected
def rgba(path): return np.array(Image.open(path).convert('RGBA'))

FOCUS_PAGES={3,5,11}
PNG_URI='data:image/png;base64,'
svg_deliveries=[]

def tag_name(name): return name.rsplit('}',1)[-1]

def native_placement(node,width,height,label,optional_size=False):
    assert float(node.get('x','0'))==0 and float(node.get('y','0'))==0,f'Offset source: {label}'
    for key,size in [('width',width),('height',height)]:
        value=node.get(key)
        assert (optional_size and value is None) or (value is not None and float(value)==size),f'Rescaled source {key}: {label}'

def local_resource(value,ids,label):
    match=re.fullmatch(r'url\(\s*[\"\']?#([^\s\"\')]+)[\"\']?\s*\)',value)
    assert match and match[1] in ids,f'Non-local/broken SVG reference: {label}'
    return ids[match[1]]

def verify_focus_svg(path,n,colour_delivery=False):
    """Check served XML; focus may change opacity/colour, never source geometry.

    All archived raster pairs still receive independent pixel/alpha checks.
    The actual SVG must embed the unchanged source PNG at native coordinates.
    """
    width,height=ink[n]['width'],ink[n]['height']
    original_bytes=(ROOT/f'assets/ink/ink-{n}.png').read_bytes()
    root=ET.parse(path).getroot()
    label=str(path.relative_to(ROOT))
    assert root.tag=='{http://www.w3.org/2000/svg}svg',f'Not an SVG document: {label}'
    native_placement(root,width,height,label)
    assert [float(v) for v in root.get('viewBox','').split()]==[0,0,width,height],f'Changed native viewBox: {label}'
    nodes=list(root.iter())
    parents={child:parent for parent in nodes for child in parent}
    ids={}
    for node in nodes:
        if node.get('id'):
            assert node.get('id') not in ids,f'Duplicate SVG id: {label}'
            ids[node.get('id')]=node
    # Spatial filter primitives, nested viewports, external CSS and executable
    # content cannot silently modify the original image's geometry or inputs.
    allowed={'svg','title','desc','defs','image','use','filter','clipPath',
             'polygon','mask','rect','path','feFlood','feComposite',
             'feComponentTransfer','feFuncA','feImage'}
    decoded={}
    for node in nodes:
        tag=tag_name(node.tag)
        assert tag in allowed,f'Unexpected SVG/spatial primitive {tag}: {label}'
        assert node is root or tag!='svg',f'Nested source viewport: {label}'
        for key,value in node.attrib.items():
            name=tag_name(key)
            assert 'transform' not in name.lower(),f'Spatial SVG transform: {label}'
            assert not name.lower().startswith('on'),f'Executable SVG attribute: {label}'
            if name=='style':
                assert not re.search(r'\b(?:transform|translate|rotate|scale|offset|zoom)\s*:',value,re.I),f'Spatial SVG style: {label}'
                assert '@import' not in value.lower(),f'External SVG style: {label}'
            if name=='href':
                if value.startswith('#'):
                    assert value[1:] in ids,f'Broken SVG href: {label}'
                else:
                    assert tag in {'image','feImage'} and value.startswith(PNG_URI),f'External SVG href: {label}'
                    data=base64.b64decode(value[len(PNG_URI):],validate=True)
                    assert data.startswith(b'\x89PNG\r\n\x1a\n'),f'Invalid embedded PNG: {label}'
                    decoded[node]=data
            for match in re.finditer(r'url\(([^)]*)\)',value):
                target=match[1].strip().strip('\"\'')
                assert target.startswith('#') and target[1:] in ids,f'External/broken SVG resource: {label}'
        if tag in {'image','feImage','use'}:
            assert any(tag_name(key)=='href' for key in node.attrib),f'Missing SVG href: {label}'
        if tag=='feImage': native_placement(node,width,height,label)
    originals=[node for node,data in decoded.items() if tag_name(node.tag)=='image' and data==original_bytes]
    assert len(originals)==1,f'Original PNG bytes not embedded exactly once: {label}'
    original=originals[0]
    native_placement(original,width,height,label)
    def ancestors(node):
        while node in parents:
            node=parents[node]
            yield node
    def in_defs(node): return any(tag_name(parent.tag)=='defs' for parent in ancestors(node))
    instances=[] if in_defs(original) else [original]
    for node in nodes:
        if tag_name(node.tag)=='use':
            hrefs=[value for key,value in node.attrib.items() if tag_name(key)=='href']
            assert len(set(hrefs))==1 and hrefs[0]=='#'+original.get('id',''),f'Unexpected source indirection: {label}'
            native_placement(node,width,height,label,optional_size=True)
            if not in_defs(node): instances.append(node)
    assert instances,f'Original ink is embedded but not rendered: {label}'
    clipped=[node for node in instances if any(el.get('mask') or el.get('clip-path') for el in [node]+list(ancestors(node)))]
    if clipped:
        # Page 3 uses exactly complementary source selections for the toned
        # house/ground and black walker. Their union must cover the source.
        assert n==3 and colour_delivery and len(instances)==len(clipped)==2,f'Original ink spatially clipped: {label}'
        masked=[node for node in clipped if node.get('mask')]
        cut=[node for node in clipped if node.get('clip-path')]
        assert len(masked)==len(cut)==1,f'Incomplete silhouette partition: {label}'
        mask=local_resource(masked[0].get('mask'),ids,label)
        clip=local_resource(cut[0].get('clip-path'),ids,label)
        assert tag_name(mask.tag)=='mask' and tag_name(clip.tag)=='clipPath',f'Invalid source partition: {label}'
        assert mask.get('maskUnits')=='userSpaceOnUse' and clip.get('clipPathUnits','userSpaceOnUse')=='userSpaceOnUse',f'Rescaled source partition: {label}'
        native_placement(mask,width,height,label)
        white=[node for node in mask if tag_name(node.tag)=='rect' and node.get('fill')=='white']
        black=[node for node in mask if tag_name(node.tag)=='polygon' and node.get('fill')=='black']
        polygons=[node for node in clip if tag_name(node.tag)=='polygon']
        assert len(mask)==2 and len(clip)==1 and len(white)==len(black)==len(polygons)==1,f'Unexpected source partition geometry: {label}'
        native_placement(white[0],width,height,label)
        def points(node): return [float(v) for v in re.split(r'[\s,]+',node.get('points','').strip())]
        assert points(black[0])==points(polygons[0]) and len(points(black[0]))>=6,f'Non-complementary source partition: {label}'
    if n in {5,11} and colour_delivery:
        paint=[node for node in nodes if tag_name(node.tag)=='image' and node is not original and not in_defs(node)]
        assert paint and all(node.get('mask') or node.get('clip-path') for node in paint),f'Uncontained colour wash: {label}'
    svg_deliveries.append(label)
def corners_clear(a): return not any(a[y,x,3] for x,y in [(0,0),(a.shape[1]-1,0),(0,a.shape[0]-1),(a.shape[1]-1,a.shape[0]-1)])
for n in [1]+expected+['end']:
    master=rgba(ROOT/f'assets/ink/ink-{n}.png')
    delivery=rgba(ROOT/f'assets/ink/ink-{n}.webp')
    assert np.array_equal(master,delivery),f'Ink delivery differs: {n}'
    assert corners_clear(master),f'Paper corner: {n}'
    if n in FOCUS_PAGES:
        focus=ink[n].get('delivery_file')
        assert focus and Path(focus).suffix=='.svg',f'Missing original SVG delivery: {n}'
        verify_focus_svg(ROOT/focus,n)
for row in colour:
    n=row['page']
    assert not row.get('temporary_qa_only') and row['source_ink_retained'] and row['lossless_delivery']
    assert [row['width'],row['height']]==[ink[n]['width'],ink[n]['height']]
    source=rgba(ROOT/f'assets/ink/ink-{n}.png')
    archive_master=rgba(ROOT/f'source/artwork/colour-v2/color-{n}-master.png')
    archive_delivery=rgba(ROOT/f'assets/color-{n}-v2.webp')
    assert np.array_equal(archive_master,archive_delivery),f'Colour archive differs: {n}'
    master=rgba(ROOT/row.get('master_file',f'source/artwork/colour-v2/color-{n}-master.png'))
    tone=row.get('colour_adjustment')
    if tone:
        selection=np.array(Image.open(ROOT/tone['mask']).convert('L'))>0
        assert np.array_equal(master[:,:,3],archive_master[:,:,3]),f'Tone changed alpha: {n}'
        assert np.array_equal(master[~selection],archive_master[~selection]),f'Tone changed surroundings: {n}'
        neutral=np.ptp(archive_master[:,:,:3],axis=-1)<=2
        assert np.array_equal(master[neutral],archive_master[neutral]),f'Tone changed neutral ink: {n}'
    is_svg=Path(row['file']).suffix=='.svg'
    if is_svg:
        assert n in FOCUS_PAGES and row.get('embedded_original_ink_exact'),f'Unexpected SVG colour delivery: {n}'
        assert row.get('archive_file'),f'Missing raster archive: {n}'
        verify_focus_svg(ROOT/row['file'],n,colour_delivery=True)
    # Preserve every original raster check for all ten PNG/WebP archives,
    # including pages whose reader delivery now uses SVG opacity focus.
    delivery=rgba(ROOT/(row['archive_file'] if is_svg else row['file']))
    assert np.array_equal(master,delivery),f'Colour delivery differs: {n}'
    assert np.all(master[:,:,3]>=source[:,:,3]),f'Source alpha lost: {n}'
    assert np.all(master[source[:,:,3]==255,:3]==0),f'Opaque original ink replaced: {n}'
    assert corners_clear(master),f'Opaque colour background: {n}'
    for key in ['moving_part_polygon','foreground_polygon']:
        points=row.get(key)
        if points: assert all(0<=v<=1 for p in points for v in p),f'Animation outside canvas: {n}'
repairs=json.loads((ROOT/'source/artwork/repairs/manifest.json').read_text(encoding='utf-8'))
for row in repairs:
    n=row['page'];folder=ROOT/'source/artwork/repairs'
    before=rgba(folder/row['before']);after=rgba(ROOT/f'assets/ink/ink-{n}.png')
    allowed=np.array(Image.open(folder/row['mask']).convert('L'))>0
    assert np.array_equal(before[~allowed],after[~allowed]),f'Outside repair changed: {n}'
    assert np.all(after[:,:,3]>=before[:,:,3]),f'Original ink erased by repair: {n}'
report=dict(status='PASS',complete_ink_masters=11,author_end_lettering=True,lossless_ink_deliveries=12,
    complete_colour_masters=10,lossless_colour_raster_archives=10,original_opaque_ink_exact_in_raster_colour=True,
    source_alpha_retained_in_raster_colour=True,transparent_raster_corners=True,
    self_contained_native_svg_deliveries=svg_deliveries,svg_original_png_bytes_exact=True,
    svg_source_spatial_transforms=False,svg_native_viewboxes=True,
    repairs_outside_masks_exact=[r['page'] for r in repairs])
print(json.dumps(report,indent=2))
