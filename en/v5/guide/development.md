# Development

## Project Structure

### Folders

```shell
├── _templates // hygen templates for code generators
├── cypress // e2e tests
├── i18n // language files
├── prisma // Database schema, migrations and seeds
├── src
│   ├── assets
│   │   └── design-system
│   ├── components
│   │   ├── animations
│   │   ├── behavior
│   │   ├── data-display
│   │   ├── demo // can be deleted
│   │   ├── forms
│   │   ├── icons
│   │   ├── input-and-actions
│   │   ├── layout
│   │   ├── navigation
│   │   └── typography
│   ├── composables
│   ├── enums
│   ├── interfaces
│   ├── layouts
│   ├── pages
│   ├── plugins
│   ├── public
│   │   ├── demo // can be deleted
│   │   ├── illustrations // SVG assets
│   │   └── images // JPGs, PNGs, etc.
│   ├── server
│   │   ├── api // Controllers
│   │   ├── middleware
│   │   ├── services
│   │   └── utils
│   ├── services // for client-side application
│   ├── store // pinia stores
│   ├── test // test utils and setup
│   └── utils // Client- and Server-side utils
└── tools
```

### Clean up

The goal of the cleanup process is to bring the code base to a clean state without any demo content.
To achieve this, follow these steps:

1. **Remove Demo Folders:**
    - Delete the following directories:
        - `./src/components/demo`
        - `./src/public/demo`
        - `./src/pages/services`

2. **Clean Up Index Page:**
    - Edit `./src/pages/index.vue`:
        - Remove demo components.
        - Update the title and meta description to reflect your project.

3. **Reset i18n Files:**
    - Clear the contents of files in `./i18n` and reset them to a plain JSON object `{}`.

Following these steps will help you remove any unnecessary demo content and prepare the code base
for your specific needs.

## Best Practices

Implementing best practices is crucial for maintaining a high-quality, maintainable, and scalable codebase.
Adhering to established standards helps ensure consistency, reduces the likelihood of errors,
and makes it easier for new developers to understand and contribute to the project.

### Code Style

We follow the official Vue.js style guide to maintain a consistent code style across our projects.
This includes recommendations on naming conventions, component structure, and more.

For more details, refer to the [Vue.js Style Guide](https://vuejs.org/style-guide/).

Additionally, we adhere to the Nuxt style guide using the `@nuxt/eslint` module.
This helps enforce consistent code quality and formatting in Nuxt.js projects.

For more information, see the [Nuxt Code Style Guide](https://nuxt.com/docs/guide/concepts/code-style).

### Prisma.js

#### Migrations

Prisma Migrate is a powerful tool for managing your database schema and ensuring it stays in sync
with your application code. It provides a straightforward workflow for creating, applying,
and managing database migrations.

To understand the mental model behind Prisma Migrate and get started with migrations,
refer to
the [Prisma Migrate Guide](https://www.prisma.io/docs/orm/prisma-migrate/understanding-prisma-migrate/mental-model).

#### Squash Migrations

Over time, your project may accumulate many migration files, which can slow down your CI/CD pipelines
and make your project harder to manage. Squashing migrations is a workflow to combine multiple migration
files into a single one, thus optimizing your migration history.

For a detailed guide on how to squash migrations with Prisma,
visit the [Squashing Migrations Guide](https://www.prisma.io/docs/orm/prisma-migrate/workflows/squashing-migrations).

## Development Tools

Vuesion provides a great developer experience with helpful npm scripts, code generators, and tools for managing i18n,
making the development process efficient and enjoyable.

### NPM Scripts

Here are the npm scripts available in Vuesion:

| NPM Script                      | Description                                                               |
|---------------------------------|---------------------------------------------------------------------------|
| `npm run dev`                   | Start the development server                                              |
| `npm run storybook:dev`         | Start Storybook for developing UI components in isolation                 |
| `npm run test`                  | Run tests with coverage                                                   |
| `npm run lint`                  | Lint the codebase and run TypeScript checks                               |
| `npm run new:component`         | Generate a new component using Hygen                                      |
| `npm run new:store`             | Generate a new store using Hygen                                          |
| `npm run new:page`              | Generate a new page using Hygen                                           |
| `npm run new:rest-api`          | Generate a new REST API using Hygen                                       |
| `npm run db:reset`              | Reset the database using Prisma Migrate                                   |
| `npm run db:seed`               | Seed the database                                                         |
| `npm run db:migrate`            | Create and apply new migrations                                           |
| `npm run db:migrate-deploy`     | Apply pending migrations (only use in production)                         |
| `npm run db:push`               | Push the schema state to the database                                     |
| `npm run db:generate-client`    | Generate Prisma client                                                    |
| `npm run extract-i18n-messages` | Extract internationalization messages from magic comments                 |
| `npm run test:watch`            | Run tests in watch mode                                                   |
| `npm run e2e`                   | Run end-to-end tests with Cypress                                         |
| `npm run storybook:build`       | Build Storybook for production                                            |
| `npm run release:major`         | Create a major release with changelog                                     |
| `npm run release:minor`         | Create a minor release with changelog                                     |
| `npm run release:patch`         | Create a patch release with changelog                                     |
| `npm run build`                 | Build the project for production                                          |
| `npm run build:analyze`         | Build the project with bundle analysis                                    |
| `npm run build:spa`             | Generate a static site                                                    |
| `npm run start`                 | Run the app in production mode                                            |
| `npm run prepare`               | Used by husky to initialize pre-commit hooks                              |
| `npm run pre-commit`            | Format staged files and run lint and tests concurrently before committing |

### Code Generators

Code generators help streamline the development process by automating repetitive tasks, ensuring consistency, and
reducing human error. Vuesion uses Hygen as its code generation tool. 

Hygen is highly customizable and allows developers
to generate code based on templates, making it easier to maintain a consistent codebase. 

For more information, visit the [Hygen website](https://www.hygen.io/).

<img :src="$withBase('/v5/new-rest-api.gif')" alt="create a new rest-api with listing and details pages in seconds">

#### Presentational Components
Presentational components are responsible for how things look. They exclusively receive data and emit events. 
The command `npm run new:component` creates a `component.vue` file along with a `component.stories.ts` file with
a default Storybook story and a `component.spec.ts` file with an initial unit test based on Vitest and Testing Library.

#### Pages
Pages are container components responsible for how things work.
The command `npm run new:page` creates a page component, and paths are allowed as the name of the component, 
for example, `/books/[id]/index`. It also prompts whether you want to connect a store, 
which is used to communicate with the backend, to the component.

#### Stores
A Pinia store is a state management solution for Vue.js applications.
It is useful for managing shared state across components.
The command `npm run new:store` creates a store with all CRUD operations for a specified database entity.

#### RESTful APIs
The command `npm run new:rest-api` will create GET, POST, PUT, DELETE endpoints for a specified database entity
along with a store, interface, service, listings page, and details page.

### Build and Deployment

To build the project for production, Vuesion provides several scripts:
- `npm run build`: Builds the project for production.
- `npm run build:analyze`: Builds the project with bundle analysis.
- `npm run build:spa`: Generates a static site.

For more information on deployment, visit the [Nuxt.js Deployment Guide](https://nuxt.com/docs/getting-started/deployment).