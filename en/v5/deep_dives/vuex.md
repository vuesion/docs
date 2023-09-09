# Persisting state

By default, Vuex keeps the state in memory. But the problem with keeping the state in memory is
that the state is reset as soon as the user reloads the page.

There are many ways to persist state if the user reloads the page.
For example, you could keep variables in the query of the URL and restore the state if the page loads.

This approach is ok for a small amount of data that is not confidential, e.g. filters, sort directions, page number, etc.

But sometimes you have to store confidential data like access tokens or big data objects like a list of products.
In these cases, you need to store your data in cookies or LocalStorage.

Vuesion comes with a Vuex middleware that allows you to persist Vuex modules in different storages.

## Persist to cookies

Vuesion includes a CookieStorage adapter for the Vuex-persist middleware.

::: tip Cookies
**Before you apply this tip, have a talk with a security engineer!**

Cookies are good for keeping access tokens. Cookies are available on the server too.
This means you can connect to protected APIs on the server to render the initial page
with the correct data.
:::

The CookieStorage adapter is already referenced in the file `./src/plugins/vuex-persist/vuex-persist.client.ts`.

```js
import { Context } from '@nuxt/types';
import { VuexPersist } from '@vuesion/vuex-persist/dist/vuex-persist';
import { PersistCookieStorage } from '@vuesion/vuex-persist/dist/PersistCookieStorage';

export default ({ store }: Context) => {
    VuexPersist([
        new PersistCookieStorage(['counter' /*, other modules */], {
            cookieOptions: {
                expires: 365,
            },
        }),
    ])(store);
};
```

To persist your state to a cookie, you have to initialize a
new instance of `PersistCookieStorage` which takes a list of module names as
the first parameter and an `options` object as the second parameter.

You can define the `cookieOptions`, which is a copy of the
[js-cookie](https://github.com/js-cookie/js-cookie#cookie-attributes) attributes
and a callback to delete state that should not be persisted to the cookie.

### Extracting cookie state on the server

The following file `./src/plugins/vuex-persist/vuex-persist.server.ts` is responsible for extracting 
the cookie state and merging it into the initial state of the app.

```js
export default ({ store, req }: Context) => {
    const cookies = req && req.headers.cookie ? require('cookie').parse(req.headers.cookie) : {};
    const state = PersistCookieStorage.getMergedStateFromServerContext<any>(cookies, store.state);

    store.replaceState(state);
};
```

::: warning Cookie size
Please keep in mind that most web servers have a default maximum header size of **4KB** for cookies,
so you should consider just saving necessary data.
:::

## Persist to LocalStorage

Vuesion includes a LocalStorage adapter for the Vuex-persist middleware.

::: tip LocalStorage
LocalStorage works well for saving mid-sized data, but be aware that it is only available on the **client-side**.
That means that data you save to it will not be rendered on the server.
The DOM will always differ in this case and the page will be re-rendered immediately.
:::

Here is an example how to use the LocalStorage adapter:

`./src/plugins/vuex-persist/vuex-persist.client.ts`.

```js
import { Context } from '@nuxt/types';
import { VuexPersist } from '@vuesion/vuex-persist/dist/vuex-persist';
import { PersistCookieStorage } from '@vuesion/vuex-persist/dist/PersistCookieStorage';
import { PersistLocalStorage } from '@vuesion/vuex-persist/dist/PersistLocalStorage';
import { IState } from '@/interfaces/IState';

export default ({ store }: Context) => {
    VuexPersist([
        new PersistCookieStorage(['counter' /*, other modules */], {
            cookieOptions: {
                expires: 365,
            },
        }),
        new PersistLocalStorage(['counter' /*, other modules */], (state: IState) => {
            delete state.counter.incrementPending;
            delete state.counter.decrementPending;

            return state;
        }),
    ])(store);
};
```

To persist your state to LocalStorage, you have to initialize a
new instance of `PersistLocalStorage` which takes a list of module names as
the first parameter and a callback to delete state that should not be persisted
to LocalStorage as the second parameter.
