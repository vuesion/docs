# Development

## Storybook

> [Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation.
It streamlines UI development, testing, and documentation.

### Get familiar with the Design System and its components

To see and interact with the Components that are available with the Vuesion Design System run `npm run storybook:dev`.
The script will open [http://localhost:6006](http://localhost:6006) in your browser.

#### Design System Tokens

Design tokens are all the values needed to construct and maintain a design system. Please read the documentation
of the corresponding Stories for

- [Color Palette](http://localhost:6006?path=/story/foundation-general--color-palette)
- [Color Tokens](http://localhost:6006?path=/story/foundation-general--color-tokens)
- [Utility Component Tokens](http://localhost:6006?path=/story/foundation-general--utility-component-tokens)
- [Spacing](http://localhost:6006?path=/story/foundation-general--spacings)

#### Design System deep dive

If you want to know more about the architecture of the Design
Systems, Layout components or theming, [read the Design System deep dive](../deep_dives/design-system)

## Nuxt.js

> [Nuxt.js](https://nuxtjs.org/) is a framework for creating Vue.js applications. Its goal is to help Vue developers take advantage of
server-side-rendering and a unified module system to enhance the developer and user-experience.

### Run your application

To test if everything works as expected run the following command: `npm run dev`.

It will open [http://localhost:3000](http://localhost:3000) and show you the Nuxt.js loading screen.

### Development mode and hot reloading

Your application currently runs in development mode, which means that Nuxt.js watches for changes.

Every file in the `./src` directory will be hot reloaded, so you don't have to reload your browser or restart the dev
server during development.

That guarantees a good dev experience and will make you much more productive.

::: warning CSS changes
CSS changes on page-level sometimes require a reload.
:::

::: tip i18n
The only files that are not hot-reloaded are the files in the `./i18n` directory; you have to reload your browser to
reflect the changes.
:::

### Change web-server port

Your app runs on port `3000` by default, set the `PORT` environment variable to configure a different port
e.g. `npm run dev -- --port 8080` in development mode or `PORT=8080 npm start` for your production build.

## Docker

> [Docker](https://www.docker.com/), a subset of the Moby project, is a software framework for building, running, and managing containers on servers and the cloud.

The application can be served via Docker too.

In order to build the image run:

```bash
npm run ci && docker build -t "Vuesion:latest" .
```

When building is complete, you can proceed with firing up the Docker container:

```bash
docker run -it --name Vuesion -p 3001:3000 Vuesion:latest
```

You have to wait for the message:

```bash
   ╭────────────────────────────────────────╮
   │                                        │
   │   Nuxt @ v2.15.2                       │
   │                                        │
   │   ▸ Environment: production            │
   │   ▸ Rendering:   server-side           │
   │   ▸ Target:      server                │
   │                                        │
   │   Memory usage: 123 MB (RSS: 181 MB)   │
   │                                        │
   │   Listening: http://172.17.0.2:3000/   │
   │                                        │
   ╰────────────────────────────────────────╯
```

Docker is available at port: 3001 so a developer can have both Docker and local server running at the same time

Now that you know everything works as expected, see Vuesion in action at [http://localhost:3001](http://localhost:3001).
