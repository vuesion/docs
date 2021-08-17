---
prev: ./
next: ./FAQ
---

# Introduction

## The boilerplate for product teams

The goal of Vuesion is to make product development fast. 
It's main purpose is to be able to quickly validate product ideas and iterate fast in order to pivot

This boilerplate takes advantage of Nuxt.js and its vast ecosystem and glues together modern best practices across engineering & design.
For example, we use the Nuxt.js modules for generic functionality, but we also provide solutions to problems that appear by integrating
with other Nuxt.js module.

We also provide a design-system that you can customize 100% to fit your brand identity.
Out of experience we decided against an existing UI library or UI Framework,
we learned that they only work to a certain degree.

In order to come up with a genuine product it often necessary to have a very specific design language and 
the number of phrases like **_"I cannot change that because the library does not support it."_** increases quickly.

Vuesion gives you the most common use-cases and components - **The code is all yours** to modify and build upon.

::: tip No Excuses
The limitations of your product are up to the imagination of the designers and your ability to implement their feature requests.
:::

## Recommended Architecture

Vuesion is build on top of the idea of micro-services or a service-oriented-architecture.

This is because a separation of concerns approach is much better to maintain over time and it's much easier to manage a single technology
per service instead of a mix of technologies e.g. PHP server-side-rendering and a Javascript client side app.

::: tip Deployment
The Vuesion project should be its own deployable unit, and should be treated as its own service in the architecture.
:::

::: tip Example
If Vuesion needs to access a database - the database should be exposed as another service and Vuesion
should access the data through that service.
:::

## Todo

This is an ever-evolving project,
if you want to help or you have an idea how to improve this project -
**feel free to file an [issue](https://github.com/vuesion/vuesion/issues)**
