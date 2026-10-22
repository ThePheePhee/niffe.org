# Big & small adventures

A browser side-scroller adapted from J. Dvärby's Dr. Ann book. `/dr-ann/game/` is linked from both book editions. Plain HTML, canvas, CSS and JavaScript; no build, libraries, accounts, analytics or backend. Serve the repository root. GitHub Pages publishes `main` at niffe.org.

## Four chapters, two perspectives

1. **The doctor's bag:** Ann searches for three bandages on progressively higher ledges, then wraps Mc Dinkelspiel's foot. The story explicitly keeps its five-day rest.
2. **A hand as big as a hill:** Ann operates two levers, crosses the brook on stepping stones and climbs to the gentle handshake.
3. **The whole-tree stirrer:** Zorbas picks up a whole tree, rolls a log over a brook and collects lake muck. The same house is now tiny.
4. **A rather odd picnic:** Zorbas stirs his rocket mug with alternating left/right inputs. Return to Ann's garden to collect her coffee, cheese sandwich and tomatoes, then switch back to Zorbas for the shore and sunset.

The chapter map revisits unlocked levels; C switches to the other character's last chapter and position. During the picnic task it returns Ann to her garden. Collected items, solved levers, bridges, checkpoints and each position remain saved. Finishing the story still permits free exploration.

Platforms have solid sides, and higher ledges require real jumps. Missing water/mud crossings produces a visible fall, then returns the character to the latest dry checkpoint. There are no lives or permanent failures. Inventory and solved puzzles survive; the crossing must be attempted again. Return ledges make every level traversable in both directions. Jump buffering and a short edge grace period help without automatically making the jumps.

## Controls

- Left/right arrows or A/D: walk. Space, Up or W: jump.
- E (also X or Down): the named nearby action. Hold for the handshake or rolling the log.
- At the mug, alternate left/right six times to stir. No rhythm or speed requirement. E leaves the activity.
- C: switch character after meeting Zorbas. M: chapter map. Escape: pause/resume.
- Touch controls support simultaneous movement/jumping and quick taps. The action icon and label change with the actual object. Unavailable actions are disabled.
- Starting play begins the original chiptune score, unless muted previously. The Music button mutes or enables it. Music and movement pause when leaving the tab/window or opening the map. Game and language preferences stay on this device.

## Art and music

The sharper paper/ink world uses original book cutouts for Ann and Mc Dinkelspiel, Zorbas's original face with an articulated long-limbed body and enormous forearms/hands, hatch shading, angular trees, visible ground gaps and five parallax layers. Source image files are unchanged: Canvas crops and layers them at runtime. Story moments show the book's existing bandage, handshake, rocket mug, breakfast and sunset illustrations. Reduced motion removes ambient movement and uses a steady respawn marker.

`music.js` contains original 16-bar modal chiptunes for Ann, Zorbas and evening, with pulse/triangle voices, bass, percussion and event cues. Web Audio creates all sound locally; no samples or downloads. Lookahead scheduling, bounded voices, a master gain and limiter keep playback steady. Pausing/muting stops queued voices and resumes without a backlog.

## Source and checks

`levels.js`: geometry and objects. `world.js`: deterministic physics, puzzle progress and saves. `art.js`: canvas artwork. `game.js`: UI/input, chapter map and cutscenes. `copy.js`: Swedish/English. `music.js`: soundtrack. The existing book files and its artwork remain separate from game progress.

Run `node --test dr-ann/game/test-world.mjs` from the repository root. Tests traverse the full story with real movement/jump inputs at 60 and 30 fps, travel every level backwards, and check interactions, gates, stirring, scale switching, saves, post-ending exploration, real missed jumps, falling, checkpoint recovery and successful retry. Browser QA covers the chapter map, contextual controls, story images, music toggle and responsive layouts.
