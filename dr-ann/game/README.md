# Little steps. Big friends.

A small, forgiving pixel side-scroller adapted from J. Dvärby's Dr. Ann book. Open `/dr-ann/game/`. The book cover and reading settings link here, and the game links back to the book. Swedish and English are available; the initial language follows the book's saved preference. No build, third-party assets, network dependencies, accounts, analytics or backend.

## Play

- Move: left/right arrows or A/D; on-screen arrow buttons on touch devices.
- Jump: Space, Up or W. Small steps and larger rocks also receive automatic climbing assistance, so precise jumps are never required.
- Help: hold X, E or Down, or hold the heart button near a friend or object. The button lights up when an action is available.
- Pause: the pause button or Escape. Switching tabs or leaving the window pauses the game and clears held controls. Replay starts from the beginning.
- Sound is optional and starts muted. Reduced motion removes moving clouds and smooth camera following.

Ann finds a bandage, helps Mc Dinkelspiel's foot and reaches Zorbas for the gentle handshake. The bandage does not instantly heal his foot: the game explicitly keeps the five-day rest from the book. A camera pullback changes the playable perspective to Zorbas. At his scale, the rocks are tiny and a whole tree becomes a stirrer for the rocket mug of geggaO'boy. Scoop muck, stir three times, then join the three friends at sunset. Hearts are optional; there are no enemies, lives, time limit or required collection totals. Holding Help works without timed taps.

`world.js` contains deterministic movement and story state, `art.js` draws the original canvas pixel art and parallax layers, `game.js` connects input, localized interface and synthesized sound. `index.html` and `style.css` provide the responsive interface. The sprite designs follow the book's blond Ann, green pointed-eared Zorbas and moustached acorn Mc Dinkelspiel. Scale changes are a change of viewpoint, not magical character resizing.

## Check

From the repository root: `node --test dr-ann/game/test-world.mjs`. Tests cover a complete playthrough at four frame rates, all interaction gates, boundaries, jumping, the scale change, ending and reset.

Serve the repository root with any static HTTP server. GitHub Pages publishes the root of `main` at niffe.org, as for the book.
