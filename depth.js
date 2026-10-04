(() => {
  const scene = document.querySelector('.mandala-scene');
  const allowed = matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)');
  let frame = 0, x = 0, y = 0;
  const render = () => {
    scene.style.setProperty('--x', `${x.toFixed(2)}px`);
    scene.style.setProperty('--y', `${y.toFixed(2)}px`);
    frame = 0;
  };
  const queue = () => { if (!frame) frame = requestAnimationFrame(render); };
  const move = event => {
    x = (event.clientX / innerWidth - .5) * 12;
    y = (event.clientY / innerHeight - .5) * 12;
    queue();
  };
  const reset = () => { x = y = 0; queue(); };
  const configure = () => {
    window.removeEventListener('pointermove', move);
    if (allowed.matches) window.addEventListener('pointermove', move, { passive: true });
    reset();
  };
  allowed.addEventListener('change', configure);
  document.documentElement.addEventListener('pointerleave', reset);
  window.addEventListener('blur', reset);
  configure();
})();
