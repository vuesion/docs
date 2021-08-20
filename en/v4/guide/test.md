# Run the tests

Your app is installed and runs in development mode but does every component in the app work correctly?

To check if all the features, components, services, etc. work as intended, you should run the test suite with `npm run test`.

You will see something like this:

```bash
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |   

...

Test Suites: 63 passed, 63 total
Tests:       255 passed, 255 total
Snapshots:   0 total
Time:        9.633 s
Ran all test suites.

Process finished with exit code 0
```

It shows that you have an application that is well tested and from now on
you should get feedback if you accidentally break included features when you run the tests.

The `npm test` command will be executed in the before-commit hook.
That will guarantee that the code you are going to commit will not break the application.

::: tip Jest config
By default, the coverage threshold is set to `100`%.

If you think this is just too much for your project, configure the appropriate thresholds in the `./jest.config.js`.

```js
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    },
```

:::
