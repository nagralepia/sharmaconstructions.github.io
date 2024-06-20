'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56fedf2b930db6239f2e0af28b91af23",
"assets/AssetManifest.bin.json": "39d09800b2433e16ee6f72d1367e99c1",
"assets/AssetManifest.json": "4b8e71c4a43a3222c810366522622009",
"assets/assets/images/1_vastu.png": "e7dfa3e4641868c831bd9be7fe7f598a",
"assets/assets/images/2.png": "945ce987ee5a6aff7133150aee56ccd2",
"assets/assets/images/2d_3d_building.jpg": "1074b3c865040844a709f3b369056c31",
"assets/assets/images/2_lease.png": "0aba06c3188f4aba227ac482085500cb",
"assets/assets/images/3.jpeg": "8f2202ef279c7f0c48e4605771fd968d",
"assets/assets/images/3D_2D_building_plans.jpg": "73f0d200589fc75058ba26e64b2586bd",
"assets/assets/images/3d_building_plans.jpg": "63b39368c093ff053d4960384a2f8149",
"assets/assets/images/3_archi.png": "792704370e07bb2e9655b0db884dd48f",
"assets/assets/images/4_interior.png": "47d94b5dec0c9c42151fcd8f655ea9ae",
"assets/assets/images/5_renovation.png": "79fa2b097f395a186e526ded87664a10",
"assets/assets/images/6_3d_plans.png": "cc117340e02c32e0aa3d80b9cdbb3f7d",
"assets/assets/images/a.jpg": "fb5ab44c67eac2314fe491427639f9f0",
"assets/assets/images/archi.jpg": "65887ec67dae06bbbf2db1ea80d6a438",
"assets/assets/images/architect.jpg": "2969abab57f6a2cf76d87d495b33c993",
"assets/assets/images/architectural_services.jpg": "74ed503dd1d08789cc9a7532e379709a",
"assets/assets/images/architect_services.jpg": "21905027ea34042327ba151be4de5a6c",
"assets/assets/images/b.jpg": "c09de61921962ebeafbd07c561003916",
"assets/assets/images/banner.png": "37e5e92fb04c5d4a8ac90a2a8f09d41c",
"assets/assets/images/bestsellersbanner.png": "c9bf17b0cd4bf82428fdec1835144c9e",
"assets/assets/images/bg.png": "237ed7f6b26538ed333054b3d9386108",
"assets/assets/images/bgg.png": "5529c6e6b2f85b8822d824bf42d0f836",
"assets/assets/images/bggg.png": "acd3edf1207d671eb437424859edfbaf",
"assets/assets/images/bg_design.png": "9ef1750be1bbf00b02b7167e01213c87",
"assets/assets/images/c.jpg": "d71d7a03fccd0f15dd8155c27995ce4f",
"assets/assets/images/commercial_building_1.jpg": "ac60ed62aa2d3b41a85f72cb6f72f2ce",
"assets/assets/images/contactus.jpg": "3c9ea80965ebb1ef8767b93247fd7e85",
"assets/assets/images/contact_head.jpg": "e798707b651c1491f22ee69142366b82",
"assets/assets/images/contact_us.jpg": "ed8529ab0d5c61f3efd2160a277ecc8a",
"assets/assets/images/custom_homes.jpg": "22d6690fd781374a24b554a14ab4fb9b",
"assets/assets/images/dribble.png": "e9cd682e03ce578f87bc62becc633af0",
"assets/assets/images/email.png": "d47302147a3322b31d4baad3f741f804",
"assets/assets/images/facebook.png": "09d4f82d3c859768abde3cf25fc7b6f9",
"assets/assets/images/gallery.png": "b99ff47621a1f1d2b2dbb4947ce8e6da",
"assets/assets/images/hero_banner_two.png": "92999fa9a0f5ceb269ab44ff9f5c8dad",
"assets/assets/images/home_about_us.jpg": "688ba0d02b3d46d99337b5fe7c1c55c2",
"assets/assets/images/instagram.png": "a79ee6f396fb566f9918de55cb8797f7",
"assets/assets/images/interier.png": "6d97bfad66b25f4c70cbfb20c77493e6",
"assets/assets/images/interior_design.jpg": "860681058377a9d585bd08be6a78039c",
"assets/assets/images/lease_rent_properties.jpg": "974109ff5d59f3c6689f5770d870aea9",
"assets/assets/images/logo.png": "119369a7d0e8107d0d24d4965a1785d4",
"assets/assets/images/our_bgg.png": "f7049d57d682a5aac62aae378bfc7c00",
"assets/assets/images/phone.png": "a14a17efe22c7f9bd57427e589015241",
"assets/assets/images/renovation.jpg": "d5b1a0a3aa3a35ebf78e93ea753d8550",
"assets/assets/images/renovation_services.jpg": "0d98375c55e858a98c70b9e13a651bba",
"assets/assets/images/rental_properties.jpg": "7ecf3605cc7b6232a7d79a1ef6b8c501",
"assets/assets/images/specialized_services.jpg": "bc02632d5077a714a1a5783f05e70a64",
"assets/assets/images/vastu_consult.jpg": "066441e39494c547d4e0c8991ca8d39f",
"assets/assets/images/vastu_design.jpg": "28842336c20dd350baa5d858a5a4e1f4",
"assets/assets/images/visit_card.jpeg": "cf603a6e2bfbd80dc636ce3e42810f55",
"assets/assets/images/whatsapp.png": "e70c8200b1f130a96e97afe8707b0dad",
"assets/assets/images/whatsapp_qr.jpg": "1b98dcb8dd537fd889dbf77f74932770",
"assets/assets/images/youtube.png": "dce373de85830283a44076c757c5c9de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "03a70ca63af9f2ca95610a508b5ed126",
"assets/NOTICES": "89affc9482144fefef54b3c0735d9fbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6ca4e1df7dd33e55c5b1f74ad07d6c02",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef304a0cb86338970c29bd502261137c",
"/": "ef304a0cb86338970c29bd502261137c",
"main.dart.js": "40ec85a607d865d35008a9d136abcc6f",
"manifest.json": "9a547338e0da89ba8eab70133463078f",
"version.json": "bdb5d4136830aea5e8832fde2efa7c16"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
