# Organ Atlas

Learn the organs of the respiratory, digestive, urinary, reproductive and endocrine systems on an interactive 3D model.

**Use it here: [samplesize1.com/tools/organ-atlas](https://samplesize1.com/tools/organ-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/), [Muscle Atlas](../muscle-atlas/) and [Brain Atlas](../brain-atlas/).

## What it does

- Five systems, each divided the way textbooks divide them: respiratory (nose and sinuses, pharynx, larynx, trachea and bronchi, lungs), digestive (mouth, pharynx and esophagus, stomach, small intestine, large intestine, accessory organs), urinary (kidneys, ureters, bladder and urethra), reproductive (male and female) and endocrine (brain, neck and chest, abdomen and pelvis)
- The 54 organs an intro anatomy course asks you to know (51 on the female body), or all 71 parts in the model: the lobes of the lungs and liver, the parts of the pharynx, the main, lobar and segmental bronchi, the renal pelvis, the parts of the pituitary and penis, the cervix, and more
- Male or female body: the reproductive organs (and the urethra) switch; everything else is shared
- Organs that belong to two systems appear in both (the pancreas, testes and ovaries are also endocrine; the pharynx is also digestive)
- **Study** each organ's name and what it does
- **Practice**: find each organ; misses come back a few questions later until you get them right
- **Test**: every organ once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- Deep setting hides the outer organs (lungs, liver, stomach, intestines) to reach the kidneys, pancreas and pelvic organs behind them; X-ray and peel modes too
- A ghosted skeleton, the heart and the diaphragm for context (clicks pass through the skeleton)
- Colour-coded like a textbook diagram, one hue family per system
- Hints on or off: everyday names like "Trachea (windpipe)" and "Uterus (womb)", or anatomical names only
- Voice commands ("head", "chest", "abdomen", "pelvis", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `organs.glb` | The 3D organ model (99 pieces plus the skeleton, heart and diaphragm) |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`organs.glb`): most pieces are from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The jejunum and ileum come straight from BodyParts3D ([CC BY-SA 2.1 JP](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)), fitted into the same body. The female pelvic organs (uterus, uterine tubes, ovaries, vagina) are from the [HuBMAP Human Reference Atlas 3D Reference Object Library](https://humanatlas.io/3d-reference-library) (Browne K, Schlehlein H, Herr BW II, Quardokus EM, Bueckle A, Börner K), licensed [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), segmented from the Visible Human Female and fitted to the pelvis of the Z-Anatomy model. If you reuse or change the model, keep these credits and share the Z-Anatomy and BodyParts3D parts under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
