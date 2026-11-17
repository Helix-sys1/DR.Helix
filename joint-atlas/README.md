# Joint Atlas

Learn the ligaments of the human body, joint by joint, on an interactive 3D model.

**Use it here: [samplesize1.com/tools/joint-atlas](https://samplesize1.com/tools/joint-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/) and [Muscle Atlas](../muscle-atlas/).

## What it does

- The 88 ligaments, joint capsules, discs, menisci and labra that anatomy courses teach by name, or all 188 pieces in the model (with the parts of the iliofemoral, deltoid, coracoclavicular and other ligaments asked separately)
- The whole body or one joint at a time: jaw and throat; spine, ribs and pelvis; shoulder, elbow and forearm, wrist, hand; hip, knee, ankle, foot
- **Study** each ligament's name, what it joins, what it does and how it commonly gets hurt
- **Practice**: find each ligament; misses come back a few questions later until you get them right
- **Test**: every ligament once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- The skeleton underneath (clicking a bone names it), with the costal and laryngeal cartilages see-through
- Layers: hide the joint capsules and membranes to see the ligaments on their own, or keep only the deep pieces inside the joints (cruciate ligaments, menisci, labra, discs)
- Hints on or off: everyday names and abbreviations like "Anterior cruciate ligament (ACL)" and "Plantar calcaneonavicular ligament (spring ligament)", or anatomical names only
- X-ray and peel modes to reach pieces underneath others
- Voice commands ("left knee", "shoulder", "spine", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `joints.glb` | The 3D model: ligaments, capsules, discs and menisci, plus the skeleton |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`joints.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Ligaments are drawn at least 2 mm thick for visibility. If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
