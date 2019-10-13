(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{203:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"run-the-tests"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-the-tests","aria-hidden":"true"}},[t._v("#")]),t._v(" Run the tests")]),t._v(" "),e("p",[t._v("Your app is installed and runs in development mode but does every component in the app work correctly?")]),t._v(" "),e("p",[t._v("To check if all the features, components, services, etc. work as intended, you should run the tests suite with "),e("code",[t._v("npm run test")]),t._v(".")]),t._v(" "),e("p",[t._v("You will see something like this:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("--------------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-------------------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nFile          "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  % Stmts "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" % Branch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  % Funcs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  % Lines "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Uncovered Line "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#s |")]),t._v("\n--------------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-------------------"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\nAll files     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      100 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      100 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      100 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("      100 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                   "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nTest Suites: 72 passed, 72 total\nTests:       264 passed, 264 total\nSnapshots:   0 total\nTime:        5.308s, estimated 12s\nRan all "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" suites.\n\nProcess finished with "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v(" code 0\n")])])]),e("p",[t._v("It shows that you have an application that is well tested and from now on\nyou should get feedback if you accidentally break included features when you run the tests.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("npm test")]),t._v(" command will be executed in the before-commit hook.\nThat guarantees that the code you are going to commit will not break the application.")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Jest config")]),t._v(" "),e("p",[t._v("By default, the coverage threshold is set to "),e("code",[t._v("100")]),t._v("%.")]),t._v(" "),e("p",[t._v("If you think this is just too much for your project, configure the appropriate thresholds in the "),e("code",[t._v("./package.json")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coverageThreshold"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"global"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"branches"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"functions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lines"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statements"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])])},[],!1,null,null,null);s.default=r.exports}}]);