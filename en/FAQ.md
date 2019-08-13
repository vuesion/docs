# FAQ

## Why not vue-cli or nuxt.js ?

This boilerplate is opinionated, aiming to educate and empower users to essentially configure their own framework,
ideally suited to their needs. It also includes as few libraries as possible to keep you flexible and to enable you
to implement every product requirement that comes down the road.

Use cases for this boilerplate:

- The requirements for the product might change and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across any Vue project.
- You're working in a large team, so you need tooling to help everyone avoid common mistakes,
  write in a consistent style, and avoid bikeshedding in PRs.

## Why are my properties not reactive?

In Vuex and on your component instance, properties must be defined in the initial state otherwise, they will not be
observed for changes.

[Please read the rules of reactivity.](https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules)

## I don't need to build my own design-system, can I use vuesion with a 3rd party UI framework?

Yes, you can! [See this tutorial.](tutorials/third-party.md)

## I don't need server-side-rendering, can I use vuesion to build a single-page-application?

Yes, [here is the tutorial!](guide/deployment.md#static-single-page-application)

**The following features are not available in the single-page-application build:**

- App Config
- Runtime Config

## The Dev Server keeps returning status code 500? 

**Run through te following steps to fix the issue:**

- Make sure your `node` *version* is above **8.16** optimal performance runs on **10.15.2** or latest *recommended* version. 
- Make sure your `npm` *version* is above **6.9** optimal performance runs on **6.10.2**. 
- First if you have an instance of vuesion already running run `npm i -D @vuesion/service@3.0.2` inside of the project root directory.
  - Then run `npm run dev` that will fix the issue.
- Secondly starting from scratch will be the next option with the updated services and dependencies, by running `npx @vuesion/create my-app --next` to create your new vuesion project. 
  - Then run `npm run dev` to see if it works, run `npm run build -- --debug` if it doesn't work or gives an error.
