# Clean up

At this point, your project contains code that is just for demo purposes.

We show you which files you can safely delete if you don't need any of the demo features.

## Directories and Files

Directories and files that we would recommend to delete:

```bash
└── src
    ├── api
    │   └── routes
    ├── pages
    │   └── example
    └── store
        └── counter
```

### Remove GraphQL

If you don't want to use the GraphQL you can also remove the following directories and files:

```bash
└── src
    ├── graphql
    └── plugins
        └── apollo
```

## Code

Now you can remove the references to these files:

`./src/interfaces/IState.ts`

```js
import { ICounterState } from '@/store/counter/state'; // remove

export interface IState {
    i18n: {
        locale: string;
    };
    counter: ICounterState; // remove
}
```

`./src/api/index.ts`

```js
...
import { DemoRoutes } from './routes/DemoRoutes'; // remove
import { CounterRoutes } from './routes/CounterRoutes'; // remove

...

/**
 * routes to demonstrate the possibilities of vuesion
 * TODO: can be removed if you don't need them in your application
 */
CounterRoutes(app); // remove
DemoRoutes(app); // remove

...
```

### Remove GraphQL

If you don't want to use the GraphQL you can also remove the following references:

`./nuxt.config.ts`

```js
...
    // remove
    apollo: {
        clientConfigs: {
            default: '@/plugins/apollo/apollo-client-config.ts',
        },
    },
    build: {
...
        transpile: ['vee-validate', '@vue/apollo-composable' // remove],
    },
...
    modules: [
        '@nuxtjs/apollo', // remove
        ...
    ],
    plugins: [
        { src: '@/plugins/apollo/provide-apollo-client' }, // remove
        ...
    ],
    publicRuntimeConfig: {
        ...
        // remove
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
    "type-gen:gql": "graphql-codegen", // remove
    ...
  },
  "dependencies": {
    "@apollo/client": "3.3.6", // remove
    "@graphql-codegen/cli": "1.20.1", // remove
    "@graphql-codegen/introspection": "1.18.1", // remove
    "@graphql-codegen/schema-ast": "1.18.1", // remove
    "@graphql-codegen/typescript": "1.20.2", // remove
    "@graphql-codegen/typescript-operations": "1.17.14", // remove
    "@nuxtjs/apollo": "4.0.1-rc.5", // remove
    ...
    "@vue/apollo-composable": "4.0.0-alpha.12", // remove
    ...
    "apollo-cache-inmemory": "1.6.6", // remove
    ...
    "graphql": "15.4.0", // remove
    ...
  },
  "devDependencies": {
    ...
    "mock-apollo-client": "1.1.0", // remove
    ...
  },
}
```

## Verification

Now you have a clean code-base, and you can start creating your product.

You should still see the Vuesion home page if you open up [http://localhost:3000](http://localhost:3000).
But other routes should redirect to the `404` page.

::: tip Does it still work?
To verify that your changes did not break something, run `npm test`.
:::
