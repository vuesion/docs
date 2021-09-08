# Production сборка

Production сборка должна быть хорошо оптимизирована и работать быстро.

## Использование server-side-rendering (SSR)

Команда `npm run build` создает готовую production сборку

Выполняются следующие шаги оптимизации:

- Запускается [Nuxt.js build](https://nuxtjs.org/docs/2.x/get-started/commands#server-deployment) в [modern-mode](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern)
- Добавляется [service worker](https://pwa.nuxtjs.org/workbox) для вашего PWA-приложения
- Так же сжимаются все assets

## Одностраничное (SPA) приложение со статическими HTML файлами


В том случае если не требуется server-side-rendering (SSR), команда `npm run build:spa` создает сборку для (single-page-application) SPA

Выполняются следующие шаги оптимизации:

- Запускается [Nuxt.js generate](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered) в [modern-mode](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern)
- Добавляются [service worker](https://pwa.nuxtjs.org/workbox) для PWA-приложения.

::: warning Не все Nuxt.js фичи доступны с nuxt generate
Подробнее в документации [Nuxt.js generate](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered)
:::

## Анализ сборок

Иногда размер бандла получается слишком большой.

Для того, что бы найти решить проблему с размером бандла существует плагин для
Webpack [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

Для использования этого плагина выполните команду `npm run build:analyze`.

<img :src="$withBase('/analyzer.png')" alt="webpack-bundle-analyzer">
