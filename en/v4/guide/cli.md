# Create a new Page

Let's create a page, you will be asked some questions:

```bash
> vuesion generate

? [PLOP] Please choose a generator. 
  Simple Component - Add a single file component 
❯ Page - Add a new page 
  Vuex Module - Add a new page 
  Interface - Add a new interface and fixtures 
```

choose `Page` and continue with `enter`:

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? 
```

This will be the name of your route and page component.

::: tip Name can include path
All generators can be prefixed with a path. Also page names are always in singular form, for example `users/_id`
will turn into `user/_id`.
:::

Type `Foo` and press `enter`

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? Foo
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.vue
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.spec.ts
```
`

Your page has been created at `./src/pages/foo.vue`. The generator also added a test file `./src/pages/foo.spec.ts`.

## Verification

Open the file `./src/pages/foo.vue` and disable the authentication middleware for this page

```js
...
export default defineComponent({
  name: 'FooPage',
  auth: false,
...
```

Go to [http://localhost:3000/foo](http://localhost:3000/foo) and you should see a new Page.

::: tip Does everything work?
To verify that you didn't break something, run `npm test`.
:::

## Configuration

To change the paths for the generator CLI, see the following section in the file: `./.Vuesion/config.json`

```js
  "generators": {
    "blueprintDirectory": "./.vuesion/generators",
    "outputDirectory": "./src",
    "stateFile": "./src/interfaces/IState.ts"
  },
```
