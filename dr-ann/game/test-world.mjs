import assert from 'node:assert/strict';
import test from 'node:test';
import {World} from './world.js';
import {LEVELS} from './levels.js';

const DT = 1 / 60;
const tick = (world, input = {}, count = 1, dt = DT) => {
  for (let i = 0; i < count; i++) world.update(input, dt);
};
const settle = world => {
  tick(world);
  for (let i = 0; i < 180 && !world.player.grounded; i++) tick(world);
  assert.ok(world.player.grounded, `Could not land in ${world.levelId}`);
};

// This controller uses the same move/jump inputs as a player. It reads nearby
// obstacles to choose a takeoff and never edits player physics or inventory.
function travel(world, destination, dt = DT) {
  tick(world, {}, 1, dt);
  const trace = [];
  const startLevel = world.levelId;
  for (let frame = 0; frame < 90 / dt; frame++) {
    const p = world.player;
    const delta = destination - p.x;
    if (Math.abs(delta) < 2.9) { settle(world); return; }
    const direction = Math.sign(delta);
    const surfaces = world.level.platforms.filter(s => !s.requires || world.flags[s.requires]);
    const front = direction > 0 ? p.x + p.w : p.x;
    const obstacle = surfaces.some(s => s.h > p.y + 12 && s.h - p.y < 96 && (direction > 0
      ? s.x >= front - 1 && s.x - front < 38
      : s.x + s.w <= front + 1 && front - s.x - s.w < 38));
    const support = surfaces.find(s => Math.abs(s.h - p.y) < 1 && p.x + p.w > s.x && p.x < s.x + s.w);
    const supportEdge = support && (direction > 0 ? support.x + support.w - p.x : p.x + p.w - support.x);
    const gapAfterSupport = support && supportEdge < 38 && world.level.hazards.some(h => direction > 0
      ? h.x < support.x + support.w + 105 && h.x + h.w > support.x + support.w
      : h.x + h.w > support.x - 105 && h.x < support.x);
    const groundHazard = p.y < 2 && world.level.hazards.some(h => direction > 0
      ? h.x >= p.x + p.w * .4 && h.x - (p.x + p.w * .6) < 14
      : h.x + h.w <= p.x + p.w * .6 && p.x + p.w * .4 - h.x - h.w < 14);
    const jump = p.grounded && !world.jumpLatch && (obstacle || gapAfterSupport || groundHazard);
    world.update({right: direction > 0, left: direction < 0, jump}, dt);
    if (frame % Math.round(1 / dt) === 0) trace.push(`${Math.round(p.x)},${Math.round(p.y)}`);
    assert.equal(world.levelId, startLevel, 'Travel cannot change the level');
  }
  assert.fail(`Unreachable ${startLevel} x=${destination}; player=${JSON.stringify(world.player)}; trace=${trace.slice(-15).join(' | ')}`);
}

function use(world, id, dt = DT) {
  const object = world.level.objects.find(o => o.id === id);
  assert.ok(object, `${id} exists in ${world.levelId}`);
  travel(world, object.x - world.player.w / 2, dt);
  assert.equal(world.getAction()?.id, id, `${id} can be interacted with from its platform`);
  tick(world, {action: true}, ['hand', 'log'].includes(object.kind) ? Math.ceil(1.6 / dt) : 1, dt);
  tick(world, {}, 1, dt);
}

function fixture(levelId, flags = {}, position = {}) {
  const world = new World();
  Object.assign(world.flags, flags);
  for (const level of LEVELS) world.unlock(level.id);
  world.enter(levelId, false);
  Object.assign(world.player, position);
  settle(world);
  world.drain();
  return world;
}

