if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,r,a)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return c;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return c.default||(c.default=i),c}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IRPvPeW1vVdN-lcb24C-V/_buildManifest.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/IRPvPeW1vVdN-lcb24C-V/_ssgManifest.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/177.ca449dc7cc812e726f2e.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/411.87610dbf25cc816ae34c.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/452-375eb43fb33ba1adad33.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/618.f3440cc7b6336382f43d.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/662-265de5be49b034ee8fa1.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/677.9790be53945462b8d335.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/691.a40f819c6fb5fa3c02c8.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/701.bbdd1f73a29e02163a6a.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/75.c4e6dd17712de57a60a1.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/779-deacd8cc3da812716dff.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/79.674c5de78349e614539f.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/790.0222732167a5e9f91404.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/858-922a4359ab9f60c4396f.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/886.2c71ef4941123d9927db.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/914.ae2492055de70b06652e.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/976.45356af905f3ecaaa580.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/framework-ff1efe41cbfe9035ac42.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/main-88bffecbd0ff35163985.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/404-ded54ca8f8eb8bf45a68.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/_app-56bdbced96590e065d79.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/_error-ace98ab72e99ee9dde17.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/about-me-cdcbc3d6a64cf6ab3e97.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/blog-3fbe02fd3b2a6536f256.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/blog/%5Bslug%5D-5b838793c68178c141f7.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/case-study-77e6859b88dcc29f5360.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/case-study/0-4d68c8fc8225b525599c.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/case-study/1-19fae85abb046e8d6396.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/case-study/2-df02ab41cf28ceffb3b3.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/case-study/3-fc5fa3db8a6b358168cd.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/index-6682150fe49ad668292c.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/side-project-ae21ae5f11ecd0122fd3.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/side-project/colors-8ff4428e612103e1665b.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/side-project/hellocode-97758ef72afd8f0e585d.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/side-project/meliorem-f2e35b00cb39d38b2a3d.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/side-project/surveillance-45332b0fb50e5086f9b0.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/pages/side-project/width-0cbba63bd5d1e7f7cfd8.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/polyfills-e13094cb581482e858a5.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/chunks/webpack-eaaac70f882a5ee7892a.js",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/0f92b6977e2ecc561407.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/42f69d56b92610d0fc76.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/48b426d9e4435992d50c.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/a362249ee0db78ba2071.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/b65ebdd164ad12f1fafb.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/ddd0cb689783abf18b3b.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/e934bb0f8c2651e79040.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/_next/static/css/f241cb5ea9de25468cd8.css",revision:"IRPvPeW1vVdN-lcb24C-V"},{url:"/color_01/00 asset-offline/Favicon 512x512.png",revision:"68526433a2c9220e0cc3d937b363ae61"},{url:"/color_01/css/materialize.min.css",revision:"ec1df3ba49973dcb9ff212f052d39483"},{url:"/color_01/css/style.css",revision:"ad2c30c986081a44bd1f6cdbd7bcac3c"},{url:"/color_01/favicon.ico",revision:"593493ed8b9c3355481d0592ffac6356"},{url:"/color_01/img/icons/apple-touch-icon.png",revision:"1bf99b4f068f00f07d5e71a00f3e448c"},{url:"/color_01/img/icons/favicon-16x16.png",revision:"0071f97f06ceea44334a0b63b9a4aceb"},{url:"/color_01/img/icons/favicon-32x32.png",revision:"0c48b950d9ca6695e0ce1abb2a9f3baf"},{url:"/color_01/img/icons/icon-128x128.png",revision:"d33815289f85360e04ebb4e57219f456"},{url:"/color_01/img/icons/icon-144x144.png",revision:"11baa3148cf09b28f8ec83b0a9f9c191"},{url:"/color_01/img/icons/icon-152x152.png",revision:"2239b80f30a9d5d05845e7b98b6e4e86"},{url:"/color_01/img/icons/icon-192x192.png",revision:"0373626aa235c4c32d3989bfb4af8b39"},{url:"/color_01/img/icons/icon-256x256.png",revision:"f6d9406a0b1f59937fcf0ea848a6ed44"},{url:"/color_01/img/icons/icon-512x512.png",revision:"07387d511f4f8152c5aadde32ff59ba6"},{url:"/color_01/img/icons/safari-pinned-tab.svg",revision:"33c5773ff9b14f97053f88683316441f"},{url:"/color_01/index.html",revision:"05c988d2f16024507270caf30fcb36e2"},{url:"/color_01/js/materialize.min.js",revision:"5dcfc8944ed380b2215dc28b3f13835f"},{url:"/color_01/js/scripts.js",revision:"e0f932f47c589ab1f2c63b37faacc1f4"},{url:"/color_01/manifest.json",revision:"d2696643bf6a24f204f3fb9b7aa2f83c"},{url:"/color_01/offline.html",revision:"c06aeeea98ddb00bab1a915b6e07bf70"},{url:"/color_01/sw.js",revision:"8e50f87a24c0e57ef4a4ff94113a7642"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/google688f2df294ca2c87.html",revision:"1b8bcfd224d70ed1b0e2929ae325f85c"},{url:"/img/551edb0faa57e8261d40d96905066c14.jpg",revision:"6b42273747e8cf2ac8fa1100af4547d9"},{url:"/img/CyS9tuyXUAEETeR.jpg",revision:"607880beaf4e588eb53f25852a0d5545"},{url:"/img/IMG_1259.jpg",revision:"5b622b41c7c1ddb3d35e6b7f201b4421"},{url:"/img/Pendulum-3D-Box-Back-03.jpg",revision:"7e281efc56d2b94e4bf9b68e80dbdbff"},{url:"/img/Pendulum-3D-Box-Bottom-05.jpg",revision:"01eb1f6217ecb489c9bfd4fe867d4adb"},{url:"/img/Pendulum-3D-Box-Face-01.jpg",revision:"8571c830feb6c2beb5afbdc559158f04"},{url:"/img/Pendulum-3D-Box-Left-04.jpg",revision:"d49779da10910fe4097aa2cd66f698c5"},{url:"/img/Pendulum-3D-Box-Right-02.jpg",revision:"732d49bddd02a0bf5a1f751f0f50f9b2"},{url:"/img/Pendulum-3D-Box-Top-06.jpg",revision:"a13f17f4d2b6afa12e82bbe142467738"},{url:"/img/blue_box.jpg",revision:"7b6a75190d608511f5f853a6c0114a15"},{url:"/img/case-study/00/Inventory_management.jpg",revision:"05b6f99692864c6d1ae22328c9db5066"},{url:"/img/case-study/00/flow.png",revision:"423085c2a3ff5bd436f8095321cb7a50"},{url:"/img/case-study/00/raw_desktop.jpg",revision:"6ba9a768e9e995336613d5a551b1d8db"},{url:"/img/case-study/00/raw_mobile.jpg",revision:"bacfcfb2be88896e38a2cfb5344cfec7"},{url:"/img/cms/23577577492_c83cda4736_c.jpg",revision:"0afab3cd70f326178ae0763b76323acb"},{url:"/img/cms/JohnNichols.png",revision:"e53dcf108ee035189019a5bd40abc5a8"},{url:"/img/cms/ScreenShot2016-12-26.png",revision:"8a6cd60720603e98e3fec0173fb4c146"},{url:"/img/cms/SectionBiography.jpg",revision:"aca65b2dd87b87688f3db21881e9f65c"},{url:"/img/cms/SectionBiography_CMS.jpg",revision:"c7429cd6bb2a094102cfa333daa78222"},{url:"/img/cms/UI_Guide_Ver_01_B.png",revision:"24d6353ebfe83f03be68a786fb480445"},{url:"/img/cms/abstract-neon-background-light-design-bright.jpg",revision:"4415ef2994ed248939ea3fdeae26b8fa"},{url:"/img/cms/aurora-borealis-in-winter-sky.jpg",revision:"d7d34ec4db6535bfcafa743dc82431b5"},{url:"/img/cms/globalNewsletter.jpg",revision:"44b526921fab3b1e6feed17d629efcb1"},{url:"/img/cms/hands-light-color-dark-room-neon-night-two.jpg",revision:"4a8d0745ee6d1158bfe991886b23748e"},{url:"/img/cms/miguel-wildheart-560x560.jpg",revision:"ad51385b7df76ae7b114e7859e336119"},{url:"/img/cms/musicCMS_BG.gif",revision:"6a3ab92679d081357ea4bae95968e62e"},{url:"/img/cms/musicCMS_GlobalCTA.jpg",revision:"5c98189f8777e2cc872ec3a81960c566"},{url:"/img/cms/musicCMS_IntroSection_DesktopLarge.jpg",revision:"6988a6e6037df30760a87708ce5f0901"},{url:"/img/cms/musicCMS_IntroSection_DesktopMid.jpg",revision:"26c43eeb6e9cecac3fb45ddce81397d4"},{url:"/img/cms/musicCMS_IntroSection_DesktopSmall.jpg",revision:"1d98271de460760919f3464913c9bcfa"},{url:"/img/cms/musicCMS_IntroSection_Mobile.jpg",revision:"78cd68d1cb6cc3205344fb5a7e9fbe70"},{url:"/img/cms/musicCMS_IntroSection_Table.jpg",revision:"ae2805ac14381c6c7a47dafbdf58c809"},{url:"/img/cms/musicCMS_Mockup_Biography.jpg",revision:"dfb7f8fb2b48bec9c76fead017708079"},{url:"/img/cms/musicCMS_Mockup_Blog.jpg",revision:"143b613b517b1f086e72fd8a7a8b2d2b"},{url:"/img/cms/musicCMS_Mockup_BlogArtical.jpg",revision:"e76cd5f7e236ba619190fa596120a08b"},{url:"/img/cms/musicCMS_Mockup_Contact.jpg",revision:"9a9489181c5129319537af3bc19220a9"},{url:"/img/cms/musicCMS_Mockup_Event.jpg",revision:"0d6c5ca2d3e76cd4c6efc9b078dcf43d"},{url:"/img/cms/musicCMS_Mockup_Gallery.jpg",revision:"b6dd241347008b40add64d2f55ccabf3"},{url:"/img/cms/musicCMS_Mockup_LandingPage.jpg",revision:"f7e2a97cbd6931cacbf13b6b5e78d62a"},{url:"/img/cms/musicCMS_Mockup_MusicVideo.jpg",revision:"22dff958738692895d5d09a44196f63d"},{url:"/img/cms/musicCMS_MusicSection.jpg",revision:"dbd98e8a44304351e2c21824c875597e"},{url:"/img/cms/musicCMS_Wireframe_Biography_01A.png",revision:"8cce2e5e2c6df38dee71ba536c51e47f"},{url:"/img/cms/musicCMS_Wireframe_BlogArticle_01A.png",revision:"f8f545828bc98884f6ae0cf91f4aac35"},{url:"/img/cms/musicCMS_Wireframe_Blog_01A.png",revision:"b16f439c9ffe737fea41773d8b9ce126"},{url:"/img/cms/musicCMS_Wireframe_Contact_01A.png",revision:"d01472123d2f578ed133e9d6e1fef4b5"},{url:"/img/cms/musicCMS_Wireframe_Events_01A.png",revision:"8192250a0a9111026afe333c186c10f4"},{url:"/img/cms/musicCMS_Wireframe_Gallery_Taps_01A.png",revision:"3fd4f19478c0407ed883a30d7d055cb3"},{url:"/img/cms/musicCMS_Wireframe_LandingPage__01A.png",revision:"58975b5c894773377bc88385b9bf1d2f"},{url:"/img/cms/musicCMS_Wireframe_Music_n_Video_01C.jpg",revision:"56e8fffe3b588a4af0b91ec27787bee0"},{url:"/img/cms/musicCMS_stardust-bg-1920-x-1080.jpg",revision:"b0a0d1dd1fe72ce5113e4c46f674e02b"},{url:"/img/cms/musicCMS_wordpressEvent.jpg",revision:"59895113453a8283156ec78bf0096956"},{url:"/img/cms/musicCMS_wordpressLandingPage.jpg",revision:"5a1e1a0a94e823975473e34e9c2f9e83"},{url:"/img/cms/sectionBlogArticle_update.jpg",revision:"cb7ef70fa61c944bab3a0b97e60fe5a7"},{url:"/img/cms/sectionContact_Mobile.jpg",revision:"fa806f44fb8ccca4c885abed6055fdac"},{url:"/img/cms/sectionEventArticles.jpg",revision:"739bcfa9527390f7c06a8266d7bd6182"},{url:"/img/cms/sectionEvents_Mobile.jpg",revision:"b866752629b46cdce06faac354a4ad6d"},{url:"/img/cms/sectionGallery.jpg",revision:"1b47df48a0d095ae4fa83caa06e8e04e"},{url:"/img/cms/sectionMusicnVideo.png",revision:"20ca2d534c7c639c55dfd0a3729e1949"},{url:"/img/cms/tumblr_static_tumblr_static_8ctif1c8h20wsk8ck4404oc4k_640.gif",revision:"e1051236e29671789874c9bf0a650162"},{url:"/img/cms/widgetFooter.jpg",revision:"db29db268ad6f89b41ee63fd183e730c"},{url:"/img/colorView_01.jpg",revision:"b0fc9551addbafd81cd62ea751534406"},{url:"/img/ecommerce.png",revision:"2ad16f03e0a28b9968779b64f93a7c30"},{url:"/img/ecommerce/01 Mockup, Product View, A01.jpg",revision:"abb684066708bd243ef4111e8779b0a1"},{url:"/img/ecommerce/02 Mockup, Product View, A01 First Review.jp2",revision:"3f157fb6758424f95cd7432a803f57ec"},{url:"/img/ecommerce/03 Mockup, Product View, A01 Thanks for Submiting.jp2",revision:"42bbe1f7a7fcd51445c7fb1a03105cc7"},{url:"/img/ecommerce/04 Mockup, Product View, A01 With Post Review.jp2",revision:"7abf62d5468afbc28a313a6679703cf5"},{url:"/img/ecommerce/1e541f7155272657639c29e5f9038f0c-l.jpg",revision:"320cbbe8fbf8562ccfcc61f52e9d4a5b"},{url:"/img/ecommerce/282329eefc02fba1ca4935c8b6efcb27-l.jpg",revision:"a75a6caf6189d2a88a4b7aedc7761a27"},{url:"/img/ecommerce/632d61_eb21d17268c9452eb1209f8f9bcc5bc7~mv2_d_2801_4461_s_4_2.jpg",revision:"10bff48ece4d50616b54adc5f1e76125"},{url:"/img/ecommerce/Christian Siriano Silhouette 3 4 oz Eau de Parfum – So Avant Garde.png",revision:"9bda1ad80779e16ef6fcc59ab7d5bd45"},{url:"/img/ecommerce/MockupFragranceFinder_A01.jpg",revision:"ded548acd8ec51b6143ae71e128048b6"},{url:"/img/ecommerce/MockupFragranceFinder_A02.jpg",revision:"68866fac53a77df1daed3a33747484ac"},{url:"/img/ecommerce/MockupFragranceFinder_A03.jpg",revision:"194f20087b3e564ea7ee2048f8dd707b"},{url:"/img/ecommerce/fragranceFinder_video.jpg",revision:"dc10e377843ea8a9b7347e46a9a5ed97"},{url:"/img/ecommerce/i491478.jpg",revision:"26c4defe337218f4c2f7711634d00669"},{url:"/img/ecommerce/il_794xN.2360012702_c83e.jpg",revision:"a0dd4e417b640f0ee2a465da8e223ef1"},{url:"/img/ecommerce/mockupContact_Empty.gif",revision:"82fa4587ec44a7bee791150ae446bc86"},{url:"/img/ecommerce/mockupFragrance_A01.jpg",revision:"5acbcc9e7e8c24effd8de6a4034ba7e0"},{url:"/img/ecommerce/mockupPress, A02_mobile.jpg",revision:"cc63e0d1e53d67547bd67da1c58b7123"},{url:"/img/ecommerce/mockupPress_A02.jpg",revision:"38b0a5bd141047652f5ff408f4642a06"},{url:"/img/ecommerce/mockup_LandingPage_A02.jpg",revision:"9c781becfaeb4e8c8175da37f35ab0e6"},{url:"/img/ecommerce/mockup_LandingPage_B01.jpg",revision:"02f249fe6fc1709e537bdf11c8def205"},{url:"/img/ecommerce/mockup_LandingPage_C01.jpg",revision:"fbae0bf636b270200a873e4ae2292bff"},{url:"/img/ecommerce/mockup_LandingPage_H01.jpg",revision:"6c7f4c0d722ba7194efe38d246d2f276"},{url:"/img/ecommerce/mockup_LandingPage_H02.jpg",revision:"c89bfca43f4856f9d66dacc3033e9685"},{url:"/img/ecommerce/mockup_PDP_A01_FirstReview.jpg",revision:"3bda2888f7c57d685f45fb0aff8736cf"},{url:"/img/ecommerce/mockup_PDP_A01_WithPostReview.jpg",revision:"4f93acc80e1e2d2c0e768c288678f2b3"},{url:"/img/ecommerce/mockup_PDP_B01.jpg",revision:"7b30fb9dacac6a8bb1e732d533439b14"},{url:"/img/ecommerce/swimming.jpg",revision:"cb4185a276555ba74e0c0b42c5e5668f"},{url:"/img/ecommerce/tumblr_o3vpsi6iGK1qapuajo1_500.jpg",revision:"922aacd853bbb26e2c66a1e936077565"},{url:"/img/meliorem.png",revision:"8a04ca636c353cdba311d967c24e6432"},{url:"/img/music_3D_Top.png",revision:"67d4c9601c53f106e4b0b8ca776642a6"},{url:"/img/pendulum/01-Vcover.jpg",revision:"24ab962a3efe40e2bd0e5df93663852b"},{url:"/img/pendulum/02-Vcover.jpg",revision:"e5f2a0cf397f7e88270356f6f41719d1"},{url:"/img/pendulum/02d.jpg",revision:"6ba7ad2eb20532440cd0540a9c70b79e"},{url:"/img/pendulum/03-Vcover.jpg",revision:"962ce96b0b7146f9616a770ead835292"},{url:"/img/pendulum/04-Vcover.jpg",revision:"f91051c483ca683a1783b24aaf92b503"},{url:"/img/pendulum/05-Vcover.jpg",revision:"c429a53452d0d93309b894baacedcdb3"},{url:"/img/pendulum/06-Vcover.jpg",revision:"cef1ae78f0d3aa8d317041a996c5ffcd"},{url:"/img/pendulum/2dae05d3bbc7421098364c1a3c13b562.gif",revision:"33d3979fa36be7caa6411941626303ba"},{url:"/img/pendulum/6b723189d4cbe4b218caa13ce755a1e5.jpg",revision:"77537194f87c8e6250f653e3e26fbb45"},{url:"/img/pendulum/72331518_707625739713327_5112560851764202681_n.jpg",revision:"a5082661670e4ce444a2fe36efe0181a"},{url:"/img/pendulum/energy.jpg",revision:"b295da255a169aa4fa8309b2ad0a8e76"},{url:"/img/pendulum/pendulum_instagram.jpg",revision:"3fc7bc89b6a7ffd2d53f3199b7f72644"},{url:"/img/pendulum/pendulum_side_a.jpg",revision:"0791c2acfab15701f6edf390130221f7"},{url:"/img/pendulum/pendulum_side_b.jpg",revision:"d38ee894f2f09bc76a1340f18736585e"},{url:"/img/pendulum/pij77ougdwr01.jpg",revision:"58799b4ab8114e4ade54eafe43329ab0"},{url:"/img/pendulum/shape.jpg",revision:"9e2031ce1b3adab9de1ed973d576c10e"},{url:"/img/pendulum/space.jpg",revision:"72fca8e0578e04b104e7ba5a8d1c4eec"},{url:"/img/pendulum/untitled_01.jpg",revision:"873fa3786e8a15a0f2e5cc75c2bdb5ee"},{url:"/img/pendulum/untitled_02.jpg",revision:"863e35e803224edcb3981550f818e605"},{url:"/img/processing_04.gif",revision:"30a2546d3ef806b21dc2c9cd03198a1c"},{url:"/img/side-project/colors/color_Dashboard.png",revision:"8addb962005d34bab439c35cd8eb720b"},{url:"/img/side-project/colors/color_Intro.png",revision:"fe8becd2f9eacf3e4d4e79a6e94b0bbc"},{url:"/img/side-project/colors/color_Menu.png",revision:"3d9ad0cc518ce4c3e26655f773627266"},{url:"/img/side-project/colors/color_Settings.png",revision:"a138e2791c729642a004a17c8b06e2a1"},{url:"/img/side-project/colors/slide_03.png",revision:"66e3639535242fe1cb2420f0695a0dc7"},{url:"/img/side-project/colors/slide_04.png",revision:"ebc3a1cf05e5161f822c6d1b894cb56d"},{url:"/img/side-project/colors/slide_05.png",revision:"2afeb07aca974474d2229c0c1179fbf7"},{url:"/img/side-project/hc/CABulM1UwAAPf4a.png",revision:"699e055a1c9dc918c67e8eb86eb95870"},{url:"/img/side-project/hc/hc01.gif",revision:"5a67a8abb1ad2e842a42bdc83c1641b7"},{url:"/img/side-project/hc/hc02.gif",revision:"af4ee6bc72c5e68117c08b24e5ea2dad"},{url:"/img/side-project/hc/hc03.gif",revision:"b5966a8ee490e93dea906aee48310f6f"},{url:"/img/side-project/hc/hc04.gif",revision:"405c1f2614f9088a046388f5ba09db41"},{url:"/img/side-project/hc/hc05.gif",revision:"20abfbf0389b36849151163b656d62fc"},{url:"/img/side-project/hc/helloCode.gif",revision:"e554d10095899951c1a4922fb6ef5cda"},{url:"/img/side-project/meliorem/meliorem-01.png",revision:"995699146ac44cee5f41505265c55b29"},{url:"/img/side-project/meliorem/meliorem-02.png",revision:"5321d3b7ba51f7d880de6d0261d61018"},{url:"/img/side-project/meliorem/meliorem-03.png",revision:"d1094ed2d31b1261e44abc07bf0a2447"},{url:"/img/side-project/meliorem/projectManagementTracker-Mockup00A.jpg",revision:"3bf9a9df020c9d81b4698081e0a1aa39"},{url:"/img/side-project/surveillance/11380804_819446418151211_1310248498_n.jpg",revision:"9164a712efe75f9d2e09d4b3182c2e1e"},{url:"/img/side-project/surveillance/intro.jpg",revision:"68e497bd3a01e65fd2e71b66536c47e6"},{url:"/img/side-project/surveillance/jessieNguyen-Ig.jpg",revision:"5adc849519b64ff1ad8f7ec2b0c54719"},{url:"/img/side-project/surveillance/jessieNguyen-Journey.jpg",revision:"dbfaf54aae8b2b38da95cf01f1002dcb"},{url:"/img/side-project/surveillance/jessieNguyen-Moodboard.jpg",revision:"8d46ade25de17da196a3ab27e64f5fe7"},{url:"/img/side-project/surveillance/jessieNguyen-socialMedia.jpg",revision:"2dd84a8bc6cbb1c2038f1e757d0af435"},{url:"/img/side-project/surveillance/jessieNguyen-socialProof.jpg",revision:"35d2049e5a2bd0f10bff6e97959cada6"},{url:"/img/side-project/width/width_BothPlayer_1080.gif",revision:"13b52cd712388b403a9a81740448274c"},{url:"/img/side-project/width/width_BothPlayer_360.gif",revision:"c5718639c5f40869f4e76afecbab2407"},{url:"/img/side-project/width/width_Landing_Page.png",revision:"bb72eac32bae0d988022f4433dde17cc"},{url:"/img/side-project/width/width_LeftWon_1080.gif",revision:"a3d3bf9bdd95e237bc0abbfa693b16b7"},{url:"/img/side-project/width/width_RightWon_1080.gif",revision:"fe23c920daaa5ecabc4d2f3149493307"},{url:"/img/side-project/width/width_Sketch_Iphone.png",revision:"69dac8114940a5f1dd6e769824161aff"},{url:"/img/side-project/width/width_Wireframe_levelOne.png",revision:"455e6b1b1501ed086a1765529236340b"},{url:"/img/side-project/width/width_Wireframe_levelSix.png",revision:"b2e6a2d63b4219c04ae4726f43490ed7"},{url:"/img/side-project/width/width_Wireframe_levelThree.png",revision:"afa8a4de785b992d64671d4c09a8002f"},{url:"/img/side-project/width/width_Wireframe_levelTwelve.png",revision:"81f79b565787fdbf1d23facac1b6dc33"},{url:"/me.png",revision:"0c1c5de36db311087512323cd96ae793"},{url:"/robots.txt",revision:"06264d754e78be762d0c691409889b4e"},{url:"/sitemap.xml",revision:"206496e9eaaf6ee39db7c799de5588d2"},{url:"/static/icons/icon-128x128.png",revision:"160302ed3758b80d35f8c7c857b82a3e"},{url:"/static/icons/icon-144x144.png",revision:"2aaf43576b9dab3cca5943c2e96c4449"},{url:"/static/icons/icon-152x152.png",revision:"e76ce9196e984d4dcc26a85d8e966ab2"},{url:"/static/icons/icon-192x192.png",revision:"4e120a36391836f8976d1b04cab6f286"},{url:"/static/icons/icon-384x384.png",revision:"1389ad2f41a3f7b862934c1d416ebcba"},{url:"/static/icons/icon-512x512.png",revision:"ae334eff6cf5df6269c22cf9f54e46f5"},{url:"/static/icons/icon-72x72.png",revision:"1adbb9abc49d47f0e60d64271ece3595"},{url:"/static/icons/icon-96x96.png",revision:"ccda20a27a4289616b88e36080a7a45f"},{url:"/static/manifest.json",revision:"8e355dbda027a2b33a345604b234cdc8"},{url:"/svg/designer-task.svg",revision:"cf00fc8c36edc512930481dfbc08a665"},{url:"/svg/developer-chat.svg",revision:"85615a1c454be195ff360bdf993a03fc"},{url:"/svg/development-researcher.svg",revision:"03777a1874c0a28f415fe2e28da94620"},{url:"/svg/icon/Progressive_Web_Apps_Logo.svg",revision:"50ff246204b1b15fdb4bf872551c7fac"},{url:"/svg/icon/apple.svg",revision:"8d8834707782c73f3ea1f328a47de618"},{url:"/svg/icon/css.svg",revision:"5326fd34981b85b74e8f1f404d932b0f"},{url:"/svg/icon/datocms.svg",revision:"05f54ea26f713ad702463c1eea1df0c1"},{url:"/svg/icon/docker.svg",revision:"2857874ec6592ea6acfd04983a95c501"},{url:"/svg/icon/figma.svg",revision:"44e29b3ea4809d0c7c26a227eae951c6"},{url:"/svg/icon/gatsby.svg",revision:"7dc9fdf48656f8fde01b2ef459a8d4c2"},{url:"/svg/icon/github.svg",revision:"7a6ce37e9a7ba29e3c4a3e80b3aba8e7"},{url:"/svg/icon/google-analytics.svg",revision:"05e16a59f9adada2fb81b3d1229a6c48"},{url:"/svg/icon/html5.svg",revision:"5d1ac529821c57d4a7091aed35775c95"},{url:"/svg/icon/invision.svg",revision:"6982d16658b898eb75c1d06fca5eb441"},{url:"/svg/icon/javascript.svg",revision:"d155054a5b8f56cf49bf2c90b9da0897"},{url:"/svg/icon/jira.svg",revision:"ac5144fcd998768ddcf735b1aed54b1f"},{url:"/svg/icon/linux.svg",revision:"d049bd6b5affb428384978d7c90c0387"},{url:"/svg/icon/mongodb.svg",revision:"ce756188f8cec48ed678bf47355ccf48"},{url:"/svg/icon/nextjs.svg",revision:"b4ca64230faf6a713b20511c35aed4aa"},{url:"/svg/icon/nodejs.svg",revision:"27443b11147eeb083f9f6df0e59cc11f"},{url:"/svg/icon/p5js.svg",revision:"41006b47bbff92ce9a80ce8b5622650f"},{url:"/svg/icon/raspberry_pi_logo.svg",revision:"513b6cfb75f4264b3cf4de0ebf9a68c4"},{url:"/svg/icon/react.svg",revision:"f5164e6a6766427be27e117402cf290f"},{url:"/svg/icon/s-dribbble.svg",revision:"6af2f302cf48de6d5ad4f83e95559121"},{url:"/svg/icon/s-github.svg",revision:"83e3c173c3579af291ca99cc175b7f52"},{url:"/svg/icon/s-instagram.svg",revision:"5a38db3e4677fb76e8fc9bd0f191d00b"},{url:"/svg/icon/s-residentadvisor.svg",revision:"3296169fee3ba0ff84731e8b64ea6da5"},{url:"/svg/icon/shopify.svg",revision:"4f1afb4910c04b06f4876dece4384727"},{url:"/svg/icon/sketch.svg",revision:"4b804d476da2d44f779505d60d0f4d8e"},{url:"/svg/icon/slack.svg",revision:"429c2cfdf1183cc90736bf5927544452"},{url:"/svg/icon/terminal.svg",revision:"7edaff8e7605e804669a846d9ed034a1"},{url:"/svg/icon/webxr.svg",revision:"de51f497077fe63c08ebabd7019ae39c"},{url:"/svg/icon/wordpress.svg",revision:"e7d3a8df8b6440e2f0ba0470a2097120"},{url:"/svg/ux-researcher.svg",revision:"0a43d530f7aa6f5589dbd0fb3c1d5b61"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/video/360Background.mp4",revision:"315e9935d407abe4afa6999a3866efe7"},{url:"/vr01/index.html",revision:"5aed48e16055d762a5ed57f4642a4960"},{url:"/vr01/model/a_lighter/scene.bin",revision:"9885b04d3cf5ef62b8181b8322e63cf3"},{url:"/vr01/model/a_lighter/scene.gltf",revision:"468fbacdbcd01c7d6de5a4fced15cb4c"},{url:"/vr01/model/a_lighter/textures/wheel_center_normal.png",revision:"8dcf4daffb64f6cd282016450d30c0bc"},{url:"/vr01/model/angel/scene.bin",revision:"4d080b4db7f30b7960ff4cc3d3097416"},{url:"/vr01/model/angel/scene.gltf",revision:"d6718fd3368e9b2104957d6f1095ecaf"},{url:"/vr01/model/astronaut/scene.bin",revision:"f8b5f8581e8b0012895526d4baac39f9"},{url:"/vr01/model/astronaut/scene.gltf",revision:"fc7a6ec6c69c3031850b134b52d421f3"},{url:"/vr01/model/astronaut/textures/material_0_diffuse.png",revision:"068c2615ffa5cd9c9300c6d900ef1c1d"},{url:"/vr01/model/astronaut/textures/material_0_normal.png",revision:"4d33826a745f845d029c3361bac27950"},{url:"/vr01/model/astronaut/textures/material_0_occlusion.png",revision:"904bc0429a80880a9eae1bc3f0505500"},{url:"/vr01/model/astronaut/textures/material_0_specularGlossiness.png",revision:"e95a5dec36a9e60f4f998388e0c8348b"},{url:"/vr01/model/astronaut/textures/material_2_diffuse.png",revision:"285de61d1aa1c997186ba151e5ce2f5a"},{url:"/vr01/model/astronaut/textures/material_2_normal.png",revision:"71e435d46dc0b71c14c728f6d3dbc23c"},{url:"/vr01/model/astronaut/textures/material_2_occlusion.png",revision:"629cbe3d90dc422ecef90e70de31570c"},{url:"/vr01/model/astronaut/textures/material_2_specularGlossiness.png",revision:"8209a256107c02873540bf9a972074bd"},{url:"/vr01/model/banana_duct/scene.bin",revision:"6a587413a53177eb7254b4b234954592"},{url:"/vr01/model/banana_duct/scene.gltf",revision:"f6c2a6b07d8652248ccf3ebfdb03e636"},{url:"/vr01/model/banana_duct/textures/banana_baseColor.jpeg",revision:"e52e41b083eaf7c363b6a3346ce9409c"},{url:"/vr01/model/banana_duct/textures/banana_metallicRoughness.png",revision:"25c3c1065093aa74cec2665af4c83c28"},{url:"/vr01/model/banana_duct/textures/banana_normal.png",revision:"b5657bc8fcec10d3250578c7bd73c049"},{url:"/vr01/model/banana_duct/textures/frame_baseColor.jpeg",revision:"7e62cb5c3519e7e420ad4fb14da5790d"},{url:"/vr01/model/banana_duct/textures/frame_metallicRoughness.png",revision:"ad690b9bf71f14fb28fcfa85053ee100"},{url:"/vr01/model/banana_duct/textures/frame_normal.png",revision:"473518db83881aff966a687e07fb3b3b"},{url:"/vr01/model/banana_duct/textures/tape_baseColor.jpeg",revision:"7cb898e071b07290001a446c79d848a5"},{url:"/vr01/model/banana_duct/textures/tape_metallicRoughness.png",revision:"a8e020e21f01066bb86775f36ff7b46a"},{url:"/vr01/model/banana_duct/textures/tape_normal.png",revision:"5753d067e0816b577de188026bae9f4d"},{url:"/vr01/model/blue_alien_forest/scene.bin",revision:"b04beb75964fd69bf5f0cdfcea6a2c99"},{url:"/vr01/model/blue_alien_forest/scene.gltf",revision:"8f4851026d27b7a71b574411fcf4fbea"},{url:"/vr01/model/blue_alien_forest/textures/ARBOL2_baseColor.png",revision:"899115deb6a2645bf64a1c45f0f2f9ee"},{url:"/vr01/model/blue_alien_forest/textures/GRASS_baseColor.png",revision:"f0f47a67fc92b02662a3daf51142dd7c"},{url:"/vr01/model/blue_alien_forest/textures/GROUND_baseColor.png",revision:"d069a772b914f46b68e370d1a99824b2"},{url:"/vr01/model/blue_alien_forest/textures/TREE1_baseColor.png",revision:"6eebedab081614763f5a36e9c6e9e329"},{url:"/vr01/model/blue_alien_forest/textures/material_baseColor.png",revision:"8e5be0223ffebfd3b8a3acb100ef3869"},{url:"/vr01/model/casette_tape/scene.bin",revision:"fb42571bdbb2e03c7649213af64244e6"},{url:"/vr01/model/casette_tape/scene.gltf",revision:"b8bdc3d9543a56965f88c11d8f7ad847"},{url:"/vr01/model/casette_tape/textures/casetteblinn1SG_diffuse.png",revision:"f0c1aead7187a0a09ea97034a8800822"},{url:"/vr01/model/jelly_mushroom/scene.bin",revision:"70ce35e4fc9a73782fc68174a8192453"},{url:"/vr01/model/jelly_mushroom/scene.gltf",revision:"dff41b0ce09af87515a387b3175f7e8a"},{url:"/vr01/model/jelly_mushroom/textures/Shup_baseColor.png",revision:"32561178e34a6353dd24865b9caa30c3"},{url:"/vr01/model/jelly_mushroom/textures/Shup_metallicRoughness.png",revision:"4d07c661dc7ac5120e437503b109ea11"},{url:"/vr01/model/jelly_mushroom/textures/material_1_baseColor.png",revision:"5784784ab2384b49c65f09cfe2ab4a03"},{url:"/vr01/model/jelly_mushroom/textures/material_1_metallicRoughness.png",revision:"a708182e3dd4891010fdf3cb893ffccd"},{url:"/vr01/model/jelly_mushroom/textures/material_1_normal.png",revision:"023599ccd22509e980e3d5441a7771a7"},{url:"/vr01/model/jelly_mushroom/textures/material_3_baseColor.png",revision:"dce6de8e856f5e1178c431d013bf75c0"},{url:"/vr01/model/jelly_mushroom/textures/material_3_metallicRoughness.png",revision:"8e30889669fe4df046f719937351329b"},{url:"/vr01/model/jelly_mushroom/textures/material_4_baseColor.png",revision:"a24afeb9f3d8be08332dd67efc59f2ce"},{url:"/vr01/model/jelly_mushroom/textures/material_4_metallicRoughness.png",revision:"64aa923757f6756e43587e8bcb04c872"},{url:"/vr01/model/jelly_mushroom/textures/material_4_normal.png",revision:"33f9b40357c40bdcdb86d21de59c2937"},{url:"/vr01/model/jelly_mushroom/textures/material_baseColor.png",revision:"a193af6ddaf39a6668517138f527d510"},{url:"/vr01/model/jelly_mushroom/textures/material_metallicRoughness.png",revision:"69adf7bc42181e8a0bd9fc1e3f592b2a"},{url:"/vr01/model/lampstand_menorah_of_the_tabernacle/scene.bin",revision:"8297b50bab9164816e863716faae64ff"},{url:"/vr01/model/lampstand_menorah_of_the_tabernacle/scene.gltf",revision:"82601a12b471e1057ef5237f58ce4ec2"},{url:"/vr01/model/moon_buggy/scene.bin",revision:"6c6fee775c9fd5bfae1ec3c507d33567"},{url:"/vr01/model/moon_buggy/scene.gltf",revision:"1fa4f7d1cf93f99da51a5f6c368fd059"},{url:"/vr01/model/moon_buggy/textures/13814d134_baseColor.png",revision:"6b4c5378dc991c30e475db5212d95afa"},{url:"/vr01/model/moon_buggy/textures/23039d233039_bump_baseColor.png",revision:"0189839a92be8dccb7f4db3e8b32687e"},{url:"/vr01/model/moon_buggy/textures/243626av_baseColor.png",revision:"b6d52e3d7d2446888af20697aeeb693a"},{url:"/vr01/model/mushrooms/scene.bin",revision:"83a77e2cca2131a8494209a9aa3ad0f5"},{url:"/vr01/model/mushrooms/scene.gltf",revision:"791cc340feace89669402ce4cb43693d"},{url:"/vr01/model/mushrooms/textures/Scene_-_Root_baseColor.jpeg",revision:"c1999d28762ab6252baeb62f97df12b7"},{url:"/vr01/model/nike/scene.bin",revision:"9ec3a6befdac131e76b968300128a31e"},{url:"/vr01/model/nike/scene.gltf",revision:"fc52bd0b63406ea9e6f4b2e89ea9d1dd"},{url:"/vr01/model/nike/textures/blinn3_baseColor.png",revision:"4bdb636be4844e2164eee02a44081fd5"},{url:"/vr01/model/nike/textures/blinn3_metallicRoughness.png",revision:"7f0c7380313488c607cb8227466d97f4"},{url:"/vr01/model/nike/textures/lambert4_baseColor.jpeg",revision:"5781dce7e3ecc3d6e0cde5f9122b8a83"},{url:"/vr01/model/nokia_3310/scene.bin",revision:"d21eb6470b0f5f2f6771f37418efa1ea"},{url:"/vr01/model/nokia_3310/scene.gltf",revision:"cae2f27902705d9f682b6c091e4253fa"},{url:"/vr01/model/nokia_3310/textures/initialShadingGroup_baseColor.png",revision:"6eebf811d1a6de86dd36af3db3aa2247"},{url:"/vr01/model/nokia_3310/textures/initialShadingGroup_emissive.png",revision:"ec5dfa80980fa38f20b29ba331f27f6e"},{url:"/vr01/model/nokia_3310/textures/initialShadingGroup_metallicRoughness.png",revision:"b88af73931b33465a3473459dcb3bd1c"},{url:"/vr01/model/nokia_3310/textures/initialShadingGroup_normal.png",revision:"fe7d14a9b3f8bd6b9d922525ac6aec68"},{url:"/vr01/model/phone_booth/scene.bin",revision:"14e744761473464df1246f9f99b61945"},{url:"/vr01/model/phone_booth/scene.gltf",revision:"54597dc23cb9fd100c1a301ac0ecbbae"},{url:"/vr01/model/phone_booth/textures/Scene_-_Root_diffuse.jpg",revision:"27181d67c6db1c1bb99f1e38f5932f08"},{url:"/vr01/model/phone_booth/textures/Scene_-_Root_normal.png",revision:"16c58ef98f721ab479755e7e65df7eea"},{url:"/vr01/model/phone_booth/textures/Scene_-_Root_specularGlossiness.jpg",revision:"8ccffaa0d84de9c2a1a2c7030af99503"},{url:"/vr01/model/pills/scene.bin",revision:"7741c9cf5ff6f8891c6f019d95e18f50"},{url:"/vr01/model/pills/scene.gltf",revision:"c58910dd38756e2c6f34280a58200a5e"},{url:"/vr01/model/pills/textures/Pills_baseColor.jpeg",revision:"17f5226a21330b34c3ba659db6b37132"},{url:"/vr01/model/pills/textures/Pills_metallicRoughness.png",revision:"e38933846b1b19df223614d598e47277"},{url:"/vr01/model/pills/textures/Pills_normal.png",revision:"868b4acb40ee81c3df8b1e16490e81e2"},{url:"/vr01/model/pixel_art_smiley_face/scene.bin",revision:"ae196198b0d1c2f32c41dc419aee3679"},{url:"/vr01/model/pixel_art_smiley_face/scene.gltf",revision:"8c1c27354062940448c01d9f8c5f79cb"},{url:"/vr01/model/pixel_art_space_invaders/scene.bin",revision:"2273528fc3e26e21c165daa7c14b1f6c"},{url:"/vr01/model/pixel_art_space_invaders/scene.gltf",revision:"3148fc775c01da0602cb5f88ee48fae9"},{url:"/vr01/model/space_engineers_astronaut/scene.bin",revision:"4bd9f3a387427b22234592f6aaee41b8"},{url:"/vr01/model/space_engineers_astronaut/scene.gltf",revision:"07b7eae108adfe3e1526fb69a6f2ebf7"},{url:"/vr01/model/spaceship/scene.bin",revision:"bd26ff865d098670998aaa9087f65bc6"},{url:"/vr01/model/spaceship/scene.gltf",revision:"283db8fba9d43eaab67bf57d4e30b7f0"},{url:"/vr01/model/tesla_cybertruck/scene.bin",revision:"3148cac796a67d363580a4338f657c77"},{url:"/vr01/model/tesla_cybertruck/scene.gltf",revision:"2cd2addf803d33d2ae9a366b935a1daa"},{url:"/vr01/model/tesla_cybertruck/textures/TeslaBlack_metallicRoughness.png",revision:"20a79c87a38556c68c9db978f4cacda5"},{url:"/vr01/model/turntables/scene.bin",revision:"e5feff3249d84c858565b1f731d491a0"},{url:"/vr01/model/turntables/scene.gltf",revision:"2fc4ddb4fa13ee2f52c26ad33abb7787"},{url:"/vr01/model/turntables/textures/Material.001_baseColor.png",revision:"31916e33e82fe9166f5ac0cca41ee9b7"},{url:"/vr01/music/js_-_big_one_around_here.mp3",revision:"b9c722371f94669bc58864284b2a8de9"},{url:"/vr01/music/js_-_i_was_like.mp3",revision:"b6d0c52bf0b09884a45a8ddf958c354a"},{url:"/vr01/music/js_-_neil.mp3",revision:"a2d314a7842c052e65208c2847a6f17f"},{url:"/vr02/img/24549684008_5b18834af3_o.png",revision:"6dc68c8abf2d11ee618900fe074e22b1"},{url:"/vr02/img/36205303566_90e9f2b337_o.jpg",revision:"8051f9d6a74ec83b34e14ce4f5ea6cbd"},{url:"/vr02/img/38592329236_ab1aac9b26_o.png",revision:"f359e6612de7aa0f691eacbb6aa0197b"},{url:"/vr02/img/89556727-natural-stone-texture-rock-wallpaper-background-wall.jpg",revision:"cf688d04c87901ebe1719474203d6a1e"},{url:"/vr02/index.html",revision:"1081c7c4b5665dfb0b377c423f18d07d"},{url:"/vr02/kids.html",revision:"4cc89ad3f5203a1ce398c2a5e001c8a7"},{url:"/vr02/model/balloon/Balloon.mtl",revision:"c294e1a1eebfca738895b88b1ed0897a"},{url:"/vr02/model/balloon/Balloon.obj",revision:"350d52e3e4e9065373155ff60f8bf052"},{url:"/vr02/model/gravestone_4/model.bin",revision:"6dc0ee31f25645b5188bb7ff6266cbcb"},{url:"/vr02/model/gravestone_4/model.gltf",revision:"199bb8852767427dcfd420505b6973ca"},{url:"/vr02/package.json",revision:"e0bea912d36823784f773808196feadd"},{url:"/wave.svg",revision:"969f3f4281f67b3b5d5b65ec86c1b9f4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:r})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
