/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2017/04/04/Numerical-Examples-in-Java/index.html","b0ef9a7d37fea3c46cc6b3a796626b34"],["2017/10/30/Assignment-1-of-Advanced-Computational-Method/index.html","e68c99d1a152f77bd5b6922132f8f33e"],["2017/11/03/Project-1-of-Statistics-md/index.html","298c55acd86aed3f01b1b3fe4cac2b5c"],["2017/11/03/Project-1-of-Statistics/index.html","7cae4446e0d96c68a0fff9f71f5b5a18"],["2017/11/14/Assignment-2-of-Advanced-Computational-Method/index.html","31c53d22d8846c6de4a152320ba5b0e3"],["2017/11/17/Project-2-of-Statistics-md/index.html","c12ce59c1a2561a8611ec3349658dbe5"],["2017/11/17/Project-2-of-Statistics/index.html","58d3aa6b58f29c53dd07a9dadc6947e3"],["2017/11/29/julia基于GLM包的线性回归/index.html","9153fe7afdbdcf8c5f7107ddf6a36316"],["2017/12/01/Project-3-of-Statistics-md/index.html","9ca688a45a3c9c80472af0d1f5104475"],["2017/12/01/Project-3-of-Statistics/index.html","4600cf499d1a2f501e398fb1fa05c6a9"],["2017/12/15/Project-4-of-Statistics-md/index.html","a0493cfd96770e893e2099706b95a1a7"],["2017/12/15/Project-4-of-Statistics/index.html","c73e07ea8b0bd3352e8fbb34910a19c6"],["2017/12/25/30-seconds-of-code/index.html","74a32f38303fd8e88eb04218401119c3"],["2017/12/27/30-seconds-of-code/index.html","2600f763898873e02df10ba0f71d8af9"],["2017/12/27/剑指offer-JavaScript版I/index.html","8eb50e6328ddf74faababf08e9d35379"],["2017/12/27/剑指offer-JavaScript版II/index.html","4d80c6946e2950925f07b3970fef6761"],["2017/12/27/剑指offer-JavaScript版III/index.html","88e729d920f83f82fc6234c4de305d93"],["2017/12/28/LeetCode-Notes-001/index.html","6b7dc79ea814996aee850028bdb706a8"],["2017/12/28/dot语法总结/index.html","0dc3414aafadcc4db2c8f51d20dfcd61"],["2017/12/29/A-simple-Metropolis-Hastings-MCMC-in-R/index.html","ce846ef3685abfa27c76f4a260609f7a"],["2017/12/29/Classifier-Comparison/index.html","19bd4c1b05dfee3c9a1c0e02e79effb8"],["2017/12/29/Clustering-Comparison/index.html","42c777ab12823bcdc495ec26f6ec9176"],["2017/12/29/Cross-Validated-Predictions/index.html","47121ab976c2ec24ea6e609d1d38c651"],["2017/12/29/DataFrame-Demo/index.html","eca4c5cd1946e1cd5c07f9570fb591bc"],["2017/12/29/Decision-Tree-Regression/index.html","754e387d483cd866080e2b5f83bd12b5"],["2017/12/30/LeetCode-Notes-002/index.html","2e84a8911740cc580e020d7c2c72a953"],["2018/02/08/Project-Euler-001/index.html","4c7bb104328f9362fbe4a28fe1112dd3"],["2018/02/09/Project-Euler-002/index.html","ff2e78d7f09246aaeb35c1c9dd9ea384"],["2018/02/10/Project-Euler-003/index.html","438ee64e2b573df120a7d7d3dc558462"],["2018/02/11/Project-Euler-004/index.html","aca6caace24d3f6686e6ca8f456dccb7"],["2018/02/12/Project-Euler-005/index.html","bd4284dbce149ebb02b353fc1bc35684"],["2018/02/13/Project-Euler-006/index.html","bc74dd055984a47eb716796d28e9e0c2"],["2018/02/14/Project-Euler-007/index.html","bb204e86edd539391dbd41f60edaeeaa"],["2018/02/14/Project-Euler-008/index.html","4d37b466c7ffa208793f8452bd9f0a03"],["2018/02/23/Linear-Regression-in-JS/index.html","59903ec1c8111b3cb31f7f0794017604"],["2018/02/26/Simple-Perceptron-using-Processing/index.html","d24e8c1f9a6dd73e16cf16f7285185a7"],["2018/02/27/Project-Euler-009/index.html","4292cbd35643e0cc789c70f810e68691"],["2018/02/28/Linear-Regression-in-JS/index.html","984dd656cf93ad39ca2313654931f86b"],["2018/03/01/LeetCode-Notes-003/index.html","7452db3a3f4f09683a17a3376cfe9861"],["2018/03/01/Project-Euler-010/index.html","5f1a5b86f6ff99ed89508957e63191cb"],["2018/03/01/Simple-Perceptron-using-Processing/index.html","64ebd69c6183e1895f6a232fc47bc430"],["2018/03/02/LeetCode-Notes-004/index.html","498044847abfb56ebdfcbc76aa07673a"],["2018/03/03/LeetCode-Notes-005/index.html","becbf47b49b6ee78782fee36910e8333"],["2018/03/04/LeetCode-Notes-006/index.html","e9028ff2540253de44dbd9d25d1b8638"],["2018/03/05/Project-Euler-011/index.html","53682f0fa7fbbe3c5bfdfbddab8d60f2"],["2018/03/06/LeetCode-Notes-007/index.html","c1c8d5e35eab83bf44fbaefb60f67a2c"],["2018/03/06/Slide demo/index.html","e82dfd6b8331f363ebb2a87b26f428c6"],["2018/03/07/Project-Euler-012/index.html","67ca8066eb1e4503190d551647c23391"],["2018/03/08/Project-Euler-013/index.html","9a4a79e55b7d8b2110fa3ccec2bb54cd"],["2018/03/09/Perceptrons-the-most-basic-form-of-a-neural-network/index.html","ecd83d0242e2fb8d92b2ac6d29b7f879"],["2018/03/09/Project-Euler-014/index.html","e855d229bb5fb6b87b22401ea6282674"],["2018/03/10/Project-Euler-015/index.html","f9025f5c2d991fedbc48f84477b41de0"],["2018/03/11/Project-Euler-016/index.html","65dd633c07739f948e9738ba6aae5294"],["2018/03/12/LeetCode-Notes-008/index.html","3506baae4a78a9e23d3aeab00798ce54"],["2018/03/12/Project-Euler-017/index.html","89dfbdcda45a85089cdf6d342df4bd21"],["2018/03/13/Project-Euler-018/index.html","312e5965795cd4667a4c8cc18ffc2179"],["2018/03/13/Project-Euler-019/index.html","815541a6f19d47215af2079ea00acbe3"],["2018/03/14/LeetCode-Notes-009/index.html","226c9e2d5f4bad10747cfca7a2d7efc7"],["2018/03/15/LeetCode-Notes-010/index.html","71a152ec7ada95b6fe558eb5133aef54"],["2018/03/16/LeetCode-Notes-011/index.html","adedb58431f467901b06773de8f9cfc0"],["2018/03/17/LeetCode-Notes-012/index.html","49e01f2746555bf5d309d3fcf52e7cc0"],["2018/03/17/LeetCode-Notes-013/index.html","ac242e318786a13da8cc2c4628f7da3f"],["2018/03/18/LeetCode-Notes-013/index.html","be153036d08904bcc86601d361600080"],["2018/03/19/LeetCode-Notes-014/index.html","9d8196390ae9693a1f1f97398d3d15a7"],["2018/03/20/LeetCode-Notes-015/index.html","efb57e786c3d0d5d025a07cc3f343c36"],["2018/03/21/LeetCode-Notes-016/index.html","792299fb1c6126eb73c1bc42770c0e92"],["2018/03/22/LeetCode-Notes-017/index.html","944d70acfedfa00aa98be94503885752"],["2018/03/23/LeetCode-Notes-018/index.html","cf7f6d130b8032c9abb3960132edfc8a"],["2018/03/24/LeetCode-Notes-019/index.html","4b60fb705099e8cb6a7b6267c37a6060"],["2018/03/25/LeetCode-Notes-020/index.html","2a9465643954dd82b217780cfe5f9cc4"],["2018/03/26/Simple-Implement-of-Spring-MVC/index.html","0c499706729bc1c63192472d32b7dee4"],["2018/03/29/Project-Euler-020/index.html","78bd0edd333ce1d4d736fb959e1a73d2"],["2018/03/30/LeetCode-Notes-009/index.html","64eee8803dfaff30d843bdfa98c40cba"],["2018/03/30/LeetCode-Notes-021/index.html","580dcd496189f7cb295ad5b466e082f5"],["2018/03/31/Project-Euler-021/index.html","3c3e3de8ae164f10d9aff41b1a8aaeff"],["2018/03/31/Project-Euler-022/index.html","7f81c983ba7607abd447d6aed286ddf6"],["2018/04/01/Reading-Challenge-April-2018/index.html","5b58909599dc3c4730ffd245ab75be79"],["2018/04/02/LeetCode-Notes-022/index.html","c21ccc006a8749bcfac7cd2a427ca4e3"],["2018/04/02/Project-Euler-022/index.html","2b821302102562506938b8b38070dae2"],["2018/04/03/Project-Euler-023/index.html","6bbe1c3a022dcc5312301209a4d49add"],["2018/04/04/LeetCode-Note-023/index.html","75b8267b94968cb0bcd9af05376ccb95"],["2018/04/04/LeetCode-Notes-023/index.html","fdfdaab37fca3895edf326574e394dfa"],["2018/04/05/LeetCode-Notes-024/index.html","85eb3a76744094af6fc64bcb31942e10"],["2018/04/06/LeetCode-Notes-025/index.html","e8b1f39d775da258d758f936293ec135"],["2018/04/06/Project-Euler-024/index.html","942640f413507563794d4f5d9f735595"],["2018/04/07/Perceptron-with-Margin/index.html","157e8692f5a5d21559cdd29e465706f1"],["2018/04/09/Perceptrons-the-most-basic-form-of-a-neural-network/index.html","7931eec7e95bdeabd7937231c12e60db"],["2018/04/09/Project-Euler-025/index.html","0b1c9530c78b6781dbd7ac95750aa99c"],["2018/04/11/Project-Euler-026/index.html","1f206dfb45ecf01518e85fc14e0d5b1d"],["2018/04/11/Project-Euler-027/index.html","91e24b0badb196fca188471034418a8d"],["2018/04/12/Project-Euler-028/index.html","9d5ef563be379091f5fdd2f2d84a5356"],["2018/04/13/ML-Lectures-Perceptron/index.html","845a63cd7af88f514e88a136979ee882"],["2018/04/13/Project-Euler-029/index.html","a4f994f6749aea053c80fe2b570c7199"],["2018/04/14/LeetCode-Notes-026/index.html","8b55bfaef72706b986b10f37d1336430"],["2018/04/20/LeetCode-Notes-027/index.html","4acb5e5cbd4d338bc9ab42d85cd4e8f0"],["2018/05/03/Vue中的双向数据绑定/index.html","b1689c10a804198dd9bb11c9c14bc2cc"],["2018/05/06/Promise版本的数组遍历/index.html","a6bde082e68115e136a12dc0019d7bbb"],["2018/05/16/Slide demo/index.html","59c31d90a47a9269736d2ac094343239"],["about/index.html","0f06ea035881d4e6f0debe01eaf67cc5"],["archives/2017/04/index.html","388de3acc41ef658a47943d38f4bc4a8"],["archives/2017/10/index.html","9d51e897670a390d89051ffa5f8c5cfa"],["archives/2017/11/index.html","04fd273a2dcdde530c899b717578c20d"],["archives/2017/11/page/2/index.html","52e3e101eba9a3bb381830ea1ed48d32"],["archives/2017/12/index.html","f137f316057efb79410011b8e052fd35"],["archives/2017/12/page/2/index.html","8ae6aad8d53b557cda318fb62a6fa7f2"],["archives/2017/12/page/3/index.html","a7f9ce13d70862362e084c0f9fe7f90c"],["archives/2017/12/page/4/index.html","da145ed2b2b23e2103108852cec1b6fe"],["archives/2017/12/page/5/index.html","47d79988c1989cd3c3aa271591922a52"],["archives/2017/index.html","f7d3d6a56a583d991ccbbe6825354039"],["archives/2017/page/2/index.html","faaccf71f8155349e816a600954e792a"],["archives/2017/page/3/index.html","967a8fbf5c2570a5e727250bc9ced0b9"],["archives/2017/page/4/index.html","458ae0842bfe473aa6285829408e28e9"],["archives/2017/page/5/index.html","e361d5b82c7952cbc860f98980f03768"],["archives/2017/page/6/index.html","aac10f679c977048949cb5e1d8eeaaab"],["archives/2017/page/7/index.html","f61199a9ab7d99f20344e757430921d2"],["archives/2018/02/index.html","9910a6b35277106e23884b00b1eac9bf"],["archives/2018/02/page/2/index.html","eb2158a06965663d5f099ec87698ef7b"],["archives/2018/02/page/3/index.html","683920ccec9a6f4547178210df9c3193"],["archives/2018/02/page/4/index.html","1c939780ffa3349493bfa583e5da8a35"],["archives/2018/03/index.html","80563c7151a709d1658bad2ebc5cb044"],["archives/2018/03/page/10/index.html","9970fe86770403216a3be934b01e0c77"],["archives/2018/03/page/11/index.html","9ce42bbfda35955349bacca1d5593f3f"],["archives/2018/03/page/2/index.html","a52d990da50e96e2748aca93f1a592cc"],["archives/2018/03/page/3/index.html","07d5eaadf11c750803509cccc717332f"],["archives/2018/03/page/4/index.html","7f87afaea6a48049337bd6ff59f594e2"],["archives/2018/03/page/5/index.html","29746f8b7a7ec34e5309e9117b2ec922"],["archives/2018/03/page/6/index.html","5e9a273176c448425d33e582193670a5"],["archives/2018/03/page/7/index.html","a6b8e58a890dd7140a18d1f8a0a43116"],["archives/2018/03/page/8/index.html","0af287728082bcd8f2e7e57cda74b0e3"],["archives/2018/03/page/9/index.html","f4e1aacf54ae82f3b4cbf3c69875972d"],["archives/2018/04/index.html","6c9428c3f2524b2d5b7eda2bd6ccf158"],["archives/2018/04/page/2/index.html","946f0212cf6843d3cefd2f7812eb70c6"],["archives/2018/04/page/3/index.html","6ebd839eb5ef230960109f3ea08a4214"],["archives/2018/05/index.html","994cf776478b14d8ca364e7e30eb010e"],["archives/2018/index.html","711298429b954cb81f7314f1aa2282dc"],["archives/2018/page/10/index.html","8ea4352e6586f7b37dbb9f3f45ede5ee"],["archives/2018/page/11/index.html","ea3ae882d7deeb7f378f873a7be8a0e2"],["archives/2018/page/12/index.html","833e41af131b32d41fbf5b5d0b2958ee"],["archives/2018/page/13/index.html","2ebdadacddbb6f57f43f6563e46d427a"],["archives/2018/page/14/index.html","caa4bd11fcea994d2f9b1f3cd2349b24"],["archives/2018/page/15/index.html","ec6a4d012831586b7f56fb1572446df9"],["archives/2018/page/2/index.html","eb8420ddec1a771c66558134d8c06fd0"],["archives/2018/page/3/index.html","ea8b78ca9322546319ed395573e53f5d"],["archives/2018/page/4/index.html","d5b53f3e300003713ab43dde5a5bd6c8"],["archives/2018/page/5/index.html","a9af8c7bfd2a3901cd96284c3421f16c"],["archives/2018/page/6/index.html","635010560601f35f8d9dc033c7dc0fa8"],["archives/2018/page/7/index.html","c624f95dad8bb81b0b74996e1ae159bd"],["archives/2018/page/8/index.html","273794a348df92310e65e56aca738f2d"],["archives/2018/page/9/index.html","4b78e78dea59a2de1f755552e8b35507"],["archives/index.html","f1a243419488835a99a6cca7751a0041"],["archives/page/10/index.html","69f5e636e9bb4b701699425ea7307994"],["archives/page/11/index.html","606535d5f58023929cb67d93567d9f2f"],["archives/page/12/index.html","579949fa8eaec3dc90e95003f57f675b"],["archives/page/13/index.html","107b27e18955af1dc20d7b27278ee212"],["archives/page/14/index.html","2834d193b9fa7a26805ba73e2c207b45"],["archives/page/15/index.html","f42e40ac30d3637ea1edc8c7e1a39381"],["archives/page/16/index.html","9b48812770a817130b1b74ebf59746fe"],["archives/page/17/index.html","a6aec995c500843da5a1c66b344b75fe"],["archives/page/18/index.html","7d3dc449cd27f057d10404b27d7b35f6"],["archives/page/19/index.html","c79f7cac855a69598f5905e0f89e63a4"],["archives/page/2/index.html","3693724eb261b08c82859ac4baf98b27"],["archives/page/20/index.html","20da17e206e6c7d996110e8f0498023b"],["archives/page/21/index.html","eab62e9c4fc0f044f2f3ef1787bafb7f"],["archives/page/22/index.html","df73ea74102de4f1986f217f0a1cb24d"],["archives/page/3/index.html","fa51e0acb56fd81dccb25e02c0b79634"],["archives/page/4/index.html","039699373d704d6b1ac06f8379287b3e"],["archives/page/5/index.html","c28166023c123e7275dcb6b6a332773d"],["archives/page/6/index.html","b4db2d2d67fbf60a724639272341c6c1"],["archives/page/7/index.html","5af3178c2a6a257e9591f6ae18be8c38"],["archives/page/8/index.html","8ae28afee7c4d201e422e95084a3dd8a"],["archives/page/9/index.html","1861ee29bb84e13a33b021cf830236d3"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/index.html","8419c4859e217b060a2bf719b7b092e9"],["css/index.css","d41d8cd98f00b204e9800998ecf8427e"],["css/main.css","aeb6f3736303081ba32e786507eb9370"],["css/style.css","7db8b8c4cef61c3fc09843ccab62b5ac"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["font/coveredbyyourgrace-webfont.eot","4e6c56beb324d6be3cfaf20f239c1e6e"],["font/coveredbyyourgrace-webfont.svg","90305a69b4632298bf8b4a273ffb8119"],["font/coveredbyyourgrace-webfont.ttf","0621a449356138817ff8e16cf5046a64"],["font/coveredbyyourgrace-webfont.woff","c04c2f5fa3220add6d590926d5d01b10"],["font/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["font/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["font/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["font/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["font/fontdiao.eot","bfc3bbc33eb59f2740df3f378eec1719"],["font/fontdiao.svg","e5fb14e75ddb588283c3be2696d33a35"],["font/fontdiao.ttf","590e30d2c52494739d0b22d31651e15a"],["font/fontdiao.woff","bdd0416608605b9077a512bb52c153f6"],["fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["fonts/iconfont.45d7ee.svg","45d7ee2dac9b3d44d52b84f8c8990053"],["fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["gallery/index.html","0af67477b39fb4e574ef025b6293705a"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/author.jpg","cd4a1d77a5b228644327258a8cdbe03c"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/banner.jpg","1f6c0e658ef3f6b95ad4302193747097"],["img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["img/jacman.jpg","af1e8f8b5882487e9ab4d992a4927c9e"],["img/logo.png","73bc2ebc907a36637d8c4ceba075a79f"],["img/logo.svg","940714a621cc13bcd3a614e56db2cefc"],["img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["img/scrollup.png","62ee33e63fd96a448fd125b0d1b7f6f7"],["index.html","f0ab549f75b62c27b97072890d97aa0e"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/jquery-2.0.3.min.js","58a97c2e2195fd1cd3c3055f5cc02d0f"],["js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["js/jquery.qrcode-0.12.0.min.js","ddb79e5abac8e281bbdd3cc48d8462cb"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/totop.js","a552c9f9bf6dceaf6347a5071082fe58"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["main.0cf68a.css","b9b1413784cad584eefbdf1c03117359"],["main.0cf68a.js","0431be007a34d1af67b5042cd398cc2a"],["mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["page/10/index.html","725e8ba6de123913680f8496e0c9ec2d"],["page/11/index.html","01d2433280c2f9397a44cffbfe6c3e2b"],["page/12/index.html","c7eb79d69e9bd056a3557038d2d01a93"],["page/13/index.html","b472df8f3be1e73a3964b02ac382046c"],["page/14/index.html","289149c7d40136aad92d8ec0896fc018"],["page/15/index.html","bb698d7cefcdec80ae4ba457e24ca9ec"],["page/16/index.html","cfdd0bb53ea3ab558f4ddac8cedf2668"],["page/17/index.html","6d42765ce3d5bd5e3aed5e7bf0bb7ff6"],["page/18/index.html","41b8bf54465f51f659b036c25d76cc18"],["page/19/index.html","2f25569f1d32865a13a2b780560b32df"],["page/2/index.html","c0d1505c50393086913085a4b778a00a"],["page/20/index.html","92815811fc587a7ec624c6ff87b2370d"],["page/21/index.html","d979de3bc72f7fd79dc68083d323a4b5"],["page/22/index.html","a0173cbb8a555d1e729fe3f6ddd23038"],["page/3/index.html","90ffd6a7a238f25853920816d82be254"],["page/4/index.html","7b807572e6abb285ea19fac28e3cfed2"],["page/5/index.html","08c23466235fd48f54888a99bf9559b6"],["page/6/index.html","9449a0cc20a6d42f2f7dc6a407601e56"],["page/7/index.html","3931d191110e16ea1648458412235edc"],["page/8/index.html","ba17dc035a436a4c0abed1582b162afd"],["page/9/index.html","42c4bd54a98d940cce8fbef74dae7e97"],["slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["slides/index.html","7ded3a360166e8c4dff1cf520b14c673"],["tags/ES6/index.html","c3a41fad500fc0ced9c56844415063cc"],["tags/Java/index.html","d501e75e25eb4249eda5fd9f98634f8e"],["tags/R/index.html","aa6f1c6fc31d5f0d55669ea4dfd052e7"],["tags/R/page/2/index.html","9b96618afb3421e8b63c66ba3ef95304"],["tags/computationa-method/index.html","29e93a19105238c2887cecdfe1289799"],["tags/computational-method/index.html","e35843d480aadaaef6d346fb3b05ffc3"],["tags/deep-learning/index.html","6508486e72e30a930f3991acb8224298"],["tags/dot/index.html","28a476c582a1050f82ae5dd7d77a079f"],["tags/euler/index.html","a7ab53d868980e114c5fb62ef27e1a02"],["tags/euler/page/2/index.html","b607f19bc90adbb4ecc53cc61a4ae0a5"],["tags/euler/page/3/index.html","3ed51ea2769a2b8149377269ffed4514"],["tags/euler/page/4/index.html","20705f2e9359e52666cb76b04ca30766"],["tags/euler/page/5/index.html","cff22a28083239f4c24a786541e96658"],["tags/euler/page/6/index.html","ee2833065817e289956abb80d947fc70"],["tags/euler/page/7/index.html","08eb0c41cc7248cb5e9fc776f3dfb6dd"],["tags/hexo/index.html","62917db00f8b4ee765a9024041684051"],["tags/index.html","897b6fdf64467cbde94fb1a49b5073d2"],["tags/java/index.html","76c3c3e671c636fd82c65c989d6c1e36"],["tags/javascript-leetcode/index.html","5689e82cc251c3428af59e50125c2982"],["tags/javascript/index.html","6b9675307b595042725361975ccb965f"],["tags/javascript/page/2/index.html","99bae8a2d34be3a825016832b46568c3"],["tags/javascript/page/3/index.html","0aeebcd55462e7b9818090c77f79bc3d"],["tags/javascript/page/4/index.html","3c2d30a1378de9cfe51150f5a4a32c84"],["tags/javascript/page/5/index.html","e4217b625133c36768bc982eee4dee09"],["tags/javascript/page/6/index.html","4a3ff9272f5a883e8e5470c7a45bdde4"],["tags/javascript/page/7/index.html","ea5e8841a37199094e6290e8d8a04869"],["tags/javascript/page/8/index.html","e4937027fb2328d1b13175ec76a2cd2d"],["tags/javascript/page/9/index.html","dcc2d300a0fadf03e1c795d40c016044"],["tags/julia/index.html","3c56ecfa8a419fc2ef30cf29c837d75c"],["tags/julia/page/2/index.html","1b1ba5eff8227f826fed91969e99893c"],["tags/julia/page/3/index.html","10e1e811fd4602872efa009a29fc51e2"],["tags/leetcode/index.html","66b7f6e754c73b6b8856178f7f0775a3"],["tags/leetcode/page/2/index.html","cdff53cd7e2742b2d6e82091731d2f64"],["tags/leetcode/page/3/index.html","b5615a0aa41501af883a35224f37343f"],["tags/leetcode/page/4/index.html","361eaa4c36c80d29992a4c9993735146"],["tags/leetcode/page/5/index.html","4070d0074b9efc060a112a7b309e73d2"],["tags/leetcode/page/6/index.html","3a4af5cfb307d5d2027f939e643cfd32"],["tags/leetcode/page/7/index.html","e3fd7571a967c163d5da34c5325ee1d9"],["tags/machine-learning/index.html","ce159f8795f4c40dfd609b67ffb4b81c"],["tags/multilingual/index.html","c2daeb5f95eb7bd5a9013b0a0f579416"],["tags/multilingual/page/2/index.html","a5b37d6dc46cccaa648c8a5a29c7f755"],["tags/multilingual/page/3/index.html","cb8a1896da863076f01196e219117230"],["tags/multilingual/page/4/index.html","146d60b29a72361899769af475f83468"],["tags/multilingual/page/5/index.html","a2fbf4fca1886a1632e033b8cefabd77"],["tags/multilingual/page/6/index.html","d27d10e088827a8f8b680ed89514d463"],["tags/multilingual/page/7/index.html","2d260502b359b056c810875176577a84"],["tags/p5js/index.html","08b20db6f8ba60e0252c9153a4a01b95"],["tags/perceptron/index.html","52e6c62e2dda10e01c4c6ed7bce81d81"],["tags/processing/index.html","1fb31e7ff33461108473b9c13a078c20"],["tags/python/index.html","a3898672a30418c3a81e9c5bfdc8879e"],["tags/r/index.html","c632c9b9885f8f51285606dc39ad3662"],["tags/r/page/2/index.html","40f8eb905ed6c73cd75e159f968ccbc9"],["tags/reading/index.html","8e466d580e4b43728abba4ff4a7ffd7d"],["tags/statistic/index.html","b87b74ae9288c88c1ad51d2d2f6e032a"],["tags/statistics/index.html","0921f7c4d9cf8021068bef4f45957cbf"],["tags/statistics/page/2/index.html","b29561ad440f6aad6e69b2f9b2b3e9b7"],["tags/vue/index.html","69d62b088e53731378f1042e64a030b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