function story(dt = DT) {
  const world = new World();
  travel(world, 430 - 17, dt);
  assert.ok(world.flags.bandage1);
  travel(world, 805 - 17, dt);
  assert.ok(world.flags.bandage2);
  travel(world, 1420 - 17, dt);
  assert.equal(world.countBandages(), 3);
  use(world, 'patient', dt);
  assert.ok(world.flags.patient);
  use(world, 'gardenExit', dt);
  assert.equal(world.levelId, 'ann-stones');
  use(world, 'lever1', dt);
  use(world, 'lever2', dt);
  use(world, 'handshake', dt);
  assert.ok(world.flags.handshake);
  assert.ok(world.switchCharacter(), 'Handshake unlocks the giant scale');
  assert.equal(world.levelId, 'zorbas-brook');
  use(world, 'tree', dt);
  use(world, 'logBridge', dt);
  use(world, 'muck', dt);
  use(world, 'brookExit', dt);
  assert.ok(world.unlocked.includes('zorbas-kitchen'));
  // The shell's cutscene Continue button enters the newly unlocked chapter.
  assert.ok(world.enter('zorbas-kitchen'));
  use(world, 'mug', dt);
  assert.equal(world.activity, 'stir');
  for (const direction of ['left', 'right', 'left', 'right', 'left', 'right']) tick(world, {[direction]: true}, 1, dt);
  assert.ok(world.flags.cocoa);
  assert.ok(world.switchCharacter());
  assert.equal(world.levelId, 'ann-garden');
  travel(world, 2340 - 17, dt);
  travel(world, 2700 - 17, dt);
  travel(world, 3000 - 17, dt);
  assert.equal(world.countFood(), 3);
  use(world, 'picnic', dt);
  assert.ok(world.switchCharacter());
  assert.equal(world.levelId, 'zorbas-kitchen');
  use(world, 'sunset', dt);
  return world;
}

for (const dt of [1 / 60, 1 / 30]) {
  test(`all four chapters and required items are reachable using real move/jump physics (${Math.round(1 / dt)} fps)`, () => {
    const world = story(dt);
    for (const flag of ['bandage1', 'bandage2', 'bandage3', 'patient', 'lever1', 'lever2', 'handshake', 'tree', 'logBridge', 'muck', 'cocoa', 'coffee', 'cheese', 'tomato', 'picnic']) assert.ok(world.flags[flag], flag);
    assert.ok(world.finished);
    assert.equal(world.scene, 'sunset');
    assert.equal(world.progress(), 100);
    assert.equal(world.completed.length, 4);
    const scenes = world.events.filter(event => event.type === 'cutscene').map(event => event.value);
    assert.deepEqual(scenes, ['bandage', 'handshake', 'muck', 'cocoa', 'picnic', 'sunset']);
    assert.ok(world.events.filter(event => event.type === 'jump').length >= 20, 'The route includes real jumps');
    const before = {...world.player};
    tick(world, {left: true, jump: true, action: true, switch: true}, 120);
    assert.deepEqual(world.player, before, 'The ending remains settled');
  });
}

test('holding Right and Action cannot complete a chapter or auto-jump over the first obstacle', () => {
  const world = new World();
  tick(world, {right: true, action: true}, 60 * 90);
  assert.equal(world.player.x, 265 - world.player.w);
  assert.equal(world.countBandages(), 0);
  assert.equal(world.finished, false);
  assert.equal(world.completed.length, 0);
  assert.equal(world.events.filter(e => e.type === 'jump').length, 0);
});

test('gates require their own levers, and locked levels cannot be entered', () => {
  const fresh = new World();
  assert.equal(fresh.enter('zorbas-kitchen'), false);
  assert.equal(fresh.switchCharacter(), false);
  const world = fixture('ann-stones', {}, {x: 810});
  tick(world, {right: true}, 90);
  assert.equal(world.player.x, 880 - world.player.w);
  world.flags.lever1 = true;
  tick(world, {right: true}, 60);
  assert.ok(world.player.x > 880);
  Object.assign(world.player, {x: 1970, y: 0, vy: 0, grounded: true});
  tick(world, {right: true}, 90);
  assert.equal(world.player.x, 2050 - world.player.w);
  world.flags.lever2 = true;
  tick(world, {right: true}, 20);
  assert.ok(world.player.x > 2050);
});

