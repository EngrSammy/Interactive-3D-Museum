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

## Run it locally

It is a single static page. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

The repository deploys to Vercel as a static site with no build step (Framework Preset: **Other**).

## Built with

- [three.js](https://threejs.org/) r128 (WebGL), loaded from cdnjs
- HTML5 Canvas 2D API for procedural textures
- Instrument Serif and Archivo from Google Fonts

## About

CSC course project by Oyewade Samuel Oluwatomisin, Department of Computer Science and Engineering, Obafemi Awolowo University.

This is a student project inspired by OAU's museums. The exhibits are stylised 3D models, not scans or replicas of objects in the university's collections.
# Interactive-3D-Museum
