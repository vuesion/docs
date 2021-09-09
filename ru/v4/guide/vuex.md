# Сохраняем состояние vuex 

По-умолчанию Vuex хранит своё состояние в памяти.
Таким образом это состояние сбрасывается, когда пользователь перезагружает страницу.

Существуют различные способы сохранить это состояние. 
Например, необходимые параметры можно добавить в URL и восстанавливать их при загрузке приложения VUE

Это хороший способ когда таких параметров немного и в них не содержится конфиденциальных данных, 
например filters, sort directions, page number и т.д.

Но иногда во vuex сохраняются конфиденциальные данные, такие как access tokens, либо таких данных слишком много, 
например список товаров в корзине клиента. В этом случае лучше использовать Cookies или LocalStorage.

Во Vuesion есть плагины для сохранения состояния vuex.

## Сохранение в Cookie

Vuesion CookieStorage плагин для сохранения состояния vuex в куки.

::: tip Cookies
**Прежде чем воспользоваться данным советом проконсультируйтесь с вашим инженером по безопасности!**

Куки хорошее место для хранения access tokens. Куки так же доступны на сервере.
Таким образом вы можете выполнять запросы к защищенному API на сервере и рендерить начальную страницу
:::

Плагин CookieStorage находится в файле `./src/plugins/vuex-persist/vuex-persist.client.ts`.

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

Для сохранения данных в куки необходимо инициализировать объект `PersistCookieStorage`, 
Первый параметр - список модулей, второй параметр `options`

`cookieOptions`, могут содержать все параметры из 
[js-cookie](https://github.com/js-cookie/js-cookie#cookie-attributes)

### Получение куков на сервере

Файл `./src/plugins/vuex-persist/vuex-persist.server.ts` отвечает за получение куков на сервере
и загрузки их в начальное состояние вашего приложения.

```js
export default ({ store, req }: Context) => {
    const cookies = req && req.headers.cookie ? require('cookie').parse(req.headers.cookie) : {};
    const state = PersistCookieStorage.getMergedStateFromServerContext<any>(cookies, store.state);

    store.replaceState(state);
};
```

::: warning Размер куков
Помните, что большинство веб-серверов имеет ограничение  HTTP-заголовка для куков **4KB**
:::

## Сохранение в LocalStorage

Vuesion LocalStorage плагин для сохранения состояния vuex в LocalStorage.

::: tip LocalStorage
LocalStorage прекрасно подходит для хранения данных среднего размера, но LocalStorage доступен только на **клиенте**. 
Т.е. данные из LocalStorage нельзя испольщовать для рендеринга страницы не сервере.
В этом случае DOM всегда будет отличаться, и страница будет немедленно перерисована заново.
:::

Пример использования плагина Vuesion LocalStorage:

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
