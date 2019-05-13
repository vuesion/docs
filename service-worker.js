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
    "revision": "5d2f77d8adcfc2e532edcd9ba2492e8a"
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
    "url": "assets/js/app.f53c1da5.js",
    "revision": "75d7a74d4995903f2af9e55788f0fcd0"
  },
  {
    "url": "en/docs/npm-scripts.html",
    "revision": "01cb905b854b89533f9ddc98e766c95c"
  },
  {
    "url": "en/docs/pwa.html",
    "revision": "f3305085fbce05f034dfc7d942d16dc8"
  },
  {
    "url": "en/docs/style-guide.html",
    "revision": "1bc9604e6e22f565be23c7e9a6b09434"
  },
  {
    "url": "en/FAQ.html",
    "revision": "0200bbc6e2203246316f10b9266c2630"
  },
  {
    "url": "en/guide/build.html",
    "revision": "6c899f1e2a12d8928268956c467e1e94"
  },
  {
    "url": "en/guide/clean-up.html",
    "revision": "8dbaefef4471737313189a821735a45b"
  },
  {
    "url": "en/guide/cli.html",
    "revision": "08b15dbac516a7cae3581d3984252cf8"
  },
  {
    "url": "en/guide/config.html",
    "revision": "f5059be76a598e833aba730d12072d7c"
  },
  {
    "url": "en/guide/contribute.html",
    "revision": "bc49298f19478e7d10da2d5884e42733"
  },
  {
    "url": "en/guide/deployment.html",
    "revision": "ea26106a394eae7fe6a6bc5897a7c328"
  },
  {
    "url": "en/guide/i18n.html",
    "revision": "57f8b7aa424e79c3a0249b6ba794896d"
  },
  {
    "url": "en/guide/install.html",
    "revision": "4f5fe2e9c655e3d87d28bb33f5eb8e11"
  },
  {
    "url": "en/guide/run.html",
    "revision": "4fdf94b326640f6ab96a247debad6338"
  },
  {
    "url": "en/guide/test.html",
    "revision": "a5ed86dbce9d88084b386edddf065ade"
  },
  {
    "url": "en/guide/update.html",
    "revision": "8eafa67b7bc9e8a3c266151add9540ca"
  },
  {
    "url": "en/guide/vuex.html",
    "revision": "494ff66ac520e8923aaf6900170afeeb"
  },
  {
    "url": "en/index.html",
    "revision": "e203b5ac799446cdae3c48d54a6dce7a"
  },
  {
    "url": "en/introduction.html",
    "revision": "78789468e74d79995f765b144846f06a"
  },
  {
    "url": "en/tutorials/prefetch-and-state-transfer.html",
    "revision": "33b8c87fb05e7d1ef962bb73774fed51"
  },
  {
    "url": "en/tutorials/redirects.html",
    "revision": "ae41f8412a9fe5d6d920180e24ab437c"
  },
  {
    "url": "en/tutorials/third-party.html",
    "revision": "8028e1d1692169d98e202d09a893be55"
  },
  {
    "url": "icon-128x128.png",
    "revision": "e1c01daa71ceaacfff1f97c2cecb8041"
  },
  {
    "url": "icon-144x144.png",
    "revision": "f5878016b1bd1239727af1758e426ec5"
  },
  {
    "url": "icon-152x152.png",
    "revision": "73eb90997e9ddc290e6e22454e755922"
  },
  {
    "url": "icon-192x192.png",
    "revision": "6122e0708541a3fa937b4ef9d1e47c64"
  },
  {
    "url": "icon-384x384.png",
    "revision": "97af727e4659d0f96c06aebfc84d195c"
  },
  {
    "url": "icon-512x512.png",
    "revision": "76cc93f74a6650962992538d8720a07c"
  },
  {
    "url": "icon-72x72.png",
    "revision": "a6887453bace7dab44fa97db032b3513"
  },
  {
    "url": "icon-96x96.png",
    "revision": "c44f748a7a2369bdfa318125c5a3723c"
  },
  {
    "url": "logo.png",
    "revision": "7faef8772ece9d2f7fc08aa5acb3e609"
  },
  {
    "url": "zh-cn/docs/i18n.html",
    "revision": "a4097e3927fcc81bf276ae7677aabb10"
  },
  {
    "url": "zh-cn/docs/npm-scripts.html",
    "revision": "831ff9691903744ac0e3930c52de9449"
  },
  {
    "url": "zh-cn/docs/redirects.html",
    "revision": "b72f6c22c0e06bca19bf7b70a626b97f"
  },
  {
    "url": "zh-cn/docs/storybook.html",
    "revision": "b0722edf1d383c3f1bc9893a58432f55"
  },
  {
    "url": "zh-cn/docs/style-guide.html",
    "revision": "86aee3458fbcd48b4a29e38b2618679f"
  },
  {
    "url": "zh-cn/guide/build.html",
    "revision": "4b5cc28b97e0b697524a5726eb0c776e"
  },
  {
    "url": "zh-cn/guide/clean-up.html",
    "revision": "4f975ff75e91963f939633e7ecd52c06"
  },
  {
    "url": "zh-cn/guide/cli.html",
    "revision": "7b1bb7bdebfce347d2e35351cb79d39d"
  },
  {
    "url": "zh-cn/guide/config.html",
    "revision": "99e2d33e8275e9afb3be9555f880833d"
  },
  {
    "url": "zh-cn/guide/contribute.html",
    "revision": "9356bc7a773fd730daed295b8eaa5102"
  },
  {
    "url": "zh-cn/guide/i18n.html",
    "revision": "09d4488be001e8530527dfc4afd86a43"
  },
  {
    "url": "zh-cn/guide/install.html",
    "revision": "0d0a8a7435da8c4d7d0523a89b479ee1"
  },
  {
    "url": "zh-cn/guide/run.html",
    "revision": "97d2ebdf9810d1aaac074eb2ff6a33c8"
  },
  {
    "url": "zh-cn/guide/test.html",
    "revision": "02cdeb417b217428fc095870992f2f77"
  },
  {
    "url": "zh-cn/guide/update.html",
    "revision": "294cb642239bd495efeee45ef90d199e"
  },
  {
    "url": "zh-cn/guide/vuex.html",
    "revision": "4f2601323423c5342f64ebc39513a5ff"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "d5fd792cc02cbd852d5d42a7ec1b445e"
  },
  {
    "url": "zh-cn/introduction.html",
    "revision": "7a5dd49deb2e4abec85e5945353f3ad2"
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
