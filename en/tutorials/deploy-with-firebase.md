# Deploy with Firebase

## Single Page Application

This is a straightforward process. It only uses Firebase Hosting. You will need an existing Firebase project, or you will need to create one using the Firebase CLI.

### Step 1: setup
`% npx @vuesion/create vuesion-firebase-spa`\
`% cd vuesion-firebase-spa`\

If you don't already have the Firebase CLI installed: `% npm install -g firebase-tools`

### Step 2: initialize Firebase

```% firebase init```

Select `Hosting`, select your project, say `Yes` to configure your project as a single-page app and specify `dist` as your public directory. Shown below is an example of this process.

```
     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /example/path/vuesion-firebase-spa

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to con
firm your choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: example-12345 (example)
i  Using project example-12345 (reclaim)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
✔  Wrote dist/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

### Step 3: test locally

`% npm install`\
`% npm run build:spa`\
`% firebase serve` serves your app at http://localhost:5000

### Step 4: deploy

Set the API base url in src/app/config/production.json to the url where your app will be hosted.

```
{
  "api": {
    "baseUrl": "<your-project-url-here>"
  }
}
```

`% firebase deploy` deploys your app at the url specified by your Firebase project

## Universal/SSR Application

This will require Firebase Hosting and Firebase Functions. Firebase Hosting will redirect requests to your url to a Firebase function which will run your application.

You will need an existing Firebase project, or you will need to create one using the Firebase CLI.

### Step 1: create new project

`% npx @vuesion/create vuesion-firebase-ssr`\
`% cd vuesion-firebase-ssr`

If you don't already have the Firebase CLI installed: `% npm install -g firebase-tools`


### Step 2: firebase init hosting and functions

`% firebase init`

> select functions and hosting\
> choose your firebase project or create a new one\
> choose typescript\
> (optional) say yes to using TSLint\
> (optional) say yes to install dependencies now\
> specify dist/client as your public directory\
> say yes to configuring your app as a single-page app

### Step 3: set firebase.json

Function stays pointing to the default location, /functions\
Hosting rewrites all urls to the result of passing that url into the vuesionApp export from functions. We will define that in functions/src/index.ts in Step 5.

```
{
  "functions": {
    "predeploy": [
      "npm --prefix \"$RESOURCE_DIR\" run lint",
      "npm --prefix \"$RESOURCE_DIR\" run build"
    ]
  },
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "vuesionApp"
      }
    ]
  }
}
```

### Step 4: adjust config files in functions folder

#### Adjust /functions/package.json

Add production dependencies from package.json to functions/package.json and bring typescript version up to match package.json. Also add a prebuild script to copy /dist, /.vuesion, and /i18n into /functions

```
{
  "name": "functions",
  "scripts": {
    "lint": "tslint --project tsconfig.json",
    "prebuild": "rm -rf ./dist ./.vuesion ./i18n && cp -rf ../dist ./dist && cp -rf ../.vuesion ./.vuesion && cp -rf ../i18n ./i18n",
    "build": "tsc",
    "serve": "npm run build && firebase serve --only functions",
    "shell": "npm run build && firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "8"
  },
  "main": "lib/index.js",
  "dependencies": {
    "firebase-admin": "^8.0.0",
    "firebase-functions": "^3.1.0",
    "@vuesion/addon-vuex-persist": "^3.1.1",
    "@vuesion/models": "^3.1.1",
    "@vuesion/utils": "^3.1.1",
    "@vuesion/webpack": "^3.1.1",
    "accept-language": "3.0.18",
    "animejs": "3.1.0",
    "axios": "^0.19.0",
    "body-parser": "1.19.0",
    "compression": "1.7.4",
    "config": "3.2.2",
    "cookie-parser": "1.4.4",
    "deepmerge": "4.0.0",
    "express": "4.17.1",
    "helmet": "3.21.1",
    "lodash": "4.17.15",
    "lru-cache": "5.1.1",
    "marked": "0.7.0",
    "serve-favicon": "2.5.0",
    "vee-validate": "2.0.9",
    "vue": "^2.6.10",
    "vue-i18n": "8.14.1",
    "vue-meta": "2.2.2",
    "vue-router": "^3.1.3",
    "vue-server-renderer": "^2.6.10",
    "vuex": "^3.1.1",
    "vuex-router-sync": "^5.0.0",
    "winston": "3.2.1"
  },
  "devDependencies": {
    "tslint": "^5.12.0",
    "typescript": "3.6.3"
  },
  "private": true
}
```

#### Adjust functions/tsconfig.json

```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "module": "commonjs",
    "outDir": "lib"
  },
  "compileOnSave": true,
  "include": ["src"]
}
```

#### Adjust functions/tslint.json

```
{
  "extends": "../tslint.json"
}
```

### Step 5: set functions/src/index.ts

This loads in the 'app' export from src/server/server.ts and makes it accessible via the export of vuesionApp (which Firebase hosting will be looking for to rewrite urls). Note we are setting the hosting environment variable to 'firebase-functions'. Thanks to the code we will write in /src/server/index.ts, this will ensure we don't have multiple processes running on port 3000 when serving with firebase locally.

```
import * as functions from 'firebase-functions';

process.env.hosting = 'firebase-functions';

const app = require('../dist/server/server').app;
exports.vuesionApp = functions.https.onRequest(app);
```

### Step 6: adjust the root's package.json

Here we will modify the build script for the project in package.json to also build /functions.
We will similarly add a `postinstall` script to run `npm install` in the /functions folder.
Also, since the rest of our app has been built for development on port 3000, we will create a short cut, `npm run firebase:serve` for serving firebase on port 3000.

```
"build": "vuesion build && cd ./functions && npm run build",
...
"postinstall": "cd ./functions && npm i",
"firebase:serve": "firebase serve -p 3000"
```

### Step 7: adjust /src/server/index.ts

For serving with Firebase locally we need to ensure multiple processes don't try to listen on port 3000. So we will make sure the `hosting` environment variable isn't set to 'firebase-functions'. Also, notice the export statement. This is necessary to make the server app available to functions/src/index.ts.

```
import http from 'http';
import { Logger } from './utils/Logger';
import { app } from './server';
export * from './server';

if (process.env.hosting !== 'firebase-functions') {
  const server = http.createServer(app);
  const port: string = process.env.PORT || '3000';
  let currentApp = app;
  server.listen(port, () => {
    Logger.info(`server started at http://localhost:${port}`);
  });
  if (module.hot) {
    module.hot.accept('./server', () => {
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    });
  }
}
```

### Step 8: test locally

From the root of your project:\
`$ npm install`\
`$ npm run build`\
`$ npm run firebase:serve`

Your app is now available at http://localhost:3000

### Step 9: deploy

Set the API base url in src/app/config/production.json to the url where your app will be hosted.

```
{
  "api": {
    "baseUrl": "<your-project-url-here>"
  }
}
```

`% firebase deploy`

### Step 10 (optional): adjust the .gitignores

#### add the following to functions/.gitignore

```
.vuesion/
dist/
i18n/
```

#### add the following to .gitignore

```
.firebase/
firebase-debug.log
```
