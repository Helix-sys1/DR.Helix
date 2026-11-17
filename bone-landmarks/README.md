# Bone Landmarks

Learn the bone landmarks an anatomy lab practical asks for on an interactive 3D skeleton: trochanters, epicondyles, foramina, fossae, crests and more, bone by bone.

**Use it here: [samplesize1.com/tools/bone-landmarks](https://samplesize1.com/tools/bone-landmarks/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/).

## What it does

- 350 landmarks on 43 bones, each cut out of its bone as its own piece, on the rest of the skeleton
- Two levels: the 218 markings a first anatomy course asks for in a lab practical, or all 350 (adding the finer markings of a regional anatomy course, and each typical vertebra's parts)
- The whole skeleton, one region (skull, spine and rib cage, shoulder and arm, hip and leg) or one bone at a time, each landmark shown from its own best view
- **Study**: click any landmark to see its name, what it is, what attaches to it or passes through it, and why it matters in the clinic
- **Practice**: find each landmark; misses come back a few questions later until you get them right
- **Test**: every landmark once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One landmark is shown on its own bone and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count
- Hints on or off
- X-ray and peel modes to reach landmarks on the far side of a bone
- Voice commands to zoom ("left femur", "scapula", "sphenoid", "whole skeleton") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, views, voice words) |
| `data.js` | Everything the atlas teaches, in English: regions, landmarks, names, notes, each landmark's best view, and its own words |
| `landmarks.glb` | The 3D model: the skeleton, with each landmark cut out of its bone as its own piece |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`landmarks.glb`): the bones are from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Z-Anatomy labels landmarks with a point but has no landmark areas, so every area here was marked by hand, bone by bone, from published anatomy descriptions, checked a second time, and cut out of the bone; the result is shared under the same licence. If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
