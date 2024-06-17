---
prev: false
---

# Getting Started

## Engineering

### Prerequisites

1. **Install Node.js version 20**
   - Check your version with `node --version`
   - If it’s not version 20, you can change it using the [n package](https://www.npmjs.com/package/n):
     ```sh
     npm install -g n
     sudo n v20
     node --version
     ```
   - If you encounter issues, please report them [here](https://github.com/vuesion/vuesion/issues/new?assignees=&labels=&template=bug_report.md).

2. **Get an IDE**
   - Recommended: [Webstorm](https://www.jetbrains.com/webstorm/) or [Visual Studio Code](https://code.visualstudio.com/) with the [Volar plugin](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar).

3. **Configure Prettier**
   - Set up [Prettier](https://prettier.io/docs/en/editors.html) in your code editor for automatic code formatting.

4. **Install PostgreSQL (Optional)**
   - Install PostgreSQL or another database you want to use with Prisma.js.

5. **Style Your IDE (Optional)**
   - [Webstorm Theme](https://plugins.jetbrains.com/plugin/12226-vuesion-theme)
   - [VS Code Theme](https://marketplace.visualstudio.com/items?itemName=vuesion.vuesion-theme)

### Installation

1. **Create a New Project:**
   ```sh 
   npx @vuesion/create my-app
   ```
2. **Change Directory:**
   ```sh 
   cd my-app
   ```
3. **Create an .env File:**
   - Copy the .env-example file to a new .env file:
   ```sh 
   cp .env-example .env
   ```
   - Change the `DATABASE_URL` to use your local project database
   ```sh 
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/my-app?schema=public"
   ```

## Design

### Figma
Figma is a web-based graphics editing and user interface design app.
Use it for wireframing websites, designing mobile app interfaces,
prototyping designs, and more.

### Prerequisites

1. Get a [free Figma account](https://www.figma.com/signup)
2. Log in to your [Figma account](https://www.figma.com/)

### Installation

1. Got to the [Vuesion Core Community File](https://www.figma.com/community/file/1080868611324978249)
2. Click on the `Open in Figma` button