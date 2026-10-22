/*
 * Original music for Dr. Ann & Zorbas — composed for this game.
 * Three 16-bar Dorian tunes: Ann's curious, hiccupping walk; Zorbas's
 * lower, loping answer; and a quiet evening reprise. No sampled music.
 * All voices are made with Web Audio; importing this module is silent.
 */

const REST = null;
const ANN = [
  [12, REST, 15, 19, REST, 17, 15, REST],
  [14, REST, 17, REST, 21, 19, REST, 17],
  [22, REST, 19, 17, REST, 14, 12, REST],
  [[12, 2], REST, REST, 7, 10, REST, 12, REST],
  [15, REST, 19, 22, REST, 19, 17, REST],
  [19, 17, REST, 15, REST, 12, 10, REST],
  [17, REST, 14, 17, 21, REST, 19, REST],
  [[14, 2], REST, REST, 10, 7, REST, REST, REST],
  [12, REST, 15, REST, 19, 17, 15, 14],
  [10, REST, 14, 17, REST, 19, 22, REST],
  [21, REST, 17, REST, 14, 17, REST, 19],
  [[15, 2], REST, 14, REST, [12, 2], REST, REST, REST],
  [15, REST, 19, 22, 19, REST, 15, REST],
  [17, 14, REST, 10, REST, 14, 17, REST],
  [17, REST, 21, 19, REST, 17, 14, REST],
  [[12, 3], REST, REST, REST, 7, 10, 12, REST]
];

const GIANT = [
  [[12, 2.5], REST, REST, 7, REST, 10, [12, 1.5], REST],
  [[14, 2], REST, REST, 17, REST, [21, 2], REST, REST],
  [[19, 2.5], REST, REST, 17, REST, 14, 10, REST],
  [[12, 3], REST, REST, REST, 7, REST, REST, REST],
  [[15, 2], REST, 19, REST, REST, 22, 19, REST],
  [[19, 2], REST, REST, 17, REST, 15, 10, REST],
  [[17, 2], REST, 14, REST, 17, REST, 21, REST],
  [[14, 3], REST, REST, REST, 10, REST, 7, REST],
  [12, REST, 12, 15, REST, [19, 2], REST, REST],
  [10, REST, 14, REST, REST, 17, 19, REST],
  [21, REST, REST, 17, REST, 14, 17, REST],
  [[12, 3], REST, REST, REST, 15, 14, 12, REST],
  [[15, 2], REST, REST, 19, REST, 22, 19, REST],
  [[17, 2], REST, 14, REST, REST, 10, 14, REST],
  [17, REST, 21, REST, 19, REST, 14, REST],
  [[12, 3], REST, REST, REST, 7, REST, 12, REST]
];

const EVENING = [
  [[12, 3], REST, REST, REST, [15, 2], REST, 14, REST],
  [[17, 3], REST, REST, REST, [14, 2], REST, REST, REST],
  [[10, 3], REST, REST, REST, [14, 2], REST, 17, REST],
  [[12, 5], REST, REST, REST, REST, REST, REST, REST],
  [[15, 3], REST, REST, REST, [19, 2], REST, 17, REST],
  [[15, 3], REST, REST, REST, [10, 2], REST, REST, REST],
  [[14, 3], REST, REST, REST, [17, 2], REST, 14, REST],
  [[7, 5], REST, REST, REST, REST, REST, REST, REST],
  [[12, 2], REST, 15, REST, [19, 3], REST, REST, REST],
  [[17, 3], REST, REST, REST, 14, REST, 10, REST],
  [[14, 2], REST, 17, REST, [21, 3], REST, REST, REST],
  [[12, 5], REST, REST, REST, REST, REST, REST, REST],
  [[15, 3], REST, REST, REST, [19, 2], REST, REST, REST],
  [[17, 2], REST, 14, REST, [10, 3], REST, REST, REST],
  [[14, 3], REST, REST, REST, 17, REST, 14, REST],
  [[12, 6], REST, REST, REST, REST, REST, REST, REST]
];

// Chords are scale-colored rather than major-key nursery-song cadences.
const CHORDS = [
  [0, 3, 7], [5, 9, 12], [10, 14, 17], [0, 3, 7],
  [0, 3, 7], [3, 7, 10], [5, 9, 12], [7, 10, 14],
  [0, 3, 7], [10, 14, 17], [5, 9, 12], [0, 3, 7],
  [3, 7, 10], [10, 14, 17], [5, 9, 12], [0, 3, 7]
];

