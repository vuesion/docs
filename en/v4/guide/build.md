# Production build

Now you want to bring your app online. It should be fast and optimized.

In the development mode, you have the non-optimized code,
source maps and all the good things you need to write good code.

But in production you don't want to have unnecessary code; it should
be as small as possible.

## Optimize your build

In order to optimize your app for production, run the command `npm run build`.

This will optimize your app as follows:

- It runs [Nuxt.js build](https://nuxtjs.org/docs/2.x/get-started/commands#server-deployment) in [modern-mode](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern)
- It adds a [service worker](https://pwa.nuxtjs.org/workbox) to your application to make it a PWA
- It compresses all assets

## Build an SPA with static generated HTML files

If you don't need server-side-rendering, yet. You can use the `npm run build:spa` command to generate a single-page-application.

This will optimize your app as follows:

- It runs [Nuxt.js generate](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered) in [modern-mode](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern)
- It adds a [service worker](https://pwa.nuxtjs.org/workbox) to your application to make it a PWA

::: warning Not all Nuxt.js features are available with nuxt generate
Have a look at the [Nuxt.js generate](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered) documentation.
:::

## Analyze your bundles

Sometimes your bundles are just too big and you have no idea why.

A tool to find out which parts of your bundles are too big is the [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) plugin for webpack.

To use this tool and get an overview of your bundles, run `build:analyze`.

This will display the following overview:

<img :src="$withBase('/analyzer.png')" alt="webpack-bundle-analyzer">
