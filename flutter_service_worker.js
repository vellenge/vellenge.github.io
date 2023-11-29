'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/config": "05960528b7df78c18479a77789494277",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed78c15c031e1cf362af36faddccbd48",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "110b294c292601de0db82c6aa95f7303",
".git/logs/refs/heads/master": "110b294c292601de0db82c6aa95f7303",
".git/logs/refs/remotes/origin/master": "fd6aa96cb1ad037177cc533e62a7a5e0",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/a74290f562e159e47cb2b4bebd4de91279196f": "2d7063a54f1448b1173725648fcd57d2",
".git/objects/0d/b408a28e5aa641aedde8dd0387a3dc7df5b483": "5b0bacd2405bea64793c07879d28015f",
".git/objects/10/82ef76be91062bf0a774600cdbcf8fbf1163d3": "22476cf4be571a99d015010a5cb9436f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/7de799d4c7df40b6764a603e2426321a9d7c1e": "da184fc88bba8720bf53cd9a011f6df8",
".git/objects/1c/28a4ce3b2ba823fee9d82b1b26b2eed3ff65a0": "520c2ae308ba7eb69c2a9b7a388bea47",
".git/objects/20/20880ba9c39f536c1cd0aec5d436d44eab6f3a": "2ab3a58ead3a8de43832a2d1015bf76f",
".git/objects/26/fcb18dfa79d43ec710ca0c14e2a17df1e9ee0c": "ce764c0d06030735118313a128b34fa4",
".git/objects/29/e531958ea0be761b3405c044d48c10ec58ec43": "d4573da1d021f49951f7b2bb85c0c22b",
".git/objects/31/5fece8fb1ebd9be439c17303232a936e227373": "790ee20f014643ecd015c1adb869d074",
".git/objects/32/516eb96d39e61deb064322971f228afddd0eeb": "a3e017ad1148139e17feb86ea0de7933",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/3f462d7ee0fa688edf86e2837c8f585287032e": "422d1d29f3f4c744335b8e7cbcc531b9",
".git/objects/40/92f780d209e5d4f8127f6f54cb8ce4ed966a1f": "5959a676d611bd98a6285ad73b62124f",
".git/objects/47/6b1e1b2894517c0be2d354dcf0d8a7aa3a01b0": "3d4cd9b7982bdae030b81a54cb088d3b",
".git/objects/4b/0a76e818c5cc42c64b0a4119a2d95f768f846a": "d69dd6cbc972e7cdf9a92fd59287aa67",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4e/99b0f60b9851e536245c8159ef8cf5adfbdb2b": "a36308cc5056cd4248eda61706536be8",
".git/objects/52/812e6a38eeccfea7240ed350b43e88b40c3efd": "62d61ff7b821c9d1a1146f99df848a7f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5e/f8e3d431411aef66b1f18708a41239147a5ce6": "bc906cff9b405b93c57b1180a6c9e7be",
".git/objects/60/04bf6a129927844d650c2fb22e5c150a25cd7b": "fa2d8e28ba55db17f8f5ea2029858acd",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/7227c55b6f12ec1e55c62ff3d8f157569efa44": "ab09dd0f0e61e29021ef0bac9e0fb5f5",
".git/objects/6f/475465b0b1d2544e337152460ad909ccd89f85": "b746c5b1f07b8c1847d78a24a00ff577",
".git/objects/6f/9f3a4a5121c60e24be952eaa4ff0be9ac494c4": "e72bc9bcc572961911310995aaa0ccca",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/7111e10dd55624846c49f669f2a6bc07bff11d": "99b3bda2e1a9d3cee5278f8f7d59d61b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/48891dec6ec1beac0b6ee9120281ff231681a0": "18ff84a93fca47d1c87d9250087d9d94",
".git/objects/99/5bae40a61cae9b84cfacd30459f9b41355efd2": "89000f8442473de34031926dec7bbc80",
".git/objects/a1/e7bb61fbe3cb0777d7721fd38431bcb3691987": "a2e3aad89a6645b4f98e72a1367bc833",
".git/objects/a4/3917307dccbf4a6fda610e7b8ea925612f6e0d": "46f7f309c238692853b0515aa46b392d",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b5/a4cb66839e67d490331f270d317d12ed643eeb": "f1ed69dfd613f49a1f72ef9b1777fdd8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/a01952f9f6064838bbbac730dc405984e0439f": "1d5527a51025ad7682c18be22bc457ea",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/cb7fe27d1289a8fb7161194a43c0bbae185310": "ec5833258dbbf03909c74332fe72868d",
".git/objects/c0/3e0719ccd262039bd6867c853794c7a0e0ff61": "eb8eaa2807150228e1a72caf8116d04a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/c6b38870dd6047b1cb399c494888270f54ef4c": "aa93b73cfa73b155165dd64887f4efdf",
".git/objects/dd/dab8d3779aa163efa8ec57d32775e0a9c55511": "7de44c589ebb0bb4bf2b593bf400472f",
".git/objects/de/cc0908d1c6785361f0c121aed92b513d765082": "dd76bb15ff30d5bc4593c967746efa17",
".git/objects/de/e814bed76223262e2b7a4eb9a58545dd565664": "cf620e51edc22f342271205ee9ab40c5",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/0b8fb9d7e4c2c4de485be7e2c440cb86619256": "112a00fce97e36c1cd4be688ed746c5a",
".git/objects/e2/00ff606eb8d999073949c5305a1e979ed2b23d": "b13bf6a93e1a513b94294067a08bcee9",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/9b0b79a2910f0ac309a1845a9f733bcb568792": "7ad6d35ba087d81aa193a0d68c73e251",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f28736e7d32fc1274b8a8aa4f979fc4853d1eb": "4b8c1be9d984051340183efa5b8127dd",
".git/objects/f6/6d8206bf1ca57e2b714e34ceabb3522d17514e": "c6f3c2a1c2ea30a6e0548459e084d726",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/6111c059396bb8df05646c6b127accbe5e4adc": "7a652e08389e3c8675b7c7f00fd1fed1",
".git/refs/heads/master": "67428168798e7b73411ec22fe95f6894",
".git/refs/remotes/origin/master": "67428168798e7b73411ec22fe95f6894",
"assets/AssetManifest.bin": "7b3383a3e4d50a9ab0d2598f12d9deea",
"assets/AssetManifest.json": "dfc2a5912fe17ee0c76c2fbb594e8300",
"assets/assets/animations/arrow.riv": "339ed249196bfd272520f67e2968eb46",
"assets/assets/data/ideas.csv": "9b1123389b58991ff677955d3695f625",
"assets/assets/data/therapies.csv": "15c2e13f2434d32a0cac78f818b7f580",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/images/angry.svg": "2eafc4a8801cff2e51c8602c9bd20069",
"assets/assets/images/clinic-doctor-image.png": "e4675e52d3c3bae7ccd69bf1a22fbace",
"assets/assets/images/doubt.svg": "3c06f4883666837be5143db9fba757d9",
"assets/assets/images/happy.svg": "3bfeb53dfb9f86ee6e572cac1219dac4",
"assets/assets/images/icone_pointage_main.svg": "d0236b539917ae10e6ad2898d101ba34",
"assets/assets/images/logo.svg": "e18b3c6f2d8f9cb3c0d6e2b4629bdfd4",
"assets/assets/images/mire.png": "a22585611a1342277d1ae1266bcbe566",
"assets/assets/images/mire.svg": "0fa198c59be5118ffeb5a16518c7f977",
"assets/assets/images/mire2.svg": "a7626994eb7624b033e19d48e97c13b9",
"assets/assets/images/sadness.svg": "feff3249967e47f0877c15ca1661d851",
"assets/assets/images/satisfied.svg": "bdaef98ec3e733695452f7ad52c22bd1",
"assets/assets/images/star.svg": "54f3906ae095fec6416e5d02f40feeb9",
"assets/assets/images/surprise.svg": "cb64d1d651f497a4978687ca79d67f88",
"assets/FontManifest.json": "d384740bc2c947c3bf74017217853c74",
"assets/fonts/MaterialIcons-Regular.otf": "2888638d1947724011563a23e50da2ce",
"assets/NOTICES": "2a92ec5f5e4d727f217f813f4a8069c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/favicon.ico": "0d36228f9bf3ba00b0131f73d0a7ae5e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dc7247fb61576847b71947af44bdeca3",
"/": "dc7247fb61576847b71947af44bdeca3",
"main.dart.js": "13fa427b28eb715814edfae9db1b5145",
"manifest.json": "ea99071c259876944893c69090053e5c",
"version.json": "bc7932695cd2ae468fc1b48ca88c608c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
