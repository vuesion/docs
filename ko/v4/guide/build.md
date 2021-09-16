# 프로덕션 빌드하기

프로덕션 빌드는 최적화되고, 빠르게 작동해야 합니다.

## 서버 사이드 렌더링(SSR) 사용 시

프로덕션용으로 프로젝트를 빌드하려면 `npm run build` 명령어를 사용하세요.

해당 명령어는 아래의 상태로 프로젝트를 최적화 할 것입니다.

- [modern-mode(영문)](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern) 로 [Nuxt.js build(영문)](https://nuxtjs.org/docs/2.x/get-started/commands#server-deployment) 를 실행합니다.
- PWA를 지원하기 위해 어플리케이션에 [서비스 워커(영문)](https://pwa.nuxtjs.org/workbox) 를 추가합니다.
- 모든 자산(asset)을 압축합니다.

## 정적 단일 페이지 어플리케이션(SPA) 생성 시

SSR이 필요하지 않을 경우, `npm run build:spa` 명령어를 사용하여 SPA를 생성할 수 있습니다.

해당 명령어는 아래의 상태로 프로젝트를 최적화 할 것입니다.

- [modern-mode(영문)](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-modern) 로 [Nuxt.js generate(영문)](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered) 를 실행합니다.
- PWA를 지원하기 위해 어플리케이션에 [서비스 워커(영문)](https://pwa.nuxtjs.org/workbox) 를 추가합니다.

::: warning Nuxt.js generate 에서는 일부 Nuxt.js 기능을 사용할 수 없습니다.
자세한 사항은 [Nuxt.js generate(영문)](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered) 을 참고하세요.
:::

## 번들 분석하기

번들이 예상보다 더욱 크게 생성되는 경우가 있습니다.

Vuesion은 번들의 어떤 부분이 많은 부피를 차지하는지 분석할 수 있는 플러그인 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 을 포함하고 있습니다.
해당 플로그인을 사용하려면 `npm run build:analyze` 명령어를 실행하세요.

<img :src="$withBase('/analyzer.png')" alt="webpack-bundle-analyzer">
