# Run the application

Of course, you want to know if the application that you just downloaded works.
In order to test if everything works as expected run the following command: `npm run dev`.

It will open [http://localhost:3000](http://localhost:3000) and show you the Nuxt.js loading screen.

## Development mode and hot reloading

Your application currently runs in development mode, which means that webpack watches for changes.

Every file in the `./src` directory will be hot reloaded, so you don't have to reload your browser or restart the dev server during development.

That guarantees a good dev experience and will make you much more productive.

::: tip i18n
the only files that are not hot-reloaded are the files in the `./i18n` directory; you have to reload your browser to reflect the changes.
:::

## Change web-server port

Your app runs on port `3000` by default, set the `PORT` environment variable to configure a different port
e.g. `npm run dev -- --port 8080` in development mode or `PORT=8080 npm start` for your production build.

## Run your application with docker

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

Now that you know everything works as expected, see `Vuesion` in action at [http://localhost:3001](http://localhost:3001).
