# OAU Heritage Gallery

An interactive 3D museum that runs in the browser, built with WebGL and three.js. It is inspired by the museums of Obafemi Awolowo University, Ile-Ife: one royal blue hall split into a **Natural History** gallery and an **Ife Art and Antiquities** gallery, with twelve exhibits in total.

Every exhibit is modelled in code from geometric primitives and canvas-drawn textures. There are no external 3D models or images.

## Features

- First-person walking with collision against walls, plinths and the partition
- Drag to look around; WASD or arrow keys to move; on-screen controls on phones
- Click, tap or press E to open a museum-style wall label for any exhibit
- Guided tour from the Exhibits menu, with smooth camera paths through the doorway
- Spotlights, soft shadows, tone mapping and cube-map reflections on metal and glass
- Respects the reduced-motion setting

## Exhibits

| Natural History | Ife Art and Antiquities |
| --- | --- |
| 01 Ammonite | 07 Copper-alloy head |
| 02 Butterfly specimen drawer | 08 Terracotta head |
| 03 Rocks of the Basement Complex | 09 Opa Oranmiyan |
| 04 Hinge-back tortoise | 10 Potsherd pavement |
| 05 Herbarium sheet | 11 Ife glass beads |
| 06 African rock python skeleton | 12 Pottery vessel |

## Works offline

Everything the museum needs is in this repository: three.js is in `vendor/` and the fonts are in `fonts/`, so nothing is loaded from the internet.

- **From a folder:** download or clone the repository and open `index.html` in Chrome, Edge or Firefox. Keep `vendor/` and `fonts/` next to it.
- **From the hosted site:** visit it once while online. A service worker (`sw.js`) saves every file, and the site then opens with no connection. On a phone you can also choose "Add to Home screen" to install it like an app.

When you change any file, bump `VERSION` in `sw.js` so visitors receive the new copy.

## Run it locally

Open `index.html` directly, or serve the folder:

```bash
npx serve .
```

## Project structure

```
index.html              the whole museum (HTML, CSS and JavaScript)
vendor/three.min.js     three.js r128, bundled for offline use
fonts/                  Instrument Serif and Archivo (woff2)
sw.js                   offline cache for the hosted site
manifest.webmanifest    lets the site be installed as an app
icon.svg                app icon
vercel.json             tells Vercel not to cache sw.js
```

## Deploy

The repository deploys to Vercel as a static site with no build step (Framework Preset: **Other**).

## Built with

- [three.js](https://threejs.org/) r128 (WebGL), bundled in `vendor/` (MIT licence)
- HTML5 Canvas 2D API for procedural textures
- Instrument Serif and Archivo fonts, bundled in `fonts/` (SIL Open Font Licence)

## About

CSC course project by Oyewade Samuel Oluwatomisin, Department of Computer Science and Engineering, Obafemi Awolowo University.

This is a student project inspired by OAU's museums. The exhibits are stylised 3D models, not scans or replicas of objects in the university's collections.
