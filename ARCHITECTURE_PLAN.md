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
**Status**: TODO
- Different step sounds for different block types (stone, dirt, sand, wood)
- Volume varies slightly for natural feel
- Landing impact sound after falling

## Goal 11: FOV Effects
**Status**: TODO  
- FOV widens when sprinting
- FOV narrows slightly when crouching/sneaking
- Smooth FOV transitions

## Goal 9: Better Cloud System
**Status**: DONE
- Volumetric-ish flat clouds with noise-based shapes
- Clouds cast soft shadows on terrain
- Cloud density varies with weather