const SCENES = {
  'ann-garden': { bpm: 116, root: 50, bassShift: -12, melody: ANN, color: 'ann', drums: 0.75 },
  'ann-stones': { bpm: 124, root: 50, bassShift: -12, melody: ANN, color: 'ann', drums: 1 },
  'zorbas-brook': { bpm: 94, root: 43, bassShift: 0, melody: GIANT, color: 'giant', drums: 0.8 },
  'zorbas-kitchen': { bpm: 108, root: 43, bassShift: 0, melody: GIANT, color: 'giant', drums: 1 },
  sunset: { bpm: 82, root: 50, bassShift: -12, melody: EVENING, color: 'evening', drums: 0 }
};

const CUE_SPACING = { jump: 0.09, pickup: 0.08, action: 0.15, land: 0.12, checkpoint: 0.5, switch: 0.7, win: 1.5, bump: 0.18 };
const frequency = midi => 440 * 2 ** ((midi - 69) / 12);

function sceneKey(value) {
  const id = typeof value === 'string' ? value : value?.levelId || value?.id || value?.scene || value?.level;
  if (SCENES[id]) return id;
  if (/sunset|ending|end$/.test(id || '')) return 'sunset';
  if (/kitchen|cocoa|mix/.test(id || '')) return 'zorbas-kitchen';
  if (/zorbas|brook|giant/.test(id || '')) return 'zorbas-brook';
  if (/stone|cross/.test(id || '')) return 'ann-stones';
  return 'ann-garden';
}

/**
 * Opt-in soundtrack and game cues. Call enable() in a click/key gesture.
 * setPaused(true) silences both music and effects, including queued notes.
 * Constructor injection is optional and permits deterministic tests in Node.
 */
export class GameAudio {
  constructor(options = {}) {
    this._AudioContext = options.AudioContext;
    this._setInterval = options.setInterval || globalThis.setInterval.bind(globalThis);
    this._clearInterval = options.clearInterval || globalThis.clearInterval.bind(globalThis);
    this._ctx = null;
    this._master = null;
    this._limiter = null;
    this._noise = null;
    this._voices = new Set();
    this._timer = null;
    this._enabled = false;
    this._paused = false;
    this._operation = 0;
    this._scene = 'ann-garden';
    this._step = 0;
    this._nextTime = 0;
    this._scheduledSteps = [];
    this._lastCue = new Map();
  }

  get enabled() { return this._enabled; }

  async enable() {
    const operation = ++this._operation;
    try {
      if (!this._ctx || this._ctx.state === 'closed') {
        const Context = this._AudioContext || globalThis.AudioContext || globalThis.webkitAudioContext;
        if (!Context) return false;
        this._ctx = new Context();
        this._buildGraph();
      }
      if (this._ctx.state !== 'running') await this._ctx.resume();
      if (operation !== this._operation) return false;
      this._enabled = this._ctx.state === 'running';
      if (this._enabled && !this._paused) this._start();
      return this._enabled;
    } catch {
      if (operation === this._operation) {
        this._enabled = false;
        this._halt();
      }
      return false;
    }
  }

  disable() {
    ++this._operation;
    this._enabled = false;
    this._halt();
    // Reuse one context on the next user gesture; do not accumulate contexts.
    if (this._ctx?.state === 'running') {
      try { this._ctx.suspend().catch(() => {}); } catch { /* Browser teardown. */ }
    }
  }

  setScene(sceneOrLevelId) {
    const next = sceneKey(sceneOrLevelId);
    if (next === this._scene) return;
    this._halt();
    this._scene = next;
    this._step = 0;
    this._scheduledSteps = [];
    this._lastCue.clear();
    if (this._enabled && !this._paused) this._start();
  }

  setPaused(paused) {
    const next = Boolean(paused);
    if (next === this._paused) return;
    this._paused = next;
    if (next) this._halt();
    else if (this._enabled) this._start();
  }

