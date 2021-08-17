# FAQ

## Why are my properties not reactive?

In Vuex and on your component instance, properties must be defined in the initial state otherwise, they will not be
observed for changes.

[Please read the rules of reactivity.](https://vuex.vuejs.org/guide/mutations.html#mutations-follow-vue-s-reactivity-rules)

## I don't need to build my own design system, can I use Vuesion with a third-party UI framework?

Yes, you can! [See this tutorial.](https://tailwindcss.nuxtjs.org/)

## I don't need server-side-rendering, can I use Vuesion to build a single-page application?

Yes, [here is the tutorial!](https://nuxtjs.org/docs/2.x/get-started/commands#static-deployment-pre-rendered)
