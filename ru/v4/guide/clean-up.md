# Удаление демо-данных

В созданном ранее проекте есть код для демонстрации возможностей Vuesion.

Ниже перечислены файлы, которые можно безопасно удалить.

## Файлы и папки

Рекомендуется удалить следующие папки и файлы:

```bash
└── src
    ├── api
    │   └── routes
    ├── pages
    │   └── example
    └── store
        └── counter
```

Если для Вашего проекта не требуется GraphQL, следует удалить следующие папки и файлы:

```bash
└── src
    ├── graphql
    └── plugins
        └── apollo
```

## Код

Так же следует внести изменения в следующий файлы: 

`./src/interfaces/IState.ts`

```js
import { ICounterState } from '@/store/counter/state'; // Удалить

export interface IState {
    i18n: {
        locale: string;
    };
    counter: ICounterState; // Удалить
}
```

`./src/api/index.ts`

```js
...
import { DemoRoutes } from './routes/DemoRoutes'; // Удалить
import { CounterRoutes } from './routes/CounterRoutes'; // Удалить

...

/**
 * routes to demonstrate the possibilities of vuesion
 * TODO: can be removed if you don't need them in your application
 */
CounterRoutes(app); // Удалить
DemoRoutes(app); // Удалить

...
```

Если для Вашего проекта не требуется GraphQL:

`./nuxt.config.ts`

```js
...
    // Удалить
    apollo: {
        clientConfigs: {
            default: '@/plugins/apollo/apollo-client-config.ts',
        },
    },
    build: {
...
        transpile: ['vee-validate', '@vue/apollo-composable' // Удалить,
    },
...
    modules: [
        '@nuxtjs/apollo', // Удалить
        ...
    ],
    plugins: [
        { src: '@/plugins/apollo/provide-apollo-client' }, // Удалить
        ...
    ],
    publicRuntimeConfig: {
        ...
        // Удалить
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
    "type-gen:gql": "graphql-codegen", // Удалить
    ...
  },
  "dependencies": {
    "@apollo/client": "3.3.6", // Удалить
    "@graphql-codegen/cli": "1.20.1", // Удалить
    "@graphql-codegen/introspection": "1.18.1", // Удалить
    "@graphql-codegen/schema-ast": "1.18.1", // Удалить
    "@graphql-codegen/typescript": "1.20.2", // Удалить
    "@graphql-codegen/typescript-operations": "1.17.14", // Удалить
    "@nuxtjs/apollo": "4.0.1-rc.5", // Удалить
    ...
    "@vue/apollo-composable": "4.0.0-alpha.12", // Удалить
    ...
    "apollo-cache-inmemory": "1.6.6", // Удалить
    ...
    "graphql": "15.4.0", // Удалить
    ...
  },
  "devDependencies": {
    ...
    "mock-apollo-client": "1.1.0", // Удалить
    ...
  },
}
```

## Заключение

Теперь у вас есть чистый проект, с которого можно начать создавать приложение.

По ссылке [http://localhost:3000](http://localhost:3000) все еще открывается приложение Vuesion,
но остальные роуты показывают страницу с ошибкой `404`.

::: tip Все работает как надо?
Не забываем запускать тесты `npm test`.
:::
