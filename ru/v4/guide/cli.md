# Создание новой страницы

Создадим новую страницу для нашего приложения: `npm run generate`

```bash
> vuesion generate

? [PLOP] Please choose a generator. 
  Simple Component - Add a single file component 
❯ Page - Add a new page 
  Vuex Module - Add a new page 
  Interface - Add a new interface and fixtures 
```

Выбираем `Page` и подтверждаем выбор `enter`:

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? 
```

На следующем шаге зададим путь (url) и название компонента VUE для новой страницы. 

::: tip Имя может содержать путь
Вложенную структуру ваших роутов можно указать прямо в имени нового компонента: `foo/bar/baz`. 
Страницы всегда следует именовать в единственном числе, например `user/_id`
:::

Вводим `Foo` и подтверждаем `enter`

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? Foo
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.vue
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.spec.ts
```

Новая страница создана `./src/pages/foo.vue`. 
Так же будет автоматически создан файл для тестирования компонента `./src/pages/foo.spec.ts`.

## Проверка

Для проверки запретим аутентификацию для новой страницы `./src/pages/foo.vue`

```js
...
export default defineComponent({
  name: 'FooPage',
  auth: false,
...
```

По адресу [http://localhost:3000/foo](http://localhost:3000/foo) должна открыться недавно созданная страница Foo

::: tip Мы ничего не сломали?
После внесения изменений в код не забываем запускать тесты `npm test`.
:::

## Настройка генератора
 
Изменить путь, где Vuesion CLI создает новые страницы можно в секции `generators` в файле `./.vuesion/config.json`


```js
  "generators": {
    "blueprintDirectory": "./.vuesion/generators", // handlebar templates
    "outputDirectory": "./src", // source directory
    "stateFile": "./src/interfaces/IState.ts" // interface file for vuex-modules
  },
```
