# 상태 저장하기

기본적으로 Vuex는 상태를 메모리에 저장합니다.
이러한 방식은 사용자가 페이지를 새로고침하면 상태가 초기화 된다는 문제가 있습니다.

새로고침 시에도 상태를 유지하는 많은 방법이 있습니다. 그 예로 URL 뒤에 쿼리 변수를 담아 페이지 로드 시 읽어들이는 방법이 있습니다.
그러한 방법은 필터링 옵션, 페이지 번호, 정렬 방식 등 적은 양의 데이터를 유지하는 데에는 큰 문제가 없습니다.

그러나 어플리케이션을 제작하며 더 큰 데이터를 보관해야 하는 상황이 종종 옵니다.
Access Token 이나, 상품 목록 등 규모가 큰 데이터를 보관하기 위해서는, 데이터를 쿠키나 LocalStorage에 보관할 필요가 있습니다.

Vuesion은 여러 저장소에 Vuex 모듈들을 저장할 수 있도록 돕는 미들웨어를 포함하고 있습니다.

## 쿠키에 저장하기

Vuesion은 vuex-persist 미들웨어의 CookieStorage 어댑터를 포함합니다.

::: tip 쿠키
**해당 팁을 적용하기 전, 보안 엔지니어와 충분한 토의가 필요합니다.**

쿠키는 Access Token을 저장하는 데에 유용합니다.
쿠키는 서버에서도 사용할 수 있으며, 이는 서버의 보안 API에 접근하여 시작 페이지를 바로 렌더링 하는 데에 도움이 됩니다.
:::

CookieStorage 어댑터는 이미 `./src/plugins/vuex-persist/vuex-persist.client.ts` 파일에서 참조되어 있습니다.

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

상태를 쿠키에 저장하려면, 먼저 새로운 `PersistCookieStorage` 인스턴스를 초기화 해야하며,
초기화 시 모듈 목록과 옵션을 인자로 전달할 수 있습니다.

두번째 인자의 옵션에는 `cookieOptions` 키를 가진 값을 설정할 수 있으며,
해당 값은 [js-cookie](https://github.com/js-cookie/js-cookie#cookie-attributes)를 완전히 참조합니다.

### 서버에서 쿠키에 저장된 상태 추출하기

`./src/plugins/vuex-persist/vuex-persist.server.ts` 파일은 서버에서 쿠키를 읽어와 어플리케이션의 초기 상태에 로드 및 병합하는 역할을 합니다.

```js
export default ({ store, req }: Context) => {
    const cookies = req && req.headers.cookie ? require('cookie').parse(req.headers.cookie) : {};
    const state = PersistCookieStorage.getMergedStateFromServerContext<any>(cookies, store.state);

    store.replaceState(state);
};
```

::: warning 쿠키 크기
대부분의 웹 서버에는 **4KB**의 쿠키 HTTP 헤더 제한이 있으므로, 쿠키에 저장할 값을 잘 선별하여 처리해야 합니다.
:::

## LocalStorage에 저장하기

Vuesion은 vuex-persist 미들웨어의 LocalStorage 어댑터를 포함합니다.

::: tip LocalStorage
LocalStorage는 중간 크기의 데이터를 저장하는데 적합하나, 클라이언트에서만 접근할 수 있습니다.
저장한 데이터가 자동으로 서버로 전달되지 않으므로, 로드 시 마다 데이터를 전송하여 다시 렌더링 해야할 수도 있습니다.
:::

아래 파일은 LocalStorage 어댑터를 활용하는 예시입니다.

`./src/plugins/vuex-persist/vuex-persist.client.ts`

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
