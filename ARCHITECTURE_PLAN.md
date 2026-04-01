# Architecture Plan — Minecraft Three.js Clone

## Codebase Overview
- **Renderer**: Three.js with InstancedMesh for blocks, shadow maps, day/night cycle
- **World**: Chunk-based terrain with biomes (plains, desert, forest, mountains, ocean), simplex noise
- **Player**: First/third person, survival/creative/spectator modes, physics, combat
- **Systems**: Particles, SoundManager (synthesized), Weather, Mobs, Multiplayer, UI (HTML DOM)

## Current State Assessment
- Day/night cycle exists but sky is a flat color (no gradient dome)
- Fog exists but is basic linear fog
- No underwater visual effects (tint, bubbles)
- Player movement is functional but lacks head bob and smooth camera
- No ambient particles (dust motes, fireflies at night)
- Sound system exists but no ambient music/nature sounds during gameplay

---

## Goal 1: Immersive Sky Dome with Gradient Horizon
**Status**: DONE
- Replace flat `scene.background` color with a sky shader dome that blends zenith→horizon colors
- Horizon glow during dawn/dusk for atmospheric depth
- Stars rendered on the dome instead of separate Points object
- Sun/moon halos

## Goal 2: Underwater Visual Effects
**Status**: DONE
- Blue-green color overlay when camera is below water level
- Reduced fog distance underwater
- Distortion/waviness post-processing effect (simple UV offset)
- Bubble particles rising from player

## Goal 3: Ambient Particles & Head Bob
**Status**: DONE
- Floating dust motes in sunlight (small bright particles drifting slowly)
- Fireflies at night near grass (small yellow emissive particles)
- Subtle head bob when walking for immersion
- Camera tilt when sprinting

---

## Goal 4: Ambient Background Music System
**Status**: DONE
- Procedural ambient music during gameplay (calm pads, piano-like tones)
- Different moods for day vs night
- Underground/cave ambient droning sounds
- Smooth crossfading between tracks

## Goal 5: Improved Crosshair & Block Selection UI
**Status**: DONE
- Animated crosshair that expands when breaking blocks
- Block breaking progress bar on the crosshair
- Hotbar item tooltip with block icon preview
- Smoother hotbar scroll animation

## Goal 6: Vignette & Post-Processing Effects
**Status**: DONE
- Screen vignette (dark edges) for immersion
- Low-health red vignette pulse
- Damage flash effect (red tint)
- Speed lines when sprinting

---

## Goal 7: Improved Water Rendering
**Status**: DONE
- Animated water surface with vertex displacement (wave effect)
- Water surface reflection/sheen
- Semi-transparent water blocks with depth-fade

## Goal 8: Smooth Lighting / Ambient Occlusion
**Status**: SKIPPED — InstancedMesh shares materials, per-face lighting requires custom shader or geometry refactor. Deferred to future.

---

## Goal 10: Footstep Sound Variety
**Status**: DONE
- Different step sounds for different block types (stone, dirt, sand, wood)
- Volume varies slightly for natural feel
- Landing impact sound after falling

## Goal 11: FOV Effects
**Status**: DONE
- FOV widens when sprinting
- FOV narrows on landing impact
- Smooth FOV transitions

---

## Goal 12: Smooth Block Place/Break Particles Enhancement
**Status**: DONE
- More particles when breaking blocks (8→16, burst pattern)
- Block place "pop" scale animation effect
- Block type-specific particle colors

## Goal 13: Improved Torch/Light Rendering
**Status**: DONE
- Torch flicker effect (oscillating light intensity)
- Per-torch phase offset for natural flicker

## Goal 14: Loading Progress Bar & Death Screen Animation
**Status**: DONE
- Green progress bar during game loading
- Death screen fade-in and title slide animation

---

## Goal 15: Smooth Camera Transition on Death/Respawn
**Status**: DONE
- Camera slowly rotates on death (death cam effect)
- Fade to black on respawn, fade back in at spawn

## Goal 16: Biome-Specific Fog Colors
**Status**: DONE

---

## Goal 17: Sprint Speed Lines Effect
**Status**: DONE
- White radial lines on screen edges when sprinting
- Intensity increases with sprint duration

## Goal 18: Improved Hotbar with Tooltip Preview
**Status**: DONE

## Goal 19: Improved Mob Death Animation
**Status**: DONE
- Cinematic death: tilt, sink, red flash, shrink
- Smooth requestAnimationFrame-driven animation
- Show block name tooltip on hotbar hover
- Selected slot glow animation
- Desert biome: warm sandy fog
- Ocean biome: blue-tinted fog
- Forest biome: slightly green-tinted fog
- Mountains: thinner, lighter fog

## Goal 9: Better Cloud System
**Status**: DONE
- Volumetric-ish flat clouds with noise-based shapes
- Clouds cast soft shadows on terrain
- Cloud density varies with weather

---

## Goal 20: Block Highlight Outline
**Status**: DONE
- Show a wireframe cube outline around the block the player is looking at
- Outline color changes based on whether the block can be broken
- Smooth fade-in/out when switching targets
- Works in all game modes

## Goal 21: Experience Bar Polish & Day Counter HUD
**Status**: DONE
- Polished XP bar with level number, smooth fill animation, glow on level-up
- Day counter display showing survived days (Day 1, Day 2, etc.)
- Day transition notification ("Day 2 has begun")
- Compact HUD placement

## Goal 22: Chest Inventory UI
**Status**: DONE

## Goal 23: Better Mob AI with Obstacle Avoidance
**Status**: DONE
- Hostile mobs (zombie, creeper, wither skeleton, spider) use pathfinding-aware movement
- Mobs jump over 1-block obstacles when chasing player
- Mobs sidestep around 2+ block walls
- Smoother, more challenging combat encounters
- Open chest with right-click interaction
- Grid-based chest inventory (27 slots like Minecraft)
- Click to move items between chest and player hotbar
- Visual chest open/close animation
- Items persist per-chest in world data

## Goal 24: Swimming Animation & Water Movement Polish
**Status**: IN PROGRESS
- Arm stroke animation when swimming (first-person arm sweeps)
- Camera tilt when entering/exiting water
- Bubble particle burst when diving
- Smoother water entry/exit transitions

## Goal 25: Nether Portal Effect
**Status**: PENDING
- Swirling purple overlay when near/entering a nether portal block
- Screen distortion effect with portal proximity
- Obsidian portal frame detection
- Visual nether-themed color shift
