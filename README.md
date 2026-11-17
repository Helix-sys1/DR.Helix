# Anatomy Atlas

Ten interactive 3D atlases for learning human anatomy: bones and their landmarks, muscles, ligaments, nerves, the heart and blood vessels, the lymphatic system, the organs, the brain and the teeth. Each one has a Study mode, a Practice mode that brings your misses back, and a timed Test, all in the browser, with no account.

Made by [@samplesize_1](https://www.instagram.com/samplesize_1/). **Use them at [samplesize1.com/tools/anatomy](https://samplesize1.com/tools/anatomy/).**

| Atlas | What you learn | Use it | Code |
| --- | --- | --- | --- |
| Bone Atlas | Every bone in the human body | [Open](https://samplesize1.com/tools/bone-atlas/) | [`bone-atlas/`](bone-atlas/) |
| Bone Landmarks | The landmarks on each bone, from trochanters to foramina | [Open](https://samplesize1.com/tools/bone-landmarks/) | [`bone-landmarks/`](bone-landmarks/) |
| Muscle Atlas | The muscles of the human body, layer by layer | [Open](https://samplesize1.com/tools/muscle-atlas/) | [`muscle-atlas/`](muscle-atlas/) |
| Joint Atlas | The ligaments that hold the joints together | [Open](https://samplesize1.com/tools/joint-atlas/) | [`joint-atlas/`](joint-atlas/) |
| Nerve Atlas | The nerves of the human body | [Open](https://samplesize1.com/tools/nerve-atlas/) | [`nerve-atlas/`](nerve-atlas/) |
| Heart Atlas | The parts of the heart and the body's main blood vessels | [Open](https://samplesize1.com/tools/heart-atlas/) | [`heart-atlas/`](heart-atlas/) |
| Lymph Atlas | The lymph nodes and lymphatic organs | [Open](https://samplesize1.com/tools/lymph-atlas/) | [`lymph-atlas/`](lymph-atlas/) |
| Organ Atlas | The organs, system by system | [Open](https://samplesize1.com/tools/organ-atlas/) | [`organ-atlas/`](organ-atlas/) |
| Brain Atlas | The parts of the human brain | [Open](https://samplesize1.com/tools/brain-atlas/) | [`brain-atlas/`](brain-atlas/) |
| Tooth Atlas | The adult teeth, by name and number | [Open](https://samplesize1.com/tools/tooth-atlas/) | [`tooth-atlas/`](tooth-atlas/) |

Each atlas's folder has its own README: what it covers, its files and where its 3D model comes from.

## Run them yourself

They're plain web pages with no build step. Browsers won't load the 3D models from a page opened straight from disk, so serve the whole repository with any static file server:

```sh
git clone https://github.com/SampleSize1/Anatomy-Atlas.git
cd Anatomy-Atlas
python3 -m http.server 8000
```

Then open an atlas's folder, such as http://localhost:8000/bone-atlas/. Serve the repository itself, not one atlas's folder: every atlas loads the shared files from the folder above it.

## How it's put together

Every atlas runs on one engine. An atlas's folder holds only what makes it that atlas: its page and settings (`index.html`), everything it teaches (`data.js`), its 3D model (`.glb`) and, where it has them, its other languages (`lang/`). A change to the engine changes all ten.

| Shared file | What it is |
| --- | --- |
| `atlas-engine/atlas.js` | The atlas engine: the 3D view, Study, Practice and Test, zooming, X-ray, voice commands |
| `atlas-engine/answers.js` | Typed answers for "Name it" questions: which spellings count, and the hints |
| `atlas-engine/atlas.css` | The styles |
| `atlas-engine/text.js` | The words every atlas shares, in English; `atlas-engine/lang/<code>.json` has them in other languages |
| `atlas-engine/three-bundle.js` | [three.js](https://threejs.org/) r169, bundled into one file |
| `js/progress.js` | Saves progress and best scores in the browser (localStorage) |
| `js/language.js` | Languages: picks one (a `?lang=` link, the one picked before, the browser's), the menu, and the text in it |

## Licences and credits

- **Code**: MIT, see [LICENSE](LICENSE).
- **3D models**: from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The Organ Atlas also uses pieces straight from BodyParts3D ([CC BY-SA 2.1 JP](https://creativecommons.org/licenses/by-sa/2.1/jp/deed.en)) and from the [HuBMAP Human Reference Atlas](https://humanatlas.io/3d-reference-library) ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)). Each atlas's README gives the full credit for its model and what was changed. If you reuse or change a model, keep its credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](licenses/three.js.txt).

## Updates and feedback

This repository is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever an atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