for (const dt of [1 / 60, 1 / 30]) {
  test(`a missed jump visibly falls, saves safely and retries from the checkpoint (${Math.round(1 / dt)} fps)`, () => {
    const world = fixture('ann-stones', {bandage1: true, patient: true, lever1: true, lever2: true, handshake: true}, {x: 2125});
    world.collected.s1 = true;
    world.refresh();
    assert.equal(world.checkpoint, 2120);
    const inventory = {...world.flags};
    const collected = {...world.collected};
    travel(world, 2030, dt);
    // Take off too early: this real jump lands in front of the first water
    // stone instead of on it. No hazard position is assigned by the test.
    tick(world, {right: true, jump: true}, 1, dt);
    assert.ok(world.player.y > 0);
    for (let i = 0; i < 120 && !world.falling; i++) tick(world, {right: true}, 1, dt);
    assert.ok(world.falling, 'An undershot jump starts a visible fall');
    assert.equal(world.player.grounded, false);
    assert.ok(world.player.vy < 0);
    assert.notEqual(world.player.x, world.checkpoint, 'The player does not teleport at first contact');
    assert.equal(world.respawnTime, 0);
    assert.equal(world.events.filter(event => event.type === 'fall').length, 1);
    assert.equal(world.events.filter(event => event.type === 'bump').length, 0);
    const fallX = world.player.x;
    const jumps = world.events.filter(event => event.type === 'jump').length;
    const escapeInput = {left: true, jump: true, action: true, switch: true};
    tick(world, escapeInput, Math.ceil(.1 / dt), dt);
    assert.ok(world.falling);
    assert.ok(world.player.y < -5, 'Gravity visibly takes the player below the path');
    assert.equal(world.player.x, fallX, 'Movement cannot escape the fall');
    assert.equal(world.levelId, 'ann-stones', 'Switching cannot escape the fall');
    assert.equal(world.events.filter(event => event.type === 'jump').length, jumps, 'Jump cannot restart in mid-fall');
    assert.deepEqual(world.flags, inventory, 'Actions do not change puzzles during the fall');

    const saved = JSON.parse(JSON.stringify(world.save()));
    assert.deepEqual(saved.positions['ann-stones'], {x: 2120, y: 0, checkpoint: 2120});
    const restored = new World(false, saved);
    assert.equal(restored.levelId, 'ann-stones');
    assert.equal(restored.player.x, 2120);
    assert.equal(restored.player.y, 0);
    assert.equal(restored.falling, false, 'Reloading a mid-fall save starts safely at the checkpoint');
    assert.deepEqual(restored.flags, inventory);
    assert.deepEqual(restored.collected, collected);

    for (let i = 0; i < 120 && world.falling; i++) tick(world, escapeInput, 1, dt);
    assert.equal(world.falling, false);
    assert.equal(world.player.x, 2120);
    assert.equal(world.player.y, 0);
    assert.equal(world.player.grounded, true);
    assert.equal(world.falls, 1);
    assert.equal(world.respawnTime, .45);
    assert.equal(world.events.filter(event => event.type === 'bump').length, 1);
    assert.deepEqual(world.flags, inventory);
    assert.deepEqual(world.collected, collected);
    tick(world, {right: true}, Math.ceil(.2 / dt), dt);
    assert.equal(world.player.x, 2120, 'Respawn gives a short, stationary recovery');
    while (world.respawnTime > 0) tick(world, {}, 1, dt);
    travel(world, 2530, dt);
    assert.ok(world.player.x > 2470, 'The same water crossing can be retried successfully');
    assert.equal(world.falls, 1, 'The successful retry does not cost another fall');
  });
}

test('bridge and bandage requirements, picnic, and sunset cannot be skipped', () => {
  let world = fixture('ann-garden');
  world.act(world.level.objects.find(o => o.id === 'patient'));
  assert.equal(world.flags.patient, undefined);
  world.act(world.level.objects.find(o => o.id === 'gardenExit'));
  assert.equal(world.levelId, 'ann-garden');
  world = fixture('zorbas-brook');
  world.act(world.level.objects.find(o => o.id === 'brookExit'));
  assert.equal(world.completed.length, 0);
  assert.ok(world.events.some(e => e.value === 'needIngredients'));
  world = fixture('zorbas-kitchen');
  world.act(world.level.objects.find(o => o.id === 'mug'));
  assert.equal(world.activity, null);
  world.act(world.level.objects.find(o => o.id === 'sunset'));
  assert.equal(world.finished, false);
  world.flags.cocoa = true;
  world.act(world.level.objects.find(o => o.id === 'sunset'));
  assert.equal(world.finished, false);
  world = fixture('ann-garden', {cocoa: true});
  world.act(world.level.objects.find(o => o.id === 'picnic'));
  assert.equal(world.flags.picnic, undefined);
});

test('stirring requires six alternating directions; holding a direction or Action cannot finish', () => {
  const world = fixture('zorbas-kitchen', {tree: true, muck: true}, {x: 1096});
  tick(world, {action: true});
  assert.equal(world.activity, 'stir');
  tick(world, {}, 1);
  tick(world, {right: true}, 180);
  assert.equal(world.stirs, 1);
  tick(world, {}, 30);
  tick(world, {right: true}, 60);
  assert.equal(world.stirs, 1, 'Releasing and repeating the same direction does not count');
  tick(world, {left: true, right: true}, 30);
  assert.equal(world.stirs, 1, 'Opposite buttons held together do not count');
  tick(world, {action: true}, 120);
  assert.equal(world.flags.cocoa, undefined);
  assert.equal(world.activity, null, 'Action cancels an unfinished mixing activity');
  tick(world);
  tick(world, {action: true});
  tick(world);
  tick(world, {right: true}, 60);
  assert.equal(world.stirs, 1, 'Cancelling and reopening the mug preserves the previous direction');
  for (const direction of ['left', 'right', 'left', 'right', 'left']) tick(world, {[direction]: true});
  assert.equal(world.stirs, 6);
  assert.ok(world.flags.cocoa);
});

