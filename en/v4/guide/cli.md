# Create a new Page

Let's create a new page with the interactive Vuesion generator CLI. Running `npm run generate` will prompt you some questions.

```bash
> vuesion generate

? [PLOP] Please choose a generator. 
  Simple Component - Add a single file component 
❯ Page - Add a new page 
  Vuex Module - Add a new page 
  Interface - Add a new interface and fixtures 
```

Choose `Page` and continue with `enter`:

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? 
```

Now enter the name of your route and page component.

::: tip Name can include path information
All generators can be prefixed with a path. Page names are always in singular form, for example `users/_id`
will turn into `user/_id`.
:::

Type `Foo` and continue with `enter`

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? Foo
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.vue
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo.spec.ts
```

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

Go to [http://localhost:3000/foo](http://localhost:3000/foo) and you will see the new page.

::: tip Does everything work?
To verify that you didn't break something, run `npm test`.
:::

## Configuration

To change the paths for the Vuesion generator CLI, see the `generators` section in the file: `./.vuesion/config.json`

```js
  "generators": {
    "blueprintDirectory": "./.vuesion/generators", // handlebar templates
    "outputDirectory": "./src", // source directory
    "stateFile": "./src/interfaces/IState.ts" // interface file for vuex-modules
  },
```
