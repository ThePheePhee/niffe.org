// Keep the book's game invitation present after page turns and language changes.
const gameCopy={sv:['Spela med Ann & Zorbas','Ett litet spel om stora och små vänner'],en:['Play with Ann & Zorbas','A little game about friends great and small']};
function linkGame() {
  const [label,note]=gameCopy[document.documentElement.lang==='en'?'en':'sv'];
  const cover=document.querySelector('.cover');
  if(cover&&!cover.querySelector('.book-game-invitation')) {
    const link=document.createElement('a');link.className='book-game-invitation';link.href='/dr-ann/game/';
    const icon=document.createElement('span');icon.className='game-pixel-icon';icon.setAttribute('aria-hidden','true');icon.textContent='✚';
    const text=document.createElement('span');text.className='game-invitation-label';
    link.append(icon,text);(innerWidth>700?cover.querySelector('.cover-copy'):cover).append(link);
  }
  const settings=document.querySelector('#settings-dialog .colophon');
  if(settings&&!settings.querySelector('.book-game-settings')) {
    const link=document.createElement('a');link.className='book-game-settings';link.href='/dr-ann/game/';settings.append(link);
  }
  document.querySelectorAll('.game-invitation-label,.book-game-settings').forEach(el=>{if(el.textContent!==label)el.textContent=label;});
  document.querySelectorAll('.book-game-invitation').forEach(el=>{if(el.title!==note)el.title=note;});
}
const reader=document.getElementById('reader');
if(reader)new MutationObserver(linkGame).observe(reader,{childList:true});
new MutationObserver(linkGame).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
linkGame();
