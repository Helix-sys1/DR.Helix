# Muscle Atlas

Learn the muscles of the human body, layer by layer, on an interactive 3D model.

**Use it here: [samplesize1.com/tools/muscle-atlas](https://samplesize1.com/tools/muscle-atlas/)**

Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/).

## What it does

- The 112 muscles an intro anatomy course asks you to know, or all 208 in the model (with the heads of the deltoid, triceps, hamstrings and others asked separately)
- The whole body or one region at a time: head, neck, torso, arm or leg
- **Study** each muscle's name and what it does
- **Practice**: find each muscle; misses come back a few questions later until you get them right
- **Test**: every muscle once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- Layers: peel off the outer muscles, or show only the deepest ones
- Hints on or off: everyday and gym names like "Latissimus dorsi (lats)", or anatomical names only
- X-ray and peel modes to reach muscles underneath others
- Voice commands to zoom ("left leg", "back", "glutes", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches, in English: regions, names, notes, and its own words |
| `muscles.glb` | The 3D muscle model |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`muscles.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
