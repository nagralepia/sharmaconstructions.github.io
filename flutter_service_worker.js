'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e82a7b95f1b7f9cd0439822e369c6f99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23cc42a9937e7508f4d347ebfbbcb545",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "06513aff97155dbcd5eacbe1612c4eee",
".git/logs/refs/heads/main": "2adb390673429763709f96319492ae2e",
".git/logs/refs/remotes/origin/main": "684b566081b582bbc21701cf62e155e9",
".git/objects/03/58c591f6591639f945b68712b510a560a56dff": "0102268dcac43c732c41b463f4bb9bd5",
".git/objects/05/7aee6d5d0fdac805d3e6f5b23d99020e7e63e5": "df40af11d48f19ee931a5a9f1443d35c",
".git/objects/08/eceacabadb1d4edf253fba62888aaac04a56d7": "ca3440333cf0e9abce7cf703c95e5e97",
".git/objects/0b/e7421d9218d674d65d412f2c4bd18304b837b0": "cf119562860f71a968954d43388f9d03",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/2deaf21d7524f86c714904eb661187663f3633": "10931e3a30ecd59ae783e4bbf00caa43",
".git/objects/11/2f737d7d90d6c70d3d3e4e167d6b3fd1284383": "6f6d8dba53ccdc6602ef2fc8a3dfeaca",
".git/objects/16/2859da6560e6b03bb51d01fa81612460897d50": "4bb8e5c5e405e792d4bbc2203b96c5e3",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/6c9eee2a8c0fda916bf17d113a055d40402c21": "fad1376de1f503602f0f77c95fa4a540",
".git/objects/1c/dcad382b8d579a3998c41a396b920d06681fee": "e8e90becbec8c3a0222926ae6acd2447",
".git/objects/1d/afe27c57980c5599791f00222e7fbca5fe6d09": "7c7cd08327802d75c51f655693bda3bb",
".git/objects/1e/913a40b529d9179f0580a7ff8cf0811e2ff1db": "6e36fb3add8dcc09b77ecfcbf971663c",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/f051904a677b21d4409d2165755fd6d40c531b": "c1ef7a4484c17407cd0db3c39123eded",
".git/objects/21/aa2cc76598d3d90ed59e72a450b6294c9f6991": "1fea3cc86407b5a33d63afb1ea24488f",
".git/objects/22/b5c291fbeecf54d34f38774aae8ce1edbdad04": "13f0d57f97ba644eaa0fc35297574472",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/23/2bfa54af2fb6c6997caee7f7bd8217e0f90462": "e2f4d24215ffb99425aa991c0356d141",
".git/objects/24/ecad50177e9041c7fe9ef546c169e8b97a6e11": "e03f62f7e2396cb010c94a71fe2abd05",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/13ba205f3e39308256f78cea9b05e1dde71c81": "631de370922255d65e96d89241c15ce0",
".git/objects/33/5c9ea2f80cccb98dd54dd7b4f6407e60ab3c16": "c9466a15e6e0851615eb0f7186ea9f02",
".git/objects/3c/0d69e89a9bc45aa8b2b7efbf5232acceee0844": "32cc5957a462f9ed8b248d6741fc3201",
".git/objects/3e/72cf86d6f15ac2e77381a3e62d92e10f343a5a": "b5f11eeada55816a493fe4f7e06c77f1",
".git/objects/3f/589be6afbded5a7dd7146e4f930699c64a51c3": "a1ccef5ef0281f59e0e91cf9ebffda05",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4e/2cbe174106b3e69463a1a478dcdd339c995765": "b877fc5d975e509aaba851b2910c8122",
".git/objects/51/0feebeca996eb74fff5ce6f9149ce8bd4e2b90": "c25db3f35d351ad02e558896bdf8fd49",
".git/objects/55/23f2a62daf417969cf27259d194c880a0812e0": "d9950e195eb2637ae9960cc94741a325",
".git/objects/55/eb4af9f8cef511ebc12dcd4c85c28ffdcb4ee8": "919d454d388ed1a7c5b7a090a33eee28",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/1368ce3b3969dd381b46e4807fbabe329ef046": "e6ea8dd70fb69c9dd50e9281f8c06e7b",
".git/objects/5a/82512b7525ced8a9f16b6ac2fa7be8d97dc0a9": "e6b4b4cf452c7a06d92e46a8e7f2fed1",
".git/objects/5c/f6c2c6c93f2af2460c86406f4bb72b25e2def7": "44837e1b16580e5cc571329a1a739d24",
".git/objects/5d/7773556969678b47bca9ca3b46405eac8f2bdf": "d687029b906715fd50207ecf7090db41",
".git/objects/5e/99a3417bb2329940d9df661438aea690af8947": "8814ee9722f527f902fe3c34ff2508e4",
".git/objects/60/6df12e488c93b70e5565f743976032db003f5b": "750466f59cd31ff47c798220e9551ef4",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/819084d9b0b276cc8ff0a962258c2ed91e5a92": "02243c801386197f2a301c247b311348",
".git/objects/68/f318aa787fe17b015ec9daa900c7fbf378847c": "d8468532cc1b581589040447d19a667b",
".git/objects/6b/6bd7772dc24e533d9995c512346ae5284b9218": "1de46eed15dbdead6945e8bc067c7f89",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/9c29f30390bd29338208a3f31ba8c25dcffdbd": "64a9c78345a7e55d582873c058a128f0",
".git/objects/77/11c4103b852bc1d1167d2597302631b143e49a": "21d81073abb2c54414e97b12d526c5ad",
".git/objects/79/423e3cfb4e86c264057757814929fb35a7d0ef": "29088eb5423b2995d8210c17127805cb",
".git/objects/7a/b8a450291bd85a6c21f76499d178d052628e90": "0cba3dd32ac0bf4cd54838431a8d7a5f",
".git/objects/7d/b6b159499caf5611ffece3c1eba90b3aed2b38": "f9b9f16849752721ee479df7888412f9",
".git/objects/81/2c1dc0b09cfb7710416c2174005c44d79b11f2": "c006c85f63e277c9bf421de7328f83b2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/e05b02e1fe30b7f58ea0451699b43dcd8d5d39": "3e10ed57b46811e5387e2c1aa18710ad",
".git/objects/9a/c5a9aa0e14ff826a1cf329dd1129d46b03164e": "43fd510dedf86b123d1c0098fe483778",
".git/objects/9e/abddea6e7882e8beb9e002e0ff9aae789c617e": "70b4a4db56648fee812860ed0937808e",
".git/objects/a0/c949381af1a019be6b63bc7042b65abe878c4b": "f367d5bb7352aae3a8bbb9d7ed399e37",
".git/objects/a4/be300af91950a2dffd03795981fb533ce36362": "be9c6d06cbb283957060dd3086aa2338",
".git/objects/a6/11243dd5185198a4d1bfcb99582c1513de0fd4": "cf5f7be7309987f07f89ee3c8f4a445e",
".git/objects/a6/49f54a024083ebfbda783f6e9ae57734fe47b7": "84a1493e523f184458f8bbda0d95d71c",
".git/objects/a6/f4eb27000ab603e94cb6cd72672bb9340a940f": "8db2d132a34f2e618db8e48f752afc7f",
".git/objects/ac/eb8e34c6ed281aca8d89f8eb4bedf387f31aac": "1b51642eb61f0f5bbad361acd93f897d",
".git/objects/ae/540c6fe471dddeb721d63092012fb8dcaf887e": "84a0d22531fbd38046ac5368153b3748",
".git/objects/b0/1bd97666b2c77516f966a21bdfc197535eb931": "63cb546c5ebe734930cf334d7d5f52e1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a5f47002a2ddf156aade671f9e6d3d2e4eedd1": "e8a15919dd6c4a7e278caafdccbcb287",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c7/546b0f2d2f97fe8f53857005f7791ecc1c9468": "6bb229ffc664e0b1209a50c742562030",
".git/objects/c7/d81f7cd0097d39134efb98d7413005ec9b76ba": "69d776ec3c157e89151d0c148db877ef",
".git/objects/c8/0f0670ddb134f5acfcb072af84d5ca48d6722e": "fc409aeb66981fc3b5e481dcfddff6c5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/c0e7b4e85a01d53e2bfb953e42fa409458973e": "1cabd764dde0d4e91d92907404bd67cb",
".git/objects/cc/54f20f07f876542e87008ac625c561403309ef": "ee14af271289771a28c90fa397edcc0f",
".git/objects/cc/659f08e53eea89812627cdce95dfe53882be16": "907ac4bdc857616af3895af060d4bd94",
".git/objects/d0/0bcade6ea790098644adb07a69618eef8c42fb": "afb3032186f2a9aacac31d90d3ec1ad0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/6d6665dc5de84507cefb91798e31098754cee6": "8e0bde93dc35f86632c7769c420efdef",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9671b36e17e3140cbe8b6f76d437ff0fbd8355": "9949cb071e8cc788ca888ce479c2ca44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/c6fd28551acfb6add8c5271eb55be99a4beff7": "7e27e9b540bdcd0678e9c52cab042dba",
".git/objects/de/a6af26665e35be01751daeeb3f24a35a8e31a0": "0b20168b29e6c445f4f0c12f9e3e469a",
".git/objects/e3/bb9d780b0be9d331e6d4d36391004df5ef828b": "fc7dcf50f554f0280b03dbc4e05ec1e6",
".git/objects/e5/b924f2c6c0422d944acca9eefe903c97b1ad76": "25519fadffec2f00b178edf6d05034d2",
".git/objects/e6/3dce3458bf4fa5b081bef790e61c696a5994aa": "bff226ec6a0055a4e57fab240f71edb3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/0ce18a91e05e84631e5f771d267021a2b12cae": "743e1b672137122bb15af0765c99509e",
".git/objects/f6/42ef76d0a979f89ab9222575d9a1e13c7fc68a": "1a31aa4f1d35ea31f78ee999d3d24ca7",
".git/objects/f7/a708cbf1f4ecced895b6ce04c1ec9982a4675e": "91bf02497e61ede9f67142595695ac54",
".git/refs/heads/main": "9862a293f3c4b34ab6aa9fd45188ca97",
".git/refs/remotes/origin/main": "9862a293f3c4b34ab6aa9fd45188ca97",
"assets/AssetManifest.bin": "56fedf2b930db6239f2e0af28b91af23",
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
"flutter_bootstrap.js": "3616f06257b5edd467a2f6bf8f39889b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1678f271129e0b35618658a1b7cf0c1d",
"/": "1678f271129e0b35618658a1b7cf0c1d",
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
