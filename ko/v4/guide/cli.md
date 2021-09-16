# 페이지 생성하기

Vuesion CLI 를 사용하여 페이지를 생성할 수 있습니다.
`npm run generate` 명령어를 사용하여 인터렉티브하게 페이지 생성이 가능합니다.

```bash
> vuesion generate

? [PLOP] Please choose a generator. 
  Simple Component - Add a single file component 
❯ Page - Add a new page 
  Vuex Module - Add a new page 
  Interface - Add a new interface and fixtures 
```

`Page` 선택 후 `Enter` 를 누릅니다.

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? 
```

이후 라우트와 페이지 컴포넌트의 이름을 입력합니다.

::: tip 이름에 경로 정보가 포함될 수 있습니다.
`foo/bar/baz` 와 같은 형태로 경로 정보를 포함할 수 있습니다.  
단, 페이지 이름은 `user/_id` 와 같이 항상 단수 형태를 가져야 합니다.
:::

`Foo` 라고 입력한 뒤 `Enter` 누르면, 아래와 같은 화면이 출력됩니다.

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? Foo
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.vue
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.spec.ts
```

생성된 페이지는 `./src/pages/foo.vue` 에 위치합니다.
페이지 생성기는 `./src/pages/foo.spec.ts` 으로 테스트 파일도 함께 생성합니다.

## 검증하기

`./src/pages/foo.vue` 파일을 열어 인증 미들웨어를 비활성화합니다.

```js
...
export default defineComponent({
  name: 'FooPage',
  auth: false,
...
```

[http://localhost:3000/foo](http://localhost:3000/foo) 으로 이동하면 새로운 페이지를 확인할 수 있습니다.

::: tip 모든 것이 정상 작동하나요?
다른 무언가에 간섭하지 않았는지 확인하려면 `npm test` 을 실행하세요.
:::

## 설정하기

페이지 생성 경로나, 다른 참조 설정 등을 변경하려면 `./.vuesion/config.json` 파일의 `generators` 섹션을 수정하세요.

```js
  "generators": {
    "blueprintDirectory": "./.vuesion/generators", // handlebar templates
    "outputDirectory": "./src", // source directory
    "stateFile": "./src/interfaces/IState.ts" // interface file for vuex-modules
  },
```