test('switching preserves each location, inventory, collected notes and checkpoint', () => {
  const world = fixture('ann-stones', {handshake: true, bandage1: true}, {x: 700});
  world.collected.s1 = true;
  world.refresh();
  const ann = {x: world.player.x, y: world.player.y, checkpoint: world.checkpoint};
  assert.ok(world.switchCharacter());
  assert.equal(world.levelId, 'zorbas-brook');
  travel(world, 600);
  const giant = {x: world.player.x, y: world.player.y, checkpoint: world.checkpoint};
  assert.ok(world.switchCharacter());
  assert.equal(world.levelId, 'ann-stones');
  assert.deepEqual({x: world.player.x, y: world.player.y, checkpoint: world.checkpoint}, ann);
  assert.ok(world.switchCharacter());
  assert.deepEqual({x: world.player.x, y: world.player.y, checkpoint: world.checkpoint}, giant);
  assert.ok(world.flags.bandage1);
  assert.ok(world.collected.s1);
  assert.equal(world.heartCount, Object.keys(world.collected).length);
});

test('save and reload preserve stage, locations, progress, unlocked map and inventory', () => {
  const world = fixture('zorbas-kitchen', {handshake: true, tree: true, muck: true, cocoa: true}, {x: 1100});
  world.stirs = 6;
  world.collected.k1 = true;
  world.markComplete('ann-garden');
  world.markComplete('ann-stones');
  world.positions['ann-garden'] = {x: 1930, y: 0, checkpoint: 1650};
  world.refresh();
  const save = JSON.parse(JSON.stringify(world.save()));
  const restored = new World(true, save);
  assert.deepEqual(restored.save(), save);
  assert.equal(restored.reducedMotion, true);
  assert.equal(restored.goal(), 'backToAnn');
  assert.ok(restored.switchCharacter());
  assert.equal(restored.levelId, 'ann-garden');
  assert.equal(restored.player.x, 1930);
  assert.equal(restored.checkpoint, 1650);
  assert.equal(restored.countFood(), 0);
});

test('the completed story remains complete while the map permits further exploration and switching', () => {
  const world = story();
  assert.equal(world.goal(), 'finished');
  assert.equal(new World(false, world.save()).scene, 'sunset');
  assert.ok(world.enter('ann-garden'));
  assert.ok(world.finished);
  assert.equal(world.scene, 'ann');
  assert.equal(new World(false, world.save()).scene, 'ann');
  assert.notEqual(world.goal(), 'finished');
  const before = world.player.x;
  tick(world, {left: true}, 10);
  assert.ok(world.player.x < before, 'Map travel restores movement after the ending');
  assert.equal(world.progress(), 100);
  assert.ok(world.switchCharacter());
  assert.equal(world.levelId, 'zorbas-kitchen');
  assert.equal(world.scene, 'zorbas');
  assert.ok(world.flags.picnic);
  assert.ok(world.flags.cocoa);
});

test('jump requires release and separate worlds own their mutable state', () => {
  const world = new World();
  tick(world);
  tick(world, {jump: true}, 180);
  assert.equal(world.events.filter(e => e.type === 'jump').length, 1);
  assert.equal(world.player.y, 0);
  tick(world);
  tick(world, {jump: true});
  assert.equal(world.events.filter(e => e.type === 'jump').length, 2);
  const fresh = new World();
  world.level.platforms[0].h = 999;
  world.flags.patient = true;
  assert.equal(fresh.flags.patient, undefined);
  assert.equal(fresh.level.platforms[0].h, 24);
  assert.equal(fresh.heartCount, 0);
  assert.deepEqual(fresh.completed, []);
});

for (const level of LEVELS) {
  test(`${level.id} can also be traversed backwards after opening its gates`, () => {
    const world = fixture(level.id, {lever1: true, lever2: true, logBridge: true}, {x: level.length - (level.actor === 'ann' ? 34 : 108) - 50});
    travel(world, level.spawn);
    assert.ok(Math.abs(world.player.x - level.spawn) < 3);
    assert.ok(world.player.grounded);
  });
}
