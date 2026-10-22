// Small story sounds, synthesized locally. Call unlockSound from a user gesture.
let context;
let noiseBuffer;
let unlocked = false;
let unlockVersion = 0;
const groups = new Set();
const MAX_GROUPS = 3;
const OUTPUT_LEVEL = 0.38;

function makeNoise(audio) {
  const buffer = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
  const samples = buffer.getChannelData(0);
  for (let i = 0; i < samples.length; i += 1) samples[i] = Math.random() * 2 - 1;
  return buffer;
}

/** Enable audio only from the reader's explicit sound-button gesture. */
export async function unlockSound() {
  const activation = globalThis.navigator?.userActivation;
  if (activation && !activation.isActive) return false;
  const version = ++unlockVersion;
  try {
    const Audio = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!Audio) return false;
    if (!context || context.state === 'closed') {
      context = new Audio({ latencyHint: 'interactive' });
      noiseBuffer = makeNoise(context);
    }
    // Invoke resume before yielding, while the browser still has the gesture.
    if (context.state !== 'running') await context.resume();
    if (version !== unlockVersion) return false;
    unlocked = context.state === 'running';
    return unlocked;
  } catch {
    if (version === unlockVersion) unlocked = false;
    return false;
  }
}

function dispose(group) {
  if (group.disposed) return;
  group.disposed = true;
  groups.delete(group);
  for (const node of group.nodes) {
    try { node.disconnect(); } catch { /* Already detached. */ }
  }
  group.nodes.length = 0;
}

function fadeOut(group) {
  if (group.disposed || group.stopping) return;
  group.stopping = true;
  groups.delete(group);
  const now = context.currentTime;
  group.output.gain.cancelScheduledValues(now);
  group.output.gain.setValueAtTime(group.output.gain.value, now);
  group.output.gain.linearRampToValueAtTime(0, now + 0.016);
  for (const source of group.sources) {
    try { source.stop(now + 0.019); } catch { /* Source already ended. */ }
  }
  if (!group.sources.size) dispose(group);
}

function createGroup() {
  // Each recipe uses at most six sources. Evicted sources stop before the next
  // group begins, bounding live audio to three short scenes / eighteen sources.
  while (groups.size >= MAX_GROUPS) fadeOut(groups.values().next().value);
  const output = context.createGain();
  output.gain.value = OUTPUT_LEVEL;
  output.connect(context.destination);
  const group = {
    output,
    nodes: [output],
    sources: new Set(),
    start: context.currentTime + 0.025,
    disposed: false,
    stopping: false,
  };
  groups.add(group);
  return group;
}

function remember(group, source, nodes) {
  group.nodes.push(source, ...nodes);
  group.sources.add(source);
  source.onended = () => {
    group.sources.delete(source);
    if (!group.sources.size) dispose(group);
  };
}

function envelope(gain, start, length, level, attack = 0.008) {
  const rise = Math.min(attack, length / 4);
  gain.setValueAtTime(0, start);
  gain.linearRampToValueAtTime(level, start + rise);
  gain.exponentialRampToValueAtTime(0.00001, start + length - 0.006);
  gain.linearRampToValueAtTime(0, start + length);
}

function tone(group, delay, length, frequency, endFrequency, level, type = 'sine') {
  const start = group.start + delay;
  const source = context.createOscillator();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.type = type;
  source.frequency.setValueAtTime(frequency, start);
  source.frequency.exponentialRampToValueAtTime(endFrequency, start + length);
  filter.type = 'lowpass';
  filter.frequency.value = type === 'triangle' ? 1100 : 3600;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(group.output);
  envelope(gain.gain, start, length, level);
  remember(group, source, [filter, gain]);
  source.start(start);
  source.stop(start + length + 0.003);
}

function noise(group, delay, length, frequency, level, type = 'bandpass', attack = 0.012) {
  const start = group.start + delay;
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = noiseBuffer;
  filter.type = type;
  filter.frequency.value = frequency;
  filter.Q.value = 0.65;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(group.output);
  envelope(gain.gain, start, length, level, attack);
  remember(group, source, [filter, gain]);
  source.start(start, Math.random() * Math.max(0, 1.9 - length), length);
  source.stop(start + length + 0.003);
}

function footfall(group, delay, pitch = 165) {
  tone(group, delay, 0.115, pitch, pitch * 0.63, 0.065, 'triangle');
  noise(group, delay + 0.006, 0.065, 650, 0.038);
}

const recipes = {
  page(group) {
    noise(group, 0, 0.19, 2200, 0.047, 'bandpass', 0.025);
    noise(group, 0.075, 0.13, 900, 0.026, 'highpass', 0.018);
  },
  hello(group) {
    footfall(group, 0, 180);
    footfall(group, 0.28, 145);
  },
  walk(group) {
    footfall(group, 0, 160);
    footfall(group, 0.23, 140);
    footfall(group, 0.46, 170);
  },
  rocks(group) {
    noise(group, 0, 0.12, 680, 0.045);
    noise(group, 0.13, 0.13, 450, 0.04);
    noise(group, 0.29, 0.15, 820, 0.036);
    noise(group, 0.46, 0.17, 540, 0.029);
    tone(group, 0.035, 0.10, 170, 95, 0.035, 'triangle');
    tone(group, 0.33, 0.11, 130, 80, 0.025, 'triangle');
  },
  shake(group) {
    tone(group, 0, 0.34, 220, 218, 0.047);
    tone(group, 0.18, 0.37, 330, 328, 0.038);
  },
  muck(group) {
    tone(group, 0, 0.24, 340, 145, 0.053);
    tone(group, 0.33, 0.28, 470, 185, 0.042);
    noise(group, 0.04, 0.16, 420, 0.019, 'lowpass');
    noise(group, 0.37, 0.19, 520, 0.015, 'lowpass');
  },
  steam(group) {
    tone(group, 0, 0.26, 1540, 1534, 0.032);
    tone(group, 0.006, 0.17, 2280, 2270, 0.012);
    noise(group, 0.15, 0.62, 1500, 0.024, 'lowpass', 0.11);
  },
  sun(group) {
    noise(group, 0, 1.72, 500, 0.029, 'lowpass', 0.28);
    noise(group, 0.12, 1.58, 260, 0.017, 'bandpass', 0.32);
  },
};

/** Play a quiet cue; a locked, suspended, or unsupported context is a no-op. */
export function playSound(effect) {
  const recipe = Object.hasOwn(recipes, effect) ? recipes[effect] : undefined;
  if (!unlocked || !context || context.state !== 'running' || !recipe) return false;
  const group = createGroup();
  try {
    recipe(group);
    return true;
  } catch {
    fadeOut(group);
    return false;
  }
}

/** Fade existing sounds and lock playback until another explicit enable gesture. */
export function stopSound() {
  unlocked = false;
  unlockVersion += 1;
  for (const group of [...groups]) fadeOut(group);
}
