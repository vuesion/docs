# 정리하기

처음 Vuesion 을 시작하면, 프로젝트에 데모 용도의 코드들이 포함되어 있습니다.
아래 항목들에서는 데모 코드가 필요하지 않을 때, 어떤 파일들을 삭제해야 하는지 안내합니다.

## 폴더와 파일들

Vuesion에서 삭제하길 권장하는 경로는 아래와 같습니다.

```bash
└── src
    ├── api
    │   └── routes
    ├── pages
    │   └── example
    └── store
        └── counter
```

GraphQL을 사용하지 않을 예정이라면 아래 경로로 삭제할 수 있습니다.

```bash
└── src
    ├── graphql
    └── plugins
        └── apollo
```

## 코드

위 경로들의 삭제가 선행되었다면, 이제 아래의 참조 코드들을 삭제할 수 있습니다.

`./src/interfaces/IState.ts`

```js
import { ICounterState } from '@/store/counter/state'; // 삭제

export interface IState {
    i18n: {
        locale: string;
    };
    counter: ICounterState; // 삭제
}
```

`./src/api/index.ts`

```js
...
import { DemoRoutes } from './routes/DemoRoutes'; // 삭제
import { CounterRoutes } from './routes/CounterRoutes'; // 삭제

...

/**
 * routes to demonstrate the possibilities of vuesion
 * TODO: can be removed if you don't need them in your application
 */
CounterRoutes(app); // 삭제
DemoRoutes(app); // 삭제

...
```

GraphQL의 사용을 원치 않는다면 아래의 코드들도 삭제할 수 있습니다.

`./nuxt.config.ts`

```js
...
    // 삭제
    apollo: {
        clientConfigs: {
            default: '@/plugins/apollo/apollo-client-config.ts',
        },
    },
    build: {
...
        transpile: ['vee-validate', '@vue/apollo-composable' // 삭제
    },
...
    modules: [
        '@nuxtjs/apollo', // 삭제
        ...
    ],
    plugins: [
        { src: '@/plugins/apollo/provide-apollo-client' }, // 삭제
        ...
    ],
    publicRuntimeConfig: {
        ...
        // 삭제
        apollo: {
            baseURL: process.env.GRAPHQL_ENDPOINT || 'https://rickandmortyapi.com/graphql',
        },
    },
...
};

export default config;

```

`./package.json`

```json
{
  ...
  "scripts": {
    ...
    "type-gen:gql": "graphql-codegen", // 삭제
    ...
  },
  "dependencies": {
    "@apollo/client": "3.3.6", // 삭제
    "@graphql-codegen/cli": "1.20.1", // 삭제
    "@graphql-codegen/introspection": "1.18.1", // 삭제
    "@graphql-codegen/schema-ast": "1.18.1", // 삭제
    "@graphql-codegen/typescript": "1.20.2", // 삭제
    "@graphql-codegen/typescript-operations": "1.17.14", // 삭제
    "@nuxtjs/apollo": "4.0.1-rc.5", // 삭제
    ...
    "@vue/apollo-composable": "4.0.0-alpha.12", // 삭제
    ...
    "apollo-cache-inmemory": "1.6.6", // 삭제
    ...
    "graphql": "15.4.0", // 삭제
    ...
  },
  "devDependencies": {
    ...
    "mock-apollo-client": "1.1.0", // 삭제
    ...
  },
}
```

## 검증하기

위 절차를 충분히 따랐다면, 깔끔한 코드 베이스를 얻을 수 있습니다.

[http://localhost:3000](http://localhost:3000) 에서 Vuesion의 메인 페이지는 계속 출력되나,
다른 페이지들은 `404` 페이지로 리다이렉트됩니다.

::: tip 모든 것이 정상 작동하나요?
데모 코드를 삭제하며 다른 코드들도 건드렸는지 확인하려면 `npm test` 를 실행하세요.
:::
