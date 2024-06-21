(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{332:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),t("h2",{attrs:{id:"engineering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#engineering"}},[e._v("#")]),e._v(" Engineering")]),e._v(" "),t("h3",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Install Node.js version 20")])]),e._v(" "),t("ul",[t("li",[e._v("Check your version with "),t("code",[e._v("node --version")])]),e._v(" "),t("li",[e._v("If it’s not version 20, you can change it using the "),t("a",{attrs:{href:"https://www.npmjs.com/package/n",target:"_blank",rel:"noopener noreferrer"}},[e._v("n package"),t("OutboundLink")],1),e._v(":"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-g")]),e._v(" n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" n v20\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("node")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--version")]),e._v("\n")])])])]),e._v(" "),t("li",[e._v("If you encounter issues, please report them "),t("a",{attrs:{href:"https://github.com/vuesion/vuesion/issues/new?assignees=&labels=&template=bug_report.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Get an IDE")])]),e._v(" "),t("ul",[t("li",[e._v("Recommended: "),t("a",{attrs:{href:"https://www.jetbrains.com/webstorm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webstorm"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),t("OutboundLink")],1),e._v(" with the "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Volar plugin"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Configure Prettier")])]),e._v(" "),t("ul",[t("li",[e._v("Set up "),t("a",{attrs:{href:"https://prettier.io/docs/en/editors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier"),t("OutboundLink")],1),e._v(" in your code editor for automatic code formatting.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Install PostgreSQL (Optional)")])]),e._v(" "),t("ul",[t("li",[e._v("Install PostgreSQL or another database you want to use with Prisma.js.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Style Your IDE (Optional)")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/12226-vuesion-theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webstorm Theme"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=vuesion.vuesion-theme",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Theme"),t("OutboundLink")],1)])])])]),e._v(" "),t("h3",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Create a New Project:")]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("npx @vuesion/create my-app\n")])])])]),e._v(" "),t("li",[t("strong",[e._v("Change Directory:")]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" my-app\n")])])])]),e._v(" "),t("li",[t("strong",[e._v("Create an .env File:")]),e._v(" "),t("ul",[t("li",[e._v("Copy the .env-example file to a new .env file:")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" .env-example .env\n")])])]),t("ul",[t("li",[e._v("Change the "),t("code",[e._v("DATABASE_URL")]),e._v(" to use your local project database")])]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DATABASE_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"postgresql://postgres:postgres@localhost:5432/my-app?schema=public"')]),e._v("\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design"}},[e._v("#")]),e._v(" Design")]),e._v(" "),t("h3",{attrs:{id:"figma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#figma"}},[e._v("#")]),e._v(" Figma")]),e._v(" "),t("p",[e._v("Figma is a web-based graphics editing and user interface design app.\nUse it for wireframing websites, designing mobile app interfaces,\nprototyping designs, and more.")]),e._v(" "),t("h3",{attrs:{id:"prerequisites-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-2"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("ol",[t("li",[e._v("Get a "),t("a",{attrs:{href:"https://www.figma.com/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("free Figma account"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Log in to your "),t("a",{attrs:{href:"https://www.figma.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Figma account"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"installation-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-2"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("ol",[t("li",[e._v("Got to the "),t("a",{attrs:{href:"https://www.figma.com/community/file/1080868611324978249",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuesion Core Community File"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Click on the "),t("code",[e._v("Open in Figma")]),e._v(" button")])])])}),[],!1,null,null,null);t.default=s.exports}}]);