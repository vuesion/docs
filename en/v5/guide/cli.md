# Create your first page

Pages are special in Nuxt.js and their path and names will turn into your applications URLs.
If you want to know more about Pages, please consult the 
[Nuxt.js documentation about the Pages directory](https://nuxtjs.org/docs/directory-structure/pages/).

## Use the Page generator

Let's create a new page with the interactive Vuesion generator CLI. Running `npm run generate` will prompt you some
questions.

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
All generators can be prefixed with a path. Page names are always in singular form, for example `users/_id/index`
will turn into `user/_id/index`.
:::

Type `foo/index` and continue with `enter`

```bash
> vuesion generate

? [PLOP] Please choose a generator. Page - Add a new page
? What should it be called? Foo
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo/index.vue
✔  ++ /Users/johanneswerner/Projects/vuesion/vuesion/src/pages/foo/index.spec.ts
```

Your page has been created at `./src/pages/foo/index.vue`. The generator also added a test
file `./src/pages/foo/index.spec.ts`.

Open the file `./src/pages/foo/index.vue` and disable the authentication middleware for this page and
also give it an expressive component name.

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
