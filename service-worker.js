/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ca9ad16cd4edb23d85f241e8335136d"
  },
  {
    "url": "analyzer.png",
    "revision": "4abecf1f2e6b2f4f343387de98ed5c93"
  },
  {
    "url": "architecture.jpg",
    "revision": "3a28a68f3a3b056182af9d8072e8b191"
  },
  {
    "url": "assets/css/0.styles.0f1a1f12.css",
    "revision": "f6345e261e75a6f2d24183118edd2b6e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.20be2fe5.js",
    "revision": "81c00950d508acd05c1784b76ff97c64"
  },
  {
    "url": "assets/js/11.fb3df46f.js",
    "revision": "3e1a749d8d82ea489169336e1a266437"
  },
  {
    "url": "assets/js/12.089fe36c.js",
    "revision": "6289033ab1e645749833b356a7488708"
  },
  {
    "url": "assets/js/13.dd2d2654.js",
    "revision": "49b71362673f7dd5fdb26a4e406a1c40"
  },
  {
    "url": "assets/js/14.95319cd5.js",
    "revision": "0abd038928d76823ec589df943d0ae25"
  },
  {
    "url": "assets/js/15.88f782d9.js",
    "revision": "f0849baeed1aabc41a610501982d99b4"
  },
  {
    "url": "assets/js/16.e0b32720.js",
    "revision": "badeac7892f34aeb66e3c1ef5717f102"
  },
  {
    "url": "assets/js/17.be1a0d88.js",
    "revision": "53731886d152dcf09a822a6b0cca69bb"
  },
  {
    "url": "assets/js/18.2a625337.js",
    "revision": "a99353912e9aa7d93b31dc524f6c5512"
  },
  {
    "url": "assets/js/19.73b36042.js",
    "revision": "b83e1ebcbbebecec62f0b0e246b47502"
  },
  {
    "url": "assets/js/2.53625bd9.js",
    "revision": "aae227a70362ad8fe6c39ae3112103c1"
  },
  {
    "url": "assets/js/20.d8484785.js",
    "revision": "d24f48520e49691438ebad6d44ba75e6"
  },
  {
    "url": "assets/js/21.20fe700b.js",
    "revision": "c7f6cd98dc89c26a5f64436fd2c43572"
  },
  {
    "url": "assets/js/22.2530219b.js",
    "revision": "9b07dafcc7ac4017c3c5c78793d8e3e7"
  },
  {
    "url": "assets/js/23.34d1eec7.js",
    "revision": "82b9fbeb8e84e0d1220176d71a5256b6"
  },
  {
    "url": "assets/js/24.1fd74779.js",
    "revision": "acc67e8f8460c283703d0ed59c8a05bd"
  },
  {
    "url": "assets/js/25.8035d78c.js",
    "revision": "7541d61513ecc9c9eec5625068efa39e"
  },
  {
    "url": "assets/js/26.9400051c.js",
    "revision": "a657a1390a0df21617e01c266f372f4c"
  },
  {
    "url": "assets/js/27.df55d16e.js",
    "revision": "a180b47ac99d7500d394ff298c7b5b94"
  },
  {
    "url": "assets/js/28.641d01e8.js",
    "revision": "261b17f4a50255bfdfc47ebf7e30fd2a"
  },
  {
    "url": "assets/js/29.82ba6246.js",
    "revision": "73b4c23d1f4fbc16b1c0e7e42a1705a4"
  },
  {
    "url": "assets/js/3.9a4a82e7.js",
    "revision": "913b1e2f6e5e243649270aa0bf6b42fe"
  },
  {
    "url": "assets/js/30.83e18071.js",
    "revision": "0e6040d3b9e27bd6271296a622b5d17b"
  },
  {
    "url": "assets/js/31.d826a6a8.js",
    "revision": "e1a65388789f68261322c0261c362954"
  },
  {
    "url": "assets/js/32.51c49cb7.js",
    "revision": "9276639f5009a9fcf793cf8fa7a89a35"
  },
  {
    "url": "assets/js/33.697c5eec.js",
    "revision": "fe8cf8a41ea73d3da9109907543f14cc"
  },
  {
    "url": "assets/js/34.9121c65f.js",
    "revision": "a7070386445dd0f0bbc5a9cb476032ed"
  },
  {
    "url": "assets/js/35.2485dd4e.js",
    "revision": "9ec0bf823198f715b9065ae8626952ec"
  },
  {
    "url": "assets/js/36.fa9da95c.js",
    "revision": "59ac5bfe4a4f92e59772ef3c4fbe6fc6"
  },
  {
    "url": "assets/js/37.7e424e98.js",
    "revision": "488d081947e1e549549a931e4f0f0ec2"
  },
  {
    "url": "assets/js/38.8cb23431.js",
    "revision": "0988f8e6d8f3d339bdde5b487674ad35"
  },
  {
    "url": "assets/js/39.ef377b19.js",
    "revision": "e31b3263a6a2b4895d37ad7c845eb0d4"
  },
  {
    "url": "assets/js/4.ff81debe.js",
    "revision": "b0a87208971b1e3ce5829f89ff63364d"
  },
  {
    "url": "assets/js/40.02b8c85c.js",
    "revision": "2daa5f6a69dd8122b947df70f3c2c9d5"
  },
  {
    "url": "assets/js/41.48f04b09.js",
    "revision": "0b49cfb4f463d055ad9d6b03bd4445a1"
  },
  {
    "url": "assets/js/42.e231f0a9.js",
    "revision": "1c6fda211e3060b1940ece8c05d36987"
  },
  {
    "url": "assets/js/5.d551a150.js",
    "revision": "a2f04b2988351e35578003c3fc473bfc"
  },
  {
    "url": "assets/js/6.51b773fd.js",
    "revision": "1507ccd4c3f8e99f5c2c32b24d239a14"
  },
  {
    "url": "assets/js/7.0ba8fb46.js",
    "revision": "1a97cc029179eaf5d09b6bb5f52e07d2"
  },
  {
    "url": "assets/js/8.e7fff25e.js",
    "revision": "c682d26a98938cab7834b8808fc7389b"
  },
  {
    "url": "assets/js/9.9028400d.js",
    "revision": "b7b8f18ff8b97680798578a32ddc2741"
  },
  {
    "url": "assets/js/app.36885768.js",
    "revision": "92b0da889629c1cc87af50d5428c2601"
  },
  {
    "url": "en/docs/npm-scripts.html",
    "revision": "6ed1a6cf2a446ef80cedfd36f5f3e7ec"
  },
  {
    "url": "en/docs/pwa.html",
    "revision": "cc2d8411e454025f9b40e8990da1add4"
  },
  {
    "url": "en/docs/style-guide.html",
    "revision": "6f26f2a071ffa5de49d3ba10f3bfa550"
  },
  {
    "url": "en/FAQ.html",
    "revision": "57d87ef2d17274e31c725016daa4486b"
  },
  {
    "url": "en/guide/build.html",
    "revision": "282f85bf3b8d67ae83cf187201eebc0b"
  },
  {
    "url": "en/guide/clean-up.html",
    "revision": "72f165b377c74f01fd12c5133a47a67e"
  },
  {
    "url": "en/guide/cli.html",
    "revision": "2474a1dfb09afce36670872813da1648"
  },
  {
    "url": "en/guide/config.html",
    "revision": "832d8fef29d3fd5e7c8562ffcba27546"
  },
  {
    "url": "en/guide/contribute.html",
    "revision": "05f4da2116e618e1de424ff8c37cfc1b"
  },
  {
    "url": "en/guide/deployment.html",
    "revision": "9792aefaa3f7d1e0e975d0399e1a9b54"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "9b98db987f59680dcc4d60a3090ee6f8"
  },
  {
    "url": "en/guide/install.html",
    "revision": "04e3e4e6481b973e1218b96b3aca9507"
  },
  {
    "url": "en/guide/run.html",
    "revision": "b7a6cf3a904de82042f54885672b1677"
  },
  {
    "url": "en/guide/test.html",
    "revision": "c2a326fe6cdc7caab21af5ec0879e8c2"
  },
  {
    "url": "en/guide/update.html",
    "revision": "24a3aa593fd7128093db395d86d07eed"
  },
  {
    "url": "en/guide/vuex.html",
    "revision": "5f66a041d8ea132023277cf91b083f13"
  },
  {
    "url": "en/index.html",
    "revision": "d0c0139f32d218f40797d332d0af1d27"
  },
  {
    "url": "en/introduction.html",
    "revision": "37b35661163c6732d8922eb1b73d26b5"
  },
  {
    "url": "en/tutorials/prefetch-and-state-transfer.html",
    "revision": "acd94cb06c1df2b99006b8cbea5b0db4"
  },
  {
    "url": "en/tutorials/redirects.html",
    "revision": "e5cc266b1df261f192c4a1d003646629"
  },
  {
    "url": "en/tutorials/third-party.html",
    "revision": "3913c0e747108bb3dfa38579c63010d6"
  },
  {
    "url": "logo.png",
    "revision": "7faef8772ece9d2f7fc08aa5acb3e609"
  },
  {
    "url": "zh-cn/docs/i18n.html",
    "revision": "81918fe7f77a7a1a45ba23111fd4ad4d"
  },
  {
    "url": "zh-cn/docs/npm-scripts.html",
    "revision": "aa7888fa17e41c772303dc879c4cc2c0"
  },
  {
    "url": "zh-cn/docs/redirects.html",
    "revision": "ba96792be051b411d73966f365dbfb9e"
  },
  {
    "url": "zh-cn/docs/storybook.html",
    "revision": "70cdb856504bae161983611ba2cb4287"
  },
  {
    "url": "zh-cn/docs/style-guide.html",
    "revision": "b59930e66b418277f983bfacddf28f43"
  },
  {
    "url": "zh-cn/guide/build.html",
    "revision": "c3c13a38863dc92e8c73a1c0c8eed26c"
  },
  {
    "url": "zh-cn/guide/clean-up.html",
    "revision": "3a52b036e410f33a0dfcb58de7ec5ce1"
  },
  {
    "url": "zh-cn/guide/cli.html",
    "revision": "4ddc3c848f814d711eb19d6f9a6a4e33"
  },
  {
    "url": "zh-cn/guide/config.html",
    "revision": "a7f6c5ab03f111e45183588258980d02"
  },
  {
    "url": "zh-cn/guide/contribute.html",
    "revision": "f93b6a02d44d947e1d9abd709a7c67bd"
  },
  {
    "url": "zh-cn/guide/i18n.html",
    "revision": "660f4c820dc99af191ec11f4fb4c2479"
  },
  {
    "url": "zh-cn/guide/install.html",
    "revision": "627d6b05577c6cb1cc19eddad6be6cb3"
  },
  {
    "url": "zh-cn/guide/run.html",
    "revision": "c6ad9a9409423771bb6c0eb79dbc527d"
  },
  {
    "url": "zh-cn/guide/test.html",
    "revision": "216a2e1a5a27e08bcb5e55ef50df4f95"
  },
  {
    "url": "zh-cn/guide/update.html",
    "revision": "46a1c59f42ca30d1a926876049b0d8e7"
  },
  {
    "url": "zh-cn/guide/vuex.html",
    "revision": "1b6db30751640254a8d1397fe914f58b"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "5212449c91989caaae38e8d5265b64d3"
  },
  {
    "url": "zh-cn/introduction.html",
    "revision": "c7f23175b937a28660c44c874532b3c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
