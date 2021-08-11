# Clean up

At this point, your project contains a lot of code that is just for demo purposes.

We recommend that you delete this code because your use-cases will be completely different from the demo use-cases.

## Directories and Files

Directories and files that we would recommend to delete:

```bash
└── src
    ├── app
    │   └── example
    └── server
        └── routes
            ├── CounterRoutes.ts
            └── DemoRoutes.ts
```

## Code

Now you have to remove references to these modules. Remove the following code in the following files:

`./src/app/router.ts`

```js
import { CounterRoutes } from './example/counter/routes';
import { FormRoutes } from './example/form/routes';
import { DashboardRoutes } from './example/dashboard/routes';

...

      ...CounterRoutes,
      ...FormRoutes,
      ...DashboardRoutes,

...
```

`./src/app/state.ts`

```js
import { ICounterState } from './example/counter/state';

...

  counter?: ICounterState;

...
```

And the server-side routes:

`./src/server/server.ts`

```js
import { DemoRoutes }       from './routes/DemoRoutes';
import { CounterRoutes }    from './routes/CounterRoutes';

...

/**
 * routes to demonstrate the possibilities of vuesion
 * can be removed if you don't need them in your application
 */
DemoRoutes(app);
CounterRoutes(app);
```

## Verification

Now you have a clean app and you can start creating your own application.

You should still see the vuesion home page if you open up [http://localhost:3000](http://localhost:3000).
But other routes should redirect to the `/not-found` page.

::: tip Does it still work?
To verify that your changes did not break something, run `npm test`.
:::
