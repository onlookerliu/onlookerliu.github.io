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

var precacheConfig = [["2017/04/04/Numerical-Examples-in-Java/index.html","27850feb51b775e8aa2d59aad50f29c1"],["2017/10/30/Assignment-1-of-Advanced-Computational-Method/index.html","8b888ee4390085ac8728ca942cdd75ca"],["2017/11/03/Project-1-of-Statistics-md/index.html","298c55acd86aed3f01b1b3fe4cac2b5c"],["2017/11/03/Project-1-of-Statistics/index.html","e3fda9165d0ecd60af8d09ffa8438923"],["2017/11/14/Assignment-2-of-Advanced-Computational-Method/index.html","f6df5f7bd9a09e08b7db691b801f7f1a"],["2017/11/17/Project-2-of-Statistics-md/index.html","c12ce59c1a2561a8611ec3349658dbe5"],["2017/11/17/Project-2-of-Statistics/index.html","0b59aee2505e1039f63d4df4d6fe13ad"],["2017/11/29/julia基于GLM包的线性回归/index.html","85a5939bd3f8c7a1fdcb5fbf54b98000"],["2017/12/01/Project-3-of-Statistics-md/index.html","9ca688a45a3c9c80472af0d1f5104475"],["2017/12/01/Project-3-of-Statistics/index.html","86cc4cf551fbc43453b5ff90c4f379c8"],["2017/12/15/Project-4-of-Statistics-md/index.html","a0493cfd96770e893e2099706b95a1a7"],["2017/12/15/Project-4-of-Statistics/index.html","b10fd85fa00cde25754607614c0a10c0"],["2017/12/25/30-seconds-of-code/index.html","ea4aabc145b5f9c27686c6861c02545b"],["2017/12/27/30-seconds-of-code/index.html","2600f763898873e02df10ba0f71d8af9"],["2017/12/27/剑指offer-JavaScript版I/index.html","45b67490533dfafb20b16e548629a35b"],["2017/12/27/剑指offer-JavaScript版II/index.html","89e14fcb8c98f5cb7d2b29c44a6405f5"],["2017/12/27/剑指offer-JavaScript版III/index.html","a4809b18aec2847efda4b8e5f372b3de"],["2017/12/28/LeetCode-Notes-001/index.html","24a4c1d7983c14a81618bd41d51e4599"],["2017/12/28/dot语法总结/index.html","db9d83886c0857c5d7cc058a90ef7d67"],["2017/12/29/A-simple-Metropolis-Hastings-MCMC-in-R/index.html","f138f0f40070c3a4a6aacce95472c2af"],["2017/12/29/Classifier-Comparison/index.html","842d22322374d0522d7b9211e6242be8"],["2017/12/29/Clustering-Comparison/index.html","d189f5a9a78ce5cdf0324a7102cc8118"],["2017/12/29/Cross-Validated-Predictions/index.html","5149822126d6c2e704456740c96c6d65"],["2017/12/29/DataFrame-Demo/index.html","d120c9fa924bcae624ee0d43aba15723"],["2017/12/29/Decision-Tree-Regression/index.html","f1e59f6c4977917fe249855c90c15ca0"],["2017/12/30/LeetCode-Notes-002/index.html","d3aeab239a315c3221ed905aeea8b61f"],["2018/02/08/Project-Euler-001/index.html","1b01e21104d8c141287d1d8f1db4f2ca"],["2018/02/09/Project-Euler-002/index.html","347773db8ae9b653b97c826a7e1d1c58"],["2018/02/10/Project-Euler-003/index.html","d0feb9d3f49f09f7a2c95d17b34830ca"],["2018/02/11/Project-Euler-004/index.html","1d7d39f5a042283f2ae7b6212b773495"],["2018/02/12/Project-Euler-005/index.html","4d3acf6d0e6cee021dbf741f163a5982"],["2018/02/13/Project-Euler-006/index.html","846239f5721f066b122cc3302acf18f5"],["2018/02/14/Project-Euler-007/index.html","1d80f57123e586802d2a1bd462fccfea"],["2018/02/14/Project-Euler-008/index.html","5bf0de4613a6dccb06317de6c85751a5"],["2018/02/23/Linear-Regression-in-JS/index.html","a4b355c89c4c9958b3ddfb27b9056957"],["2018/02/26/Simple-Perceptron-using-Processing/index.html","ddcb7b7cc018dcc8b5078e5b48ede983"],["2018/02/27/Project-Euler-009/index.html","ea8b053515fbfbd12a7feca282c9fd2e"],["2018/02/28/Linear-Regression-in-JS/index.html","984dd656cf93ad39ca2313654931f86b"],["2018/03/01/LeetCode-Notes-003/index.html","9318f0d0cdc34004fdfa6f69a6e4bd97"],["2018/03/01/Project-Euler-010/index.html","6ce714c41c4eb64cb7ec707fc82213af"],["2018/03/01/Simple-Perceptron-using-Processing/index.html","64ebd69c6183e1895f6a232fc47bc430"],["2018/03/02/LeetCode-Notes-004/index.html","dcfd823053a560839d0f59535a98db60"],["2018/03/03/LeetCode-Notes-005/index.html","a06948ea523d8fef41810e433c44bcd1"],["2018/03/04/LeetCode-Notes-006/index.html","807e8167e6134a12d9d1c78cbce1cecc"],["2018/03/05/Project-Euler-011/index.html","41e2099fffec7e43b1976418f9fbb102"],["2018/03/06/LeetCode-Notes-007/index.html","de0bf2110ac37b65c0c87cd3f586dd38"],["2018/03/06/Slide demo/index.html","e82dfd6b8331f363ebb2a87b26f428c6"],["2018/03/07/Project-Euler-012/index.html","bdbc0a9774b14967a701dff1e133ed37"],["2018/03/08/Project-Euler-013/index.html","284a77d01266d1136f67b4dae2cc5382"],["2018/03/09/Perceptrons-the-most-basic-form-of-a-neural-network/index.html","a09981df4a60762e0eac616acd272271"],["2018/03/09/Project-Euler-014/index.html","f009d7ab02200cd61050bd0bc54e8c69"],["2018/03/10/Project-Euler-015/index.html","6cda59f211f598750e2bd9b864448edc"],["2018/03/11/Project-Euler-016/index.html","7c36297c9ed2e79c5dd07264973f1bf4"],["2018/03/12/LeetCode-Notes-008/index.html","27cc6d10aceff265e7cbb0d0658e79cd"],["2018/03/12/Project-Euler-017/index.html","649679a03a63c6aaa721eb85a21f383c"],["2018/03/13/Project-Euler-018/index.html","0c97cc56bf84b9f1454110ea0f6f6c40"],["2018/03/13/Project-Euler-019/index.html","f2c49e1fb14672a1d4009ecf811b4750"],["2018/03/14/LeetCode-Notes-009/index.html","c95a869b4b41b420b90b955ca51b2cbd"],["2018/03/15/LeetCode-Notes-010/index.html","7abee360c998a44ddc312b4424763363"],["2018/03/16/LeetCode-Notes-011/index.html","230b91e85807fee14f2e9bef6b98b563"],["2018/03/17/LeetCode-Notes-012/index.html","af52f9e57fced12c554cce1bfac11dbb"],["2018/03/17/LeetCode-Notes-013/index.html","ac242e318786a13da8cc2c4628f7da3f"],["2018/03/18/LeetCode-Notes-013/index.html","b1d8e298a97d685ecdfac6b7bf8115e3"],["2018/03/19/LeetCode-Notes-014/index.html","ffde66ba89e4d711b6bc1f387956fccd"],["2018/03/20/LeetCode-Notes-015/index.html","54387a5ad8f1bc2dfe110bc55df106de"],["2018/03/21/LeetCode-Notes-016/index.html","19f3638875b61b0c3fcccfb4199270df"],["2018/03/22/LeetCode-Notes-017/index.html","572985573d2e29af73f823d492a2eed7"],["2018/03/23/LeetCode-Notes-018/index.html","b7344e86891b6b0df7d823de70173b65"],["2018/03/24/LeetCode-Notes-019/index.html","ce18b95939ad4c7f9793f3f7c92dfc12"],["2018/03/25/LeetCode-Notes-020/index.html","9258a48351c302f8a83d64417259d841"],["2018/03/26/Simple-Implement-of-Spring-MVC/index.html","7e4ddd9e60924487579e0bdd1f5afcb0"],["2018/03/29/Project-Euler-020/index.html","8f765b0779fc6c4c6aae40525b151b6a"],["2018/03/30/LeetCode-Notes-009/index.html","64eee8803dfaff30d843bdfa98c40cba"],["2018/03/30/LeetCode-Notes-021/index.html","61dec3b8781b75a32c74218ada313985"],["2018/03/31/Project-Euler-021/index.html","7de49f320f9d4b2cfbbda1aab5f2134c"],["2018/03/31/Project-Euler-022/index.html","7f81c983ba7607abd447d6aed286ddf6"],["2018/04/01/Reading-Challenge-April-2018/index.html","9e4c6d80ac904d15be3ee28d25c38671"],["2018/04/02/LeetCode-Notes-022/index.html","8f62446e1d788d438c8adaa1aa4343bd"],["2018/04/02/Project-Euler-022/index.html","984f79a32247ee490814219790cf0783"],["2018/04/03/Project-Euler-023/index.html","224fce54a6ca5849466fd16cd3fbd646"],["2018/04/04/LeetCode-Note-023/index.html","75b8267b94968cb0bcd9af05376ccb95"],["2018/04/04/LeetCode-Notes-023/index.html","1adca6baca4cdaf5057f2aa8f61badb6"],["2018/04/05/LeetCode-Notes-024/index.html","aed95ee78c968202e90debbe39030d2a"],["2018/04/06/LeetCode-Notes-025/index.html","2d3e3968e91d1053daea801ccdb05bc3"],["2018/04/06/Project-Euler-024/index.html","10b8bd85b8b89b5f07a1fa04d5cd9037"],["2018/04/07/Perceptron-with-Margin/index.html","36ae053db0ef8c27ff79ddd707d4a5b2"],["2018/04/09/Perceptrons-the-most-basic-form-of-a-neural-network/index.html","7931eec7e95bdeabd7937231c12e60db"],["2018/04/09/Project-Euler-025/index.html","066b9e974e5eb6e6d8b13683284565f6"],["2018/04/11/Project-Euler-026/index.html","6b29945f99edffac4cb168fc46d0a340"],["2018/04/11/Project-Euler-027/index.html","701217d10018c141ce0659d8197d96dc"],["2018/04/12/Project-Euler-028/index.html","a85ce78c510a72c8be2aaac5845b4dbb"],["2018/04/13/ML-Lectures-Perceptron/index.html","3751003c30fb1279ef0fcae03e85425a"],["2018/04/13/Project-Euler-029/index.html","846dfcaf2a5a5e46e60b870e8d269144"],["2018/04/14/LeetCode-Notes-026/index.html","44fcdcb9fea1a30ae429836ebfaf80d7"],["2018/04/20/LeetCode-Notes-027/index.html","31044d1ec1843f147e4bf748c4874c88"],["2018/04/22/LeetCode-Notes-028/index.html","88ed90c1803defcc307936d50d6fabbb"],["2018/05/03/Vue中的双向数据绑定/index.html","8c43ec1394331765f1cfeb171bacc10d"],["2018/05/06/Promise版本的数组遍历/index.html","c916035c5c75612100d639b79a397b22"],["2018/05/16/Slide demo/index.html","59c31d90a47a9269736d2ac094343239"],["about/index.html","e5bfbf82b70049513227bef395b55983"],["archives/2017/04/index.html","f2955620a78e57cf62de3fa28d449aa9"],["archives/2017/10/index.html","2af214783b8fdf222226a2e459c7fe25"],["archives/2017/11/index.html","656e7682ac47799691743a34b6a417d4"],["archives/2017/11/page/2/index.html","52e3e101eba9a3bb381830ea1ed48d32"],["archives/2017/12/index.html","76ab127c988714dca0fe56807a376686"],["archives/2017/12/page/2/index.html","f060e43e6f028a6d76e5528e460080d6"],["archives/2017/12/page/3/index.html","d6250c3207294a1b4e024f8bd504409b"],["archives/2017/12/page/4/index.html","da145ed2b2b23e2103108852cec1b6fe"],["archives/2017/12/page/5/index.html","47d79988c1989cd3c3aa271591922a52"],["archives/2017/index.html","e7ff10d85da069f978e8a02dc84655d2"],["archives/2017/page/2/index.html","318974240e405a21b7703977ae33ab39"],["archives/2017/page/3/index.html","863e94cb6184ead37020e2e37417a1ea"],["archives/2017/page/4/index.html","e041b1fbb01fa56187d0d59e3c476d89"],["archives/2017/page/5/index.html","e361d5b82c7952cbc860f98980f03768"],["archives/2017/page/6/index.html","aac10f679c977048949cb5e1d8eeaaab"],["archives/2017/page/7/index.html","f61199a9ab7d99f20344e757430921d2"],["archives/2018/02/index.html","f924eabe62e1c0b29fa220fc6cfd71a5"],["archives/2018/02/page/2/index.html","9481be7db6a00e48bbe2beb4dccc58e7"],["archives/2018/02/page/3/index.html","683920ccec9a6f4547178210df9c3193"],["archives/2018/02/page/4/index.html","1c939780ffa3349493bfa583e5da8a35"],["archives/2018/03/index.html","59f58d248a7f3c7d20d5eba16bc7a8ee"],["archives/2018/03/page/10/index.html","9970fe86770403216a3be934b01e0c77"],["archives/2018/03/page/11/index.html","9ce42bbfda35955349bacca1d5593f3f"],["archives/2018/03/page/2/index.html","26994526cbfc69ae9397dcb9e55dab70"],["archives/2018/03/page/3/index.html","88361de34c418c36f2a65e43b18dd157"],["archives/2018/03/page/4/index.html","92f1b6c081c96b353a8f7f6b4ed75cfa"],["archives/2018/03/page/5/index.html","ff53b435ddca43f2c617d9c30ab99213"],["archives/2018/03/page/6/index.html","a0c7abfca95548b69d26e8d6d66d9c04"],["archives/2018/03/page/7/index.html","a6b8e58a890dd7140a18d1f8a0a43116"],["archives/2018/03/page/8/index.html","0af287728082bcd8f2e7e57cda74b0e3"],["archives/2018/03/page/9/index.html","f4e1aacf54ae82f3b4cbf3c69875972d"],["archives/2018/04/index.html","8216dd6af6311e8bebb3a441ae34a5d4"],["archives/2018/04/page/2/index.html","bc56b4e5e6b04753d88446467914d53d"],["archives/2018/04/page/3/index.html","de6f0406b46b470d10be27f364d4a707"],["archives/2018/05/index.html","7a860588eafd88e656da1ec74050f742"],["archives/2018/index.html","671f6dca1fb1c2a3a9bf023ae680c509"],["archives/2018/page/10/index.html","54c068cfec2b6953bf21e7b8617687e9"],["archives/2018/page/11/index.html","fb90f05dae5195b8b6e576b2dafa7e3a"],["archives/2018/page/12/index.html","833e41af131b32d41fbf5b5d0b2958ee"],["archives/2018/page/13/index.html","2ebdadacddbb6f57f43f6563e46d427a"],["archives/2018/page/14/index.html","caa4bd11fcea994d2f9b1f3cd2349b24"],["archives/2018/page/15/index.html","ec6a4d012831586b7f56fb1572446df9"],["archives/2018/page/2/index.html","db0b74aa157a66f1906c37d42ab8cf51"],["archives/2018/page/3/index.html","b3dbc9c8e19a8174c4bdcce44023b792"],["archives/2018/page/4/index.html","9c862a01f7f0ac2e977a745c781a4ca9"],["archives/2018/page/5/index.html","05fc895d6993bc277a9e0e6efb8148fc"],["archives/2018/page/6/index.html","46bae047451f2c7c13a663994d551f18"],["archives/2018/page/7/index.html","29bba1736736066cd1f391523e771f84"],["archives/2018/page/8/index.html","6c2687cafffd2b967ef0d9551ee71089"],["archives/2018/page/9/index.html","c0c078bc7e168ca941383b08c2d14809"],["archives/index.html","fcd0563de011ec239333c6d41a91f83c"],["archives/page/10/index.html","f356542f12b8558cf485f4494c98a157"],["archives/page/11/index.html","8e809762f8625814e22b3a3538463061"],["archives/page/12/index.html","28f0c863e1fb9882411b5e608858157b"],["archives/page/13/index.html","82bc6bd237bdbb45c3fd7c1c1b412824"],["archives/page/14/index.html","fe81621d256dcca4664d43429f7e3cff"],["archives/page/15/index.html","d8d57613438ac61d22f396fe3f10f2b4"],["archives/page/16/index.html","9b48812770a817130b1b74ebf59746fe"],["archives/page/17/index.html","a6aec995c500843da5a1c66b344b75fe"],["archives/page/18/index.html","7d3dc449cd27f057d10404b27d7b35f6"],["archives/page/19/index.html","c79f7cac855a69598f5905e0f89e63a4"],["archives/page/2/index.html","f29a42ff747caaf88b76f2c7a1b91192"],["archives/page/20/index.html","20da17e206e6c7d996110e8f0498023b"],["archives/page/21/index.html","eab62e9c4fc0f044f2f3ef1787bafb7f"],["archives/page/22/index.html","df73ea74102de4f1986f217f0a1cb24d"],["archives/page/3/index.html","05d04194ca4e74e2aa17b4bb318fdde9"],["archives/page/4/index.html","ba99563dbbab32a95b514f17ecd9d89b"],["archives/page/5/index.html","dbbb773db63662d7164db9c44eba80d5"],["archives/page/6/index.html","b032bc0166ccbabf66eae83dd3f8bb9f"],["archives/page/7/index.html","e1bcb245318c9fd9e6eba3af5a87ba22"],["archives/page/8/index.html","7bb4c744cdd6125f3f355eefd669a92d"],["archives/page/9/index.html","ffd6032c704cfb9b6d1a194b52bfa481"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/index.html","5a290bb2fe4f4fb52ada943a5ff411c5"],["css/index.css","684347f4a908c72e8cd0cb9677cbdb52"],["css/main.css","aeb6f3736303081ba32e786507eb9370"],["css/style.css","7db8b8c4cef61c3fc09843ccab62b5ac"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["font/coveredbyyourgrace-webfont.eot","4e6c56beb324d6be3cfaf20f239c1e6e"],["font/coveredbyyourgrace-webfont.svg","90305a69b4632298bf8b4a273ffb8119"],["font/coveredbyyourgrace-webfont.ttf","0621a449356138817ff8e16cf5046a64"],["font/coveredbyyourgrace-webfont.woff","c04c2f5fa3220add6d590926d5d01b10"],["font/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["font/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["font/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["font/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["font/fontdiao.eot","bfc3bbc33eb59f2740df3f378eec1719"],["font/fontdiao.svg","e5fb14e75ddb588283c3be2696d33a35"],["font/fontdiao.ttf","590e30d2c52494739d0b22d31651e15a"],["font/fontdiao.woff","bdd0416608605b9077a512bb52c153f6"],["fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["fonts/iconfont.45d7ee.svg","45d7ee2dac9b3d44d52b84f8c8990053"],["fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["gallery/index.html","21b0675a9906339a9322acbe8ed2413e"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/author.jpg","cd4a1d77a5b228644327258a8cdbe03c"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/banner.jpg","1f6c0e658ef3f6b95ad4302193747097"],["img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["img/jacman.jpg","af1e8f8b5882487e9ab4d992a4927c9e"],["img/logo.png","73bc2ebc907a36637d8c4ceba075a79f"],["img/logo.svg","940714a621cc13bcd3a614e56db2cefc"],["img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["img/scrollup.png","62ee33e63fd96a448fd125b0d1b7f6f7"],["index.html","d2a6df7455a26b78889b9ec9bcf9a678"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/jquery-2.0.3.min.js","58a97c2e2195fd1cd3c3055f5cc02d0f"],["js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["js/jquery.qrcode-0.12.0.min.js","ddb79e5abac8e281bbdd3cc48d8462cb"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/totop.js","a552c9f9bf6dceaf6347a5071082fe58"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["main.0cf68a.css","b9b1413784cad584eefbdf1c03117359"],["main.0cf68a.js","0431be007a34d1af67b5042cd398cc2a"],["mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["page/10/index.html","2175dc84965c979ee7a5a44c432d2db2"],["page/11/index.html","1b67d619d25b57948802923eae4e8abb"],["page/12/index.html","8f1822cdbe1ceb734a0a54a2920da76c"],["page/13/index.html","6bedb8ba23d9060a6f97ebc6682c3457"],["page/14/index.html","2b44646260c5b9363863e419062a261a"],["page/15/index.html","27420d12080c271b7183c1bf8ea526a9"],["page/16/index.html","cfdd0bb53ea3ab558f4ddac8cedf2668"],["page/17/index.html","6d42765ce3d5bd5e3aed5e7bf0bb7ff6"],["page/18/index.html","41b8bf54465f51f659b036c25d76cc18"],["page/19/index.html","2f25569f1d32865a13a2b780560b32df"],["page/2/index.html","759b3b12fa02fd2a461846297782e3c8"],["page/20/index.html","92815811fc587a7ec624c6ff87b2370d"],["page/21/index.html","d979de3bc72f7fd79dc68083d323a4b5"],["page/22/index.html","a0173cbb8a555d1e729fe3f6ddd23038"],["page/3/index.html","1be10381bf6ee6f23eb951e779781949"],["page/4/index.html","a4dbb301491715c7e289e0fd936af098"],["page/5/index.html","332e41e8fee9180033ba4b68bfbd8871"],["page/6/index.html","cd0b2dc08accb50a1eb23ea840e945c5"],["page/7/index.html","73213c254f17876f094e836f40d748be"],["page/8/index.html","7b8c371a49ff2d6248ed0026def060da"],["page/9/index.html","86d7910b9d324ac3b349f305d705761e"],["slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["slides/index.html","bd2fa458f366fa610c64c0dfd16a5162"],["tags/ES6/index.html","b91aa20b23f8069036685fbe6402a37f"],["tags/Java/index.html","516141ff09b1651c59ea0f0a2e687698"],["tags/R/index.html","aa6f1c6fc31d5f0d55669ea4dfd052e7"],["tags/R/page/2/index.html","9b96618afb3421e8b63c66ba3ef95304"],["tags/computationa-method/index.html","29e93a19105238c2887cecdfe1289799"],["tags/computational-method/index.html","a893a2445d84e8458ea25e87db3df9b9"],["tags/deep-learning/index.html","690f0f82e67a3bf6f17e0e893600c32d"],["tags/dot/index.html","fdf61955592ca2d36e8ff875095a5db9"],["tags/euler/index.html","8c2976de1fce24c9168eea2e7ffe6362"],["tags/euler/page/2/index.html","32a336cdc6136704882c2d4f616dfd5d"],["tags/euler/page/3/index.html","ae94d292aa6151fcef58dc0d012658bf"],["tags/euler/page/4/index.html","71bf7a434634cb0e28857985b7195a3f"],["tags/euler/page/5/index.html","d54d8295a77ff290623fc76b12c9839d"],["tags/euler/page/6/index.html","ee2833065817e289956abb80d947fc70"],["tags/euler/page/7/index.html","08eb0c41cc7248cb5e9fc776f3dfb6dd"],["tags/hexo/index.html","9ffd29e53fea1df576ccd49483eab178"],["tags/index.html","b3c209169564abb999f23010916e4180"],["tags/java/index.html","76c3c3e671c636fd82c65c989d6c1e36"],["tags/javascript-leetcode/index.html","5689e82cc251c3428af59e50125c2982"],["tags/javascript/index.html","6e03a779fa06e9c8ec0ffd429aecd489"],["tags/javascript/page/2/index.html","1b389b3ce2b457817d52211c151be736"],["tags/javascript/page/3/index.html","e87a3f963556295a32c8e8aa4871ad81"],["tags/javascript/page/4/index.html","deb822467b814bedc4ece2a5b7434fbf"],["tags/javascript/page/5/index.html","b9ded46d37df545a26222d634fb27551"],["tags/javascript/page/6/index.html","b7392f7ad10625d6acb9dbd82170a40c"],["tags/javascript/page/7/index.html","ea5e8841a37199094e6290e8d8a04869"],["tags/javascript/page/8/index.html","e4937027fb2328d1b13175ec76a2cd2d"],["tags/javascript/page/9/index.html","dcc2d300a0fadf03e1c795d40c016044"],["tags/julia/index.html","1f322de4e72989269b33ccc57bd02683"],["tags/julia/page/2/index.html","69c06b297686836cdcad19dcbb895f19"],["tags/julia/page/3/index.html","10e1e811fd4602872efa009a29fc51e2"],["tags/leetcode/index.html","6206231c91285ae3881e7102b8a7bf07"],["tags/leetcode/page/2/index.html","86b02b321e8af35705af4835777f5432"],["tags/leetcode/page/3/index.html","dd953dcfaa4caed71d0a97077117c68b"],["tags/leetcode/page/4/index.html","98344a6d6eaf6ddf25dc5b19cbe319b9"],["tags/leetcode/page/5/index.html","f00414a0aada6d5bb3600369311cc885"],["tags/leetcode/page/6/index.html","3a4af5cfb307d5d2027f939e643cfd32"],["tags/leetcode/page/7/index.html","e3fd7571a967c163d5da34c5325ee1d9"],["tags/machine-learning/index.html","78a1b6600a933b1abfb5ad1b11310d1f"],["tags/multilingual/index.html","26075fa5648e2b2a95ea8c969b67540a"],["tags/multilingual/page/2/index.html","2019307655fd35eaf0144004395fec9d"],["tags/multilingual/page/3/index.html","1d34986d748109b9cd122aa4ccba6410"],["tags/multilingual/page/4/index.html","dcc78c34f4d8d8942c44c8c07f1b89b4"],["tags/multilingual/page/5/index.html","acbdadc80aaf1ff8e388cfde00d36bef"],["tags/multilingual/page/6/index.html","d27d10e088827a8f8b680ed89514d463"],["tags/multilingual/page/7/index.html","2d260502b359b056c810875176577a84"],["tags/p5js/index.html","a0b7d4f7b2a6f5f13144391395325c01"],["tags/perceptron/index.html","5749c8e50b000e635b3291745cdb7958"],["tags/processing/index.html","27b081ad36622cb4030b04d17bc5305e"],["tags/python/index.html","7ccc1149334960cced6d5699da69bab7"],["tags/r/index.html","6e96c1fb41e7d51051bf48d1e90c8da8"],["tags/r/page/2/index.html","40f8eb905ed6c73cd75e159f968ccbc9"],["tags/reading/index.html","a0ea5ba273f0b681b26bb108aa6f2d11"],["tags/statistic/index.html","10c99b88df47e633ae23c60a0d1002db"],["tags/statistics/index.html","a726d6301cacd321005d1ee5e97eb2d0"],["tags/statistics/page/2/index.html","b29561ad440f6aad6e69b2f9b2b3e9b7"],["tags/vue/index.html","26e0bcc26a58e2b1490328a07d247329"]];
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







