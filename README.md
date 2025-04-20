# Portfolio Website by Jomkit Jujaroen

Hello, thanks for stopping by the github repository for my portfolio website. I scaffolded the project from an astro template, just to save myself a bit of boiler plate, and then after that I was off to the races.

This website features most of the usual amenities: landing page, works and services, blog, about, and contact pages. It is continuously a work in progress, but what better way to showcase my skills as a web developer than writing my own living portfolio website?

## Icons

This project uses [astro-icon](https://www.astroicon.dev/getting-started/) package to simplify use of icons, and the [BoxIcons](https://icones.js.org/collection/bx) set by Atisa. 

To add more icons go to use the `Icon` component and set the `name` attribute to the desired icon, referencing the icon set from the following link: https://icones.js.org/collection/bx 

## 🚀 Project Structure (Astro bootstrapped)

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
