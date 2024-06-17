# Concepts

## Flux Architecture

Flux is an architectural pattern used for building client-side web applications.
It emphasizes unidirectional data flow, making the state management of the application more predictable.
In Flux, actions are dispatched to a central dispatcher, which then updates the stores that hold the
application's state. The views listen to these stores and re-render when the state changes.
This pattern helps manage complex applications by decoupling different parts of the application and
making the data flow more transparent and easier to debug.

Read more about Flux [here](https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/).

<mermaid>
flowchart LR
    View((View)) -- dispatch --> Action
    Action((Action)) -- mutate --> State
    State((State)) -- render --> View
</mermaid>

For a concrete implementation in Vuesion, we use [Pinia](https://pinia.vuejs.org/),
a state management library for Vue.js that follows the Flux architecture principles.

## Developing Re-usable Components

Creating reusable components is crucial for maintaining a clean and efficient codebase.
Reusable components help in reducing redundancy, enhancing consistency across the application,
and making the development process faster and more manageable.

### Container/Presentational Pattern

The Container/Presentational pattern is a design pattern that separates components into two categories:
- **Presentational Components**: Focus on how things look. They exclusively receive data and emit events.
- **Container Components**: Focus on how things work. They provide the data and behavior to presentational components or other container components.

This pattern enhances the separation of concerns and makes components more reusable and easier to test.

Read more about the Container/Presentational pattern [here](https://www.patterns.dev/react/presentational-container-pattern/).

### Storybook

Storybook is an open-source tool for developing UI components in isolation.
It allows developers to create and test components independently from the main application,
which improves the development workflow by making it easier to spot issues and iterate on components.
Benefits of using Storybook include:

- **Isolation**: Work on one component at a time.
- **Documentation**: Automatically generate a living style guide.
- **Testing**: Test components in various states and edge cases.

Read more about Storybook [here](https://storybook.js.org/).

## Service Repository Pattern

The Service Repository Pattern separates the logic for retrieving data from the logic for processing that data.
It involves creating repositories to handle data access and services to handle business logic.

In Vuesion, Prisma acts as the repository, handling database operations.
Services are manually created in `./src/server/services` to encapsulate business logic.
Using a code generator can streamline this process: `npm run new:rest-api`.

Read more about the Service Repository Pattern [here](https://medium.com/@ankitpal181/service-repository-pattern-802540254019).

## Unit Testing with the Testing Library

The Testing Library is a set of tools for testing UI components in a way that resembles how users interact with them.
It encourages testing best practices by focusing on accessibility and avoiding implementation details.
Benefits include:
- **User-centric testing**: Test components from the user's perspective.
- **Less brittle tests**: Write more maintainable tests that are less prone to breaking due to changes in implementation details.

Read more about the Testing Library [here](https://testing-library.com/).

## E2E Testing with Cypress.io

Cypress.io is an end-to-end testing framework designed for modern web applications.
It provides a robust environment for writing, running, and debugging tests,
ensuring that the entire application works as expected.
Benefits of using Cypress.io include:
- **Real-time reloads**: Automatically reloads tests as you make changes.
- **Time travel**: See exactly what happened at each step in your tests.
- **Debugging**: Powerful tools for debugging tests directly in the browser.

Read more about Cypress.io [here](https://www.cypress.io/).
