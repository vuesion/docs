# Progressive-Web-App

Vuesion comes with an integrated service worker which makes it a so-called `progressive-web-app`.
It enables the users of your app to install it on their home-screen and use the app offline.

By default, vuesion caches all assets, webpack chunks and the HTML of the index (`/`) route.

If you want to change the default behavior, have a look in the file `./src/client/sw.ts`.

```js
...

let assetsToCache = [...assets.map((path: string) => '/client' + path), '../', '../manifest.json'];

...
```

The service-worker implementation is based on the [serviceworker-webpack-plugin](https://github.com/oliviertassinari/serviceworker-webpack-plugin).

We have chosen this plugin over the [Offline-Plugin](https://github.com/NekR/offline-plugin) because it gives much more
freedom to the developer how the service worker should behave for the specific app.

::: tip Further reading
If you have issues with the service worker and how the cache works, have a look at this [gist](https://gist.github.com/Rich-Harris/fd6c3c73e6e707e312d7c5d7d0f3b2f9).

It nicely explains the pitfalls with service workers in development mode and the cache invalidation.
:::
