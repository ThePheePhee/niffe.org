import assert from 'node:assert/strict';
import test from 'node:test';
import {World} from './world.js';

const idle = {};
const right = {right: true};
const helpRight = {right: true, action: true};
const helpLeft = {left: true, action: true};

function runFor(world, seconds, input = idle, dt = 1 / 60) {
  for (let frame = 0; frame < Math.ceil(seconds / dt); frame++) world.update(input, dt);
}

function until(world, predicate, input = idle, seconds = 40, dt = 1 / 60) {
  for (let frame = 0; frame < Math.ceil(seconds / dt) && !predicate(world); frame++) {
    world.update(input, dt);
  }
  assert.ok(predicate(world), `Timed out: scene=${world.scene}, phase=${world.phase}, x=${world.player.x}, stirs=${world.stirs}`);
}

for (const dt of [1 / 120, 1 / 60, 1 / 30, .04]) {
  test(`holding Right and Help completes the story without explicit jumps at dt=${dt}`, () => {
    const world = new World();
    until(world, w => w.phase === 7, helpRight, 45, dt);
    assert.equal(world.scene, 'sunset');
    assert.equal(world.bandage, true);
    assert.equal(world.healed, true);
    assert.equal(world.tree, true);
    assert.equal(world.muck, true);
    assert.equal(world.stirs, 3);
    assert.equal(world.progress(), 100);
    assert.ok(world.events.some(event => event.type === 'jump'), 'Ann automatically traverses the steps');
    assert.deepEqual(world.events.filter(event => event.type === 'help').map(event => event.value),
      ['bandage', 'bandaged', 'handshake', 'tree', 'muck', 'cocoa']);
    assert.equal(world.events.filter(event => event.type === 'scale').length, 1);
    assert.equal(world.events.filter(event => event.type === 'end').length, 1);
    const position = {...world.player};
    runFor(world, 2, helpLeft, dt);
    assert.deepEqual(world.player, position, 'the ending stays settled');
  });
}

test('walking alone cannot skip bandaging, the tree, muck, stirring, or the ending', () => {
  const world = new World();
  runFor(world, 20, right);
  assert.equal(world.phase, 1);
  assert.equal(world.bandage, true);
  assert.equal(world.healed, false);
  assert.ok(world.player.x < 830, 'unbandaged friend gates Ann before the climbing path');
  until(world, w => w.phase === 2, helpLeft);
  until(world, w => w.scene === 'zorbas', helpRight);

  runFor(world, 20, right);
  assert.equal(world.phase, 3);
  assert.equal(world.tree, false);
  until(world, w => w.phase === 4, helpLeft);

  runFor(world, 20, right);
  assert.equal(world.phase, 4);
  assert.equal(world.muck, false);
  until(world, w => w.phase === 5, helpLeft);

  runFor(world, 20, right);
  assert.equal(world.phase, 5);
  assert.equal(world.stirs, 0);
  until(world, w => w.stirs === 1, helpLeft);
  until(world, w => w.phase === 6, {action: true});
  assert.equal(world.stirs, 3);

  runFor(world, 20, right);
  assert.equal(world.phase, 6);
  until(world, w => w.phase === 7, {action: true});
});

test('left boundary holds for both character scales', () => {
  const world = new World();
  runFor(world, 10, {left: true});
  assert.equal(world.player.x, 25);
  until(world, w => w.scene === 'zorbas', helpRight);
  runFor(world, 10, {left: true});
  assert.equal(world.player.x, 25);
  assert.equal(world.player.facing, -1);
});

test('jump rises, lands, requires release, and does not repeat while held', () => {
  const world = new World();
  world.update({jump: true}, 1 / 60);
  assert.ok(world.player.y > 0);
  assert.ok(world.player.vy > 0);
  assert.equal(world.player.grounded, false);
  runFor(world, 3, {jump: true});
  assert.equal(world.player.y, 0);
  assert.equal(world.player.grounded, true);
  assert.equal(world.events.filter(event => event.type === 'jump').length, 1);
  world.update(idle, 1 / 60);
  world.update({jump: true}, 1 / 60);
  assert.equal(world.events.filter(event => event.type === 'jump').length, 2);
});

test('the handshake freezes Ann, then resets the player and camera to giant scale', () => {
  const world = new World();
  until(world, w => w.transition > 0, helpRight);
  assert.equal(world.scene, 'ann');
  assert.equal(world.phase, 2);
  assert.deepEqual([world.player.w, world.player.h], [22, 38]);
  assert.ok(world.player.y >= 52, 'Ann reaches the hand via the raised stones');
  const position = {...world.player};
  world.update({left: true, jump: true}, 1 / 60);
  assert.deepEqual(world.player, position);
  until(world, w => w.scene === 'zorbas');
  assert.deepEqual(world.player, {x: 290, y: 0, w: 70, h: 112, vx: 0, vy: 0, facing: 1, grounded: true});
  assert.equal(world.camera, 0);
  assert.equal(world.phase, 3);
  assert.equal(world.transition, 0);
  assert.equal(world.hearts.length, 5);
  assert.ok(world.hearts.every(heart => !heart.got));
  assert.deepEqual(world.particles, []);
});

test('a fresh World resets all game state and owns separate mutable collections', () => {
  const played = new World(true);
  until(played, w => w.phase === 7, helpRight);
  assert.ok(played.heartCount > 0);
  const reset = new World(true);
  assert.equal(reset.scene, 'ann');
  assert.equal(reset.phase, 0);
  assert.equal(reset.time, 0);
  assert.equal(reset.camera, 0);
  assert.equal(reset.bandage, false);
  assert.equal(reset.healed, false);
  assert.equal(reset.tree, false);
  assert.equal(reset.muck, false);
  assert.equal(reset.stirs, 0);
  assert.equal(reset.transition, 0);
  assert.equal(reset.heartCount, 0);
  assert.equal(reset.actionCooldown, 0);
  assert.equal(reset.jumpLatch, false);
  assert.equal(reset.walkTime, 0);
  assert.equal(reset.reducedMotion, true);
  assert.deepEqual(reset.player, {x: 94, y: 0, w: 22, h: 38, vx: 0, vy: 0, facing: 1, grounded: true});
  assert.equal(reset.hearts.length, 7);
  assert.ok(reset.hearts.every(heart => !heart.got));
  assert.deepEqual(reset.events, []);
  assert.deepEqual(reset.particles, []);
  assert.notEqual(reset.player, played.player);
  assert.notEqual(reset.hearts, played.hearts);
  assert.notEqual(reset.events, played.events);
});