  _buildGraph() {
    const ctx = this._ctx;
    this._master = ctx.createGain();
    this._master.gain.value = 0;
    this._limiter = ctx.createDynamicsCompressor();
    this._limiter.threshold.value = -16;
    this._limiter.knee.value = 10;
    this._limiter.ratio.value = 12;
    this._limiter.attack.value = 0.003;
    this._limiter.release.value = 0.16;
    this._master.connect(this._limiter);
    this._limiter.connect(ctx.destination);
    this._noise = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 0.18), ctx.sampleRate);
    const data = this._noise.getChannelData(0);
    let seed = 137;
    for (let i = 0; i < data.length; i++) {
      seed = (Math.imul(seed, 1664525) + 1013904223) | 0;
      data[i] = (seed / 2147483648) * (1 - i / data.length);
    }
  }

  _start() {
    if (this._timer !== null || !this._ctx || !this._enabled || this._paused) return;
    const now = this._ctx.currentTime;
    this._master.gain.cancelScheduledValues(now);
    this._master.gain.setValueAtTime(0.0001, now);
    this._master.gain.linearRampToValueAtTime(0.52, now + 0.045);
    this._nextTime = now + 0.055;
    this._schedule();
    // 320 ms of audio lookahead keeps a 150 ms scheduler smooth on touch devices.
    this._timer = this._setInterval(() => this._schedule(), 150);
  }

  _halt() {
    if (this._timer !== null) this._clearInterval(this._timer);
    this._timer = null;
    if (!this._ctx || !this._master) return;
    const now = this._ctx.currentTime;
    const pending = this._scheduledSteps.find(entry => entry.time > now + 0.005);
    if (pending) this._step = pending.step;
    this._scheduledSteps = [];
    this._master.gain.cancelScheduledValues(now);
    this._master.gain.setTargetAtTime(0, now, 0.006);
    for (const voice of [...this._voices]) this._finishVoice(voice, now);
  }

  _schedule() {
    if (!this._enabled || this._paused || this._ctx.state !== 'running') return;
    const now = this._ctx.currentTime;
    const scene = SCENES[this._scene];
    const stepDuration = 30 / scene.bpm;
    this._scheduledSteps = this._scheduledSteps.filter(entry => entry.time >= now - 0.1);
    // A backgrounded tab may return after its timer was throttled. Never replay
    // a backlog of notes at once; continue the phrase from the current cursor.
    if (this._nextTime < now - 0.1) this._nextTime = now + 0.045;
    let scheduled = 0;
    while (this._nextTime < now + 0.32 && scheduled++ < 8) {
      this._scheduledSteps.push({ step: this._step, time: this._nextTime });
      this._playStep(this._step, this._nextTime, stepDuration, scene);
      this._step = (this._step + 1) % 128;
      this._nextTime += stepDuration;
    }
  }

  _playStep(step, at, beat, scene) {
    const bar = Math.floor(step / 8) % 16;
    const eighth = step % 8;
    const chord = CHORDS[bar];
    const entry = scene.melody[bar][eighth];
    const evening = scene.color === 'evening';
    const giant = scene.color === 'giant';
    if (entry !== REST) {
      const [offset, length = 0.76] = Array.isArray(entry) ? entry : [entry];
      this._tone(scene.root + offset, at, beat * length, evening ? 'triangle' : 'square', evening ? 0.105 : 0.063, {
        cutoff: evening ? 1600 : giant ? 1750 : 2400,
        attack: evening ? 0.035 : 0.008,
        release: evening ? 0.18 : 0.05
      });
    }
    if (eighth === 0 || eighth === 4) {
      const fifth = eighth === 4 ? 7 : 0;
      this._tone(scene.root + scene.bassShift + chord[0] + fifth, at, beat * (evening ? 3.3 : giant ? 2.5 : 1.65), 'triangle', evening ? 0.095 : 0.14, { cutoff: 680, attack: 0.009, release: 0.07 });
    }
    if (eighth === 2 || eighth === 6) {
      const chordTime = at + (giant ? 0.024 : 0);
      for (let i = 0; i < 2; i++) {
        this._tone(scene.root + chord[i + 1], chordTime + i * 0.012, beat * (evening ? 1.8 : 0.64), 'triangle', evening ? 0.038 : 0.047, { cutoff: 1500, attack: 0.006, release: 0.07 });
      }
    }
    if (!scene.drums) return;
    if (eighth === 0 || eighth === 4) this._kick(at, 0.075 * scene.drums);
    if (eighth === 2 || eighth === 6) this._tap(at, 0.032 * scene.drums, 1300, 0.065);
    // Sparse woodblock-like hisses, with a little hiccup at phrase endings.
    if (eighth === 7 && (bar % 4 === 2 || bar % 4 === 3)) this._tap(at, 0.016 * scene.drums, 3400, 0.028);
    if (this._scene === 'zorbas-kitchen' && eighth === 3 && bar % 2 === 0) this._tap(at, 0.025, 2300, 0.045);
  }

  _tone(midi, at, duration, type, volume, options = {}) {
    if (!this._ctx || this._voices.size >= 48) return;
    const oscillator = this._ctx.createOscillator();
    const gain = this._ctx.createGain();
    const filter = this._ctx.createBiquadFilter();
    const attack = options.attack ?? 0.006;
    const release = options.release ?? 0.05;
    const end = at + Math.max(duration, attack + 0.015);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency(midi), at);
    if (options.slide !== undefined) oscillator.frequency.exponentialRampToValueAtTime(frequency(options.slide), end);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(options.cutoff ?? 2400, at);
    filter.Q.value = 0.5;
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.linearRampToValueAtTime(volume, at + attack);
    gain.gain.setValueAtTime(volume * 0.74, Math.max(at + attack, end - 0.025));
    gain.gain.exponentialRampToValueAtTime(0.0001, end + release);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(this._master);
    this._trackVoice(oscillator, gain, [oscillator, filter, gain], at, end + release + 0.015);
  }

  _kick(at, volume) {
    if (this._voices.size >= 48) return;
    const oscillator = this._ctx.createOscillator();
    const gain = this._ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(115, at);
    oscillator.frequency.exponentialRampToValueAtTime(48, at + 0.095);
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.linearRampToValueAtTime(volume, at + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.13);
    oscillator.connect(gain);
    gain.connect(this._master);
    this._trackVoice(oscillator, gain, [oscillator, gain], at, at + 0.15);
  }

  _tap(at, volume, cutoff, duration) {
    if (this._voices.size >= 48) return;
    const source = this._ctx.createBufferSource();
    const gain = this._ctx.createGain();
    const filter = this._ctx.createBiquadFilter();
    source.buffer = this._noise;
    filter.type = 'bandpass';
    filter.frequency.value = cutoff;
    filter.Q.value = 0.65;
    gain.gain.setValueAtTime(volume, at);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(this._master);
    this._trackVoice(source, gain, [source, filter, gain], at, at + duration + 0.01);
  }

  _trackVoice(source, gain, nodes, start, end) {
    const voice = { source, gain, nodes };
    this._voices.add(voice);
    source.onended = () => {
      this._voices.delete(voice);
      for (const node of nodes) { try { node.disconnect(); } catch { /* Already disconnected. */ } }
    };
    source.start(start);
    source.stop(end);
  }

  _finishVoice(voice, now) {
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setTargetAtTime(0, now, 0.004);
    try { voice.source.stop(now + 0.025); } catch { /* Already ended. */ }
    this._voices.delete(voice);
  }

  cue(kind) {
    if (!this._enabled || this._paused || this._ctx?.state !== 'running') return;
    // The first version used these names; accepting them keeps saved callers safe.
    kind = { heart: 'pickup', help: 'action', stir: 'action' }[kind] || kind;
    if (!(kind in CUE_SPACING)) return;
    const now = this._ctx.currentTime;
    if (now - (this._lastCue.get(kind) ?? -Infinity) < CUE_SPACING[kind]) return;
    this._lastCue.set(kind, now);
    const at = now + 0.008;
    const note = (midi, delay, duration, type = 'triangle', volume = 0.12, slide) =>
      this._tone(midi, at + delay, duration, type, volume, { slide, cutoff: 2700 });
    switch (kind) {
      case 'jump': note(57, 0, 0.075, 'square', 0.045, 69); break;
      case 'land': this._tap(at, 0.034, 650, 0.055); break;
      case 'bump': note(43, 0, 0.10, 'triangle', 0.10, 38); break;
      case 'pickup':
        note(74, 0, 0.065, 'square', 0.043);
        note(81, 0.075, 0.11, 'triangle', 0.10);
        break;
      case 'action':
        note(62, 0, 0.075); note(65, 0.085, 0.075); note(69, 0.17, 0.14);
        break;
      case 'checkpoint':
        [62, 69, 72, 74].forEach((pitch, i) => note(pitch, i * 0.105, i === 3 ? 0.30 : 0.09));
        break;
      case 'switch':
        (SCENES[this._scene].color === 'giant' ? [74, 69, 62, 55] : [55, 62, 69, 74])
          .forEach((pitch, i) => note(pitch, i * 0.11, 0.14, i === 3 ? 'square' : 'triangle', i === 3 ? 0.05 : 0.10));
        break;
      case 'win':
        [62, 65, 69, 67, 64, 62].forEach((pitch, i) => note(pitch, i * 0.17, i === 5 ? 0.75 : 0.14));
        note(50, 0.85, 0.9, 'triangle', 0.11);
        break;
    }
  }
}
