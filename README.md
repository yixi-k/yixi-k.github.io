# yixi-k.github.io

Personal portfolio of **Jebun Naher Keya**: data science, machine learning, deep learning and applied AI.

Live at **https://yixi-k.github.io**

## How the site works

- `index.html`: the page (HTML, CSS and vanilla JavaScript, no build step). GitHub Pages serves it from `main`.
- `assets/projects.js`: the list of projects. Cards, category sections and the project detail window are generated from it.
- `assets/img/`: images. `cover.jpg` is the hero cover banner; project screenshots and plots go here too.

## Add or update a project

1. Open `assets/projects.js` and copy an existing entry.
2. Set `id`, `title`, `category` (`data-science`, `ml-dl`, `applied-ai` or `research`), `status` (`Completed`, `Live`, `In progress` or `Coming soon`) and `summary`.
3. When the project is ready, fill in `problem`, `dataset`, `approach`, `architecture`, `metrics`, `results`, `learned` and `links` (for example the GitHub repo).
4. Optional: add a real figure (confusion matrix, segmentation masks, forecast plot, app screenshot) to `assets/img/` and set `image: "assets/img/<file>"`. Without it, a generated preview graphic is used.
5. Set `featured: true` to show it in Featured projects.

Commit and push; the site updates within a minute.

The previous al-folio template is kept on the `al-folio-backup` branch.
