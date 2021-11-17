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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68e201add8269030104a14173a063db0"
  },
  {
    "url": "assets/css/0.styles.63e90dcb.css",
    "revision": "311fe8553c816a9fa8ada26122bd0fb9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9a884d8.js",
    "revision": "f360b9bf34669552f2f369bfec96c1e8"
  },
  {
    "url": "assets/js/11.68446c2f.js",
    "revision": "2e07cfa950cbcfb4b26d00b6dc24055b"
  },
  {
    "url": "assets/js/12.9a316640.js",
    "revision": "e58848c2863de4a993c426636162130d"
  },
  {
    "url": "assets/js/13.411fa803.js",
    "revision": "fc71b714f9a51ecb8fecaea85963d805"
  },
  {
    "url": "assets/js/14.0d46d3ae.js",
    "revision": "1fea3bcd898f4b4e0304d751dea71702"
  },
  {
    "url": "assets/js/15.2f9c504c.js",
    "revision": "8bc7a438c44a9f336a12d2a2bed3b1d6"
  },
  {
    "url": "assets/js/16.e90fa2f6.js",
    "revision": "fefffb64f8fa96d9222ddf54af34e708"
  },
  {
    "url": "assets/js/17.c72ce9c9.js",
    "revision": "cb7f6134598b085c188ab7a8e28aa2ab"
  },
  {
    "url": "assets/js/18.fbce958e.js",
    "revision": "44ef431d2d0ca7adf19080b606f3c4ad"
  },
  {
    "url": "assets/js/19.4e085d9b.js",
    "revision": "bf670078917b36283b36aab92255e5ee"
  },
  {
    "url": "assets/js/20.c6f0a5b4.js",
    "revision": "77452ef03515a2e0b834648025c727d4"
  },
  {
    "url": "assets/js/21.2e16c43b.js",
    "revision": "91fc6eb5df3e04463d870312804361fd"
  },
  {
    "url": "assets/js/22.9a55ae80.js",
    "revision": "f93395e23911a690eab2a820aa24c99f"
  },
  {
    "url": "assets/js/24.256f6c04.js",
    "revision": "57b3f13bd0013aa93d3b4beecb63c582"
  },
  {
    "url": "assets/js/25.7893e94e.js",
    "revision": "2cbaa8af74c7afc822d33d980181d1c2"
  },
  {
    "url": "assets/js/26.31e9b7a3.js",
    "revision": "7034e38993e9b66cd78ee42f4e5f46b4"
  },
  {
    "url": "assets/js/27.c0ba3aa7.js",
    "revision": "39648d6c1cedfb399f7bf550bf3d75ff"
  },
  {
    "url": "assets/js/28.71337eaa.js",
    "revision": "e759ae229bc537f0c0d85f0eab543d58"
  },
  {
    "url": "assets/js/29.4f4e322a.js",
    "revision": "f00f58802f98a702f51c5fffaa93f2e0"
  },
  {
    "url": "assets/js/3.32125a6e.js",
    "revision": "ddd915d74e26a0f3b86044ddfe5a9000"
  },
  {
    "url": "assets/js/30.593cc66c.js",
    "revision": "5416b0cc518c8b5648d9697460374a42"
  },
  {
    "url": "assets/js/31.faa3d416.js",
    "revision": "0406d231eee307b202a011760246587d"
  },
  {
    "url": "assets/js/32.77ee741f.js",
    "revision": "6856a7b7b8b37c2d7fdff546b6679314"
  },
  {
    "url": "assets/js/33.cb0cf7ce.js",
    "revision": "94191ba6e60858ec427488fd00c62bec"
  },
  {
    "url": "assets/js/34.4e3307de.js",
    "revision": "543ce95617fc9ae8b23eec03dafba396"
  },
  {
    "url": "assets/js/35.f5c002c3.js",
    "revision": "32f1877bea19def12f18034d929e0879"
  },
  {
    "url": "assets/js/36.8e9350ce.js",
    "revision": "37e6635af033fe5443514e8258669838"
  },
  {
    "url": "assets/js/37.1b84c09c.js",
    "revision": "f46afb4f4931d3e3b8f957fb04571ea9"
  },
  {
    "url": "assets/js/38.9a4e23ef.js",
    "revision": "449ca895c720bd7861b98d2274cbde36"
  },
  {
    "url": "assets/js/39.65865a65.js",
    "revision": "aa895253e1f0c00e69e36fae5629de1c"
  },
  {
    "url": "assets/js/4.92bf7640.js",
    "revision": "6aa14472d407c04137a5f0ff33e46c61"
  },
  {
    "url": "assets/js/40.9c57468f.js",
    "revision": "6f88ba09b621c59ab0a3825554be3b3f"
  },
  {
    "url": "assets/js/41.ee97a391.js",
    "revision": "4c341c6fff16aaeb0a9080ef4dc5b31c"
  },
  {
    "url": "assets/js/42.d5f2e6c5.js",
    "revision": "1217e5e387e7db2bee77ec835098f504"
  },
  {
    "url": "assets/js/43.588a0feb.js",
    "revision": "6787508fa59c03353c3c116dde897f37"
  },
  {
    "url": "assets/js/44.fa6e739f.js",
    "revision": "a8e381831587030fafe1d8a61d2afd75"
  },
  {
    "url": "assets/js/45.2bec994e.js",
    "revision": "c635f37c0037090d9e7f9801926f7760"
  },
  {
    "url": "assets/js/46.ac60eb68.js",
    "revision": "a3f2e3e9a258f06e91e4e91eeeffabc1"
  },
  {
    "url": "assets/js/47.878e3dd9.js",
    "revision": "bd1b22e587c1549d93722a345af29de0"
  },
  {
    "url": "assets/js/48.89fe21db.js",
    "revision": "d92e00b275665864697cf5fddea914fa"
  },
  {
    "url": "assets/js/49.52b999ae.js",
    "revision": "c3a28c4bc3597b77a3a336dc56cee495"
  },
  {
    "url": "assets/js/5.d8793daf.js",
    "revision": "8b62d7154512fb5207d692c19fc7f9aa"
  },
  {
    "url": "assets/js/50.0bef4737.js",
    "revision": "c1fea81374584e379aeacafb2036f2d4"
  },
  {
    "url": "assets/js/6.aa48e207.js",
    "revision": "05a4a87766e1bf9c3c0e9220ef916aac"
  },
  {
    "url": "assets/js/7.4ec8eb0e.js",
    "revision": "9ecff189404704eaa76b512cc5ab125c"
  },
  {
    "url": "assets/js/8.a1ce2895.js",
    "revision": "622f273e8e3490c9015b503b50982a49"
  },
  {
    "url": "assets/js/9.bf157376.js",
    "revision": "f8187406b56571b52ff31d3727dd28d5"
  },
  {
    "url": "assets/js/app.20d0ac40.js",
    "revision": "f229c06875faf53249daafab007542ee"
  },
  {
    "url": "assets/js/vendors~notification.87fa8971.js",
    "revision": "42e6fac24e08529f6883fbf1c8369934"
  },
  {
    "url": "guide/index.html",
    "revision": "4e4e0c8f4ee9e79aa4f9010ebb638536"
  },
  {
    "url": "guide/part1/lesson01.html",
    "revision": "3a46882b6c27f160a991b7eacbfc5a5d"
  },
  {
    "url": "guide/part1/lesson02.html",
    "revision": "bf25f270152a9ac920cb7a94400e51e4"
  },
  {
    "url": "guide/part1/lesson03.html",
    "revision": "db84fb1cc160300e966b1ff995929cee"
  },
  {
    "url": "guide/part1/lesson04.html",
    "revision": "63c8e44a4a6ea85b4b7cd127f4ecdb2f"
  },
  {
    "url": "guide/part1/lesson05.html",
    "revision": "793bcd939fb5faee04135f9301192698"
  },
  {
    "url": "guide/part1/lesson06.html",
    "revision": "55e5d028dc612cc4e26a2880804d3ece"
  },
  {
    "url": "guide/part2/lesson07.html",
    "revision": "5872aea0d3afcb146eb687ce6180816a"
  },
  {
    "url": "guide/part2/lesson08.html",
    "revision": "4bd2132b21edfbfaf0ea42f960419aae"
  },
  {
    "url": "guide/part2/lesson09.html",
    "revision": "e58628318bbb60deeb3ec5bc8b3f8c80"
  },
  {
    "url": "guide/part2/lesson11.html",
    "revision": "01557b1c2587ed9901382828032bbc74"
  },
  {
    "url": "guide/part3/lesson12.html",
    "revision": "c68e300f8b2e8532a2d9efaac67bd9d9"
  },
  {
    "url": "guide/part3/lesson13.html",
    "revision": "aaa3dd82e17332a72ad2d23af09973c0"
  },
  {
    "url": "guide/part3/lesson14.html",
    "revision": "1cc37a15cc30cc8b6ee561b706819160"
  },
  {
    "url": "guide/part4/lesson15.html",
    "revision": "25488c758e96cba7272ffd467519dbb2"
  },
  {
    "url": "guide/part4/lesson16.html",
    "revision": "db4eea8a849cfb8ddd8773c2c7c43a12"
  },
  {
    "url": "guide/part4/lesson17.html",
    "revision": "0285bdd57a78b3233ff0a059d4de4d5d"
  },
  {
    "url": "guide/part4/lesson18.html",
    "revision": "f08f27d98e9a43a36d52dd25d22d9585"
  },
  {
    "url": "guide/part4/lesson19.html",
    "revision": "171e8126d358ffec65cfa21b5b2e2911"
  },
  {
    "url": "guide/part4/lesson20.html",
    "revision": "af401da31c66caba697ab59b80b6057f"
  },
  {
    "url": "guide/part5/lesson21.html",
    "revision": "22957fb266bc9f69a5f02255f69df3ff"
  },
  {
    "url": "guide/part5/lesson22.html",
    "revision": "a18a04b91ec87f80d46f6d692cff7280"
  },
  {
    "url": "guide/part5/lesson23.html",
    "revision": "9d89802815b22d082dfe84aeb1cd81d0"
  },
  {
    "url": "guide/part5/lesson24.html",
    "revision": "46850e6355635553aabc89fe65c6b023"
  },
  {
    "url": "guide/part5/lesson25.html",
    "revision": "602587e99aa22a2614643a8dfb719fee"
  },
  {
    "url": "guide/part5/lesson26.html",
    "revision": "75edc9958ecb808ab470d4d03479db1c"
  },
  {
    "url": "guide/part5/lesson27.html",
    "revision": "498a424c556c14b68cda0f51eb6dc4ca"
  },
  {
    "url": "guide/part5/lesson28.html",
    "revision": "038bc40a44a94e2ec9b990bbecd5bf94"
  },
  {
    "url": "guide/part6/lesson29.html",
    "revision": "1e59ad35d5777163d5dee40bbffc124e"
  },
  {
    "url": "guide/part6/lesson30.html",
    "revision": "4ce327f966b621e370c2eae6ee342666"
  },
  {
    "url": "guide/part6/lesson31.html",
    "revision": "2bed3ee24a43beb09643baf2973f857e"
  },
  {
    "url": "guide/part6/lesson32.html",
    "revision": "e7ecf85940e01e0995e2229b28ef2d68"
  },
  {
    "url": "guide/part6/lesson33.html",
    "revision": "6a51741c831fc4132bb4cd6d57686135"
  },
  {
    "url": "guide/part6/lesson34.html",
    "revision": "9dd2236942eecbefa208a75d90731884"
  },
  {
    "url": "guide/part6/lesson35.html",
    "revision": "371a06c87416cc6f0a0545b7eb2b08e7"
  },
  {
    "url": "guide/part6/lesson36.html",
    "revision": "50ee5bc50396428deb7644119a0bb69d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "93aeae0e33c23f4f66b6c649818d0ed1"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
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
