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

var precacheConfig = [["2017/04/04/Numerical-Examples-in-Java/index.html","0653877286d60f601384ef7063131953"],["2017/10/30/Assignment-1-of-Advanced-Computational-Method/index.html","d07c22ba27b42686a551e3757abc860a"],["2017/11/03/Project-1-of-Statistics-md/index.html","298c55acd86aed3f01b1b3fe4cac2b5c"],["2017/11/03/Project-1-of-Statistics/index.html","0c9654868c947008dede8ae17b3feb21"],["2017/11/14/Assignment-2-of-Advanced-Computational-Method/index.html","1c31a5a2e035f43ffd7085f6ce84eeb3"],["2017/11/17/Project-2-of-Statistics-md/index.html","c12ce59c1a2561a8611ec3349658dbe5"],["2017/11/17/Project-2-of-Statistics/index.html","445a9dfb9b6fbe5bfb21b1b12a60a036"],["2017/11/29/julia基于GLM包的线性回归/index.html","8cb8cdd2d83dedc6a3d7428d2ce1281f"],["2017/12/01/Project-3-of-Statistics-md/index.html","9ca688a45a3c9c80472af0d1f5104475"],["2017/12/01/Project-3-of-Statistics/index.html","dc64c3a249d1843dc1a05e860bb14c3b"],["2017/12/15/Project-4-of-Statistics-md/index.html","a0493cfd96770e893e2099706b95a1a7"],["2017/12/15/Project-4-of-Statistics/index.html","aba109565fd7d8fde81359fa31ad4947"],["2017/12/25/30-seconds-of-code/index.html","0b0af2fc42f4247bdad86919dfd9a275"],["2017/12/27/30-seconds-of-code/index.html","2600f763898873e02df10ba0f71d8af9"],["2017/12/27/剑指offer-JavaScript版I/index.html","df6e987ec96c5810acaf2970aca60694"],["2017/12/27/剑指offer-JavaScript版II/index.html","4d8b66c2c10cf383921a968a4b1cce9f"],["2017/12/27/剑指offer-JavaScript版III/index.html","e877fa9f4374823ba3f29320d5a52a2e"],["2017/12/28/LeetCode-Notes-001/index.html","2f1de8a5491e27674a367c87c9e1ce68"],["2017/12/28/dot语法总结/index.html","356d5339d981ee181f148d67d6c02dcc"],["2017/12/29/A-simple-Metropolis-Hastings-MCMC-in-R/index.html","4c64e1f7297c18dee9ee5b420c67a0e4"],["2017/12/29/Classifier-Comparison/index.html","8e9f2d6a8f86479d0a03ab6edc8d48f4"],["2017/12/29/Clustering-Comparison/index.html","7dd4b8f44b5eedef99aae265e534dcbc"],["2017/12/29/Cross-Validated-Predictions/index.html","c6f5b4f1e7c0635ebd4ad28870ce5eda"],["2017/12/29/DataFrame-Demo/index.html","e162a702048970ca03449884eca8e05c"],["2017/12/29/Decision-Tree-Regression/index.html","3a8d27b167e17d7781a6dd51bc43ed06"],["2017/12/30/LeetCode-Notes-002/index.html","e3d9bdeed16438d81a50158ad50e9a28"],["2018/02/08/Project-Euler-001/index.html","7788f7581820a81f0ee0c7cad4e58837"],["2018/02/09/Project-Euler-002/index.html","28bb2135d2621b522a783164c5ef732c"],["2018/02/10/Project-Euler-003/index.html","78da5bcd16d8cd2b410ebed207ca8825"],["2018/02/11/Project-Euler-004/index.html","a775ee8d43b567d05d8ebf1566912d8a"],["2018/02/12/Project-Euler-005/index.html","f8e50c03cf276985f4c050452594bfb9"],["2018/02/13/Project-Euler-006/index.html","b71c1e897ca4e926f8d1115461926d67"],["2018/02/14/Project-Euler-007/index.html","ab24df7e6fba9aa31d3cb9f054acc14b"],["2018/02/14/Project-Euler-008/index.html","a6bf0ce55bc95bfc0eb874b35c4939a7"],["2018/02/23/Linear-Regression-in-JS/index.html","2534be31f6c78c07a512434b68dd9e72"],["2018/02/26/Simple-Perceptron-using-Processing/index.html","2d6551d1cb7b2f9c5fff35afa184d4fc"],["2018/02/27/Project-Euler-009/index.html","dd7368405f07cddc96a91a09a35f1c7a"],["2018/02/28/Linear-Regression-in-JS/index.html","984dd656cf93ad39ca2313654931f86b"],["2018/03/01/LeetCode-Notes-003/index.html","4294f878a155c61a7c347cbff847234e"],["2018/03/01/Project-Euler-010/index.html","5085ead44a621c6373106f9e51016072"],["2018/03/01/Simple-Perceptron-using-Processing/index.html","64ebd69c6183e1895f6a232fc47bc430"],["2018/03/02/LeetCode-Notes-004/index.html","c08541f36b49ffea3569ab77fca99d04"],["2018/03/03/LeetCode-Notes-005/index.html","c6c11a36b543b3babb1d33b017ab3055"],["2018/03/04/LeetCode-Notes-006/index.html","67ac8918e06ffcc025c729db80d95722"],["2018/03/05/Project-Euler-011/index.html","af2ef5841173e78d2769c3eb8642943a"],["2018/03/06/LeetCode-Notes-007/index.html","534320c6dd71ddeaedc395ecb1fb60d2"],["2018/03/06/Slide demo/index.html","e82dfd6b8331f363ebb2a87b26f428c6"],["2018/03/07/Project-Euler-012/index.html","8ddbc37c64cf2d66b24ac5bf80e0a299"],["2018/03/08/Project-Euler-013/index.html","40d458875edd0627fac4567bf29ba96e"],["2018/03/09/Perceptrons-the-most-basic-form-of-a-neural-network/index.html","5ef1830486c527067e9d82da06f36e69"],["2018/03/09/Project-Euler-014/index.html","73820f03efcf808c6688abdda7ced2e0"],["2018/03/10/Project-Euler-015/index.html","f76262e748670b26198d7694063223fa"],["2018/03/11/Project-Euler-016/index.html","dc74156d6b187d60b7a1237bbc9e3541"],["2018/03/12/LeetCode-Notes-008/index.html","93ce221ef85095fa65ee5b5a33d39310"],["2018/03/12/Project-Euler-017/index.html","3f9540d3f680978c5daf030cf6a662e1"],["2018/03/13/Project-Euler-018/index.html","9dc4596095a5af8d15d68d290c60126c"],["2018/03/13/Project-Euler-019/index.html","7a6fb9df104b2868fb3b46b1ad30c572"],["2018/03/14/LeetCode-Notes-009/index.html","5c83fce087164342e8298774e0506f25"],["2018/03/15/LeetCode-Notes-010/index.html","721a2b49a4d40409c7162585b3957557"],["2018/03/16/LeetCode-Notes-011/index.html","8fd70684e0d600d6d87d3fa1bb4ea640"],["2018/03/17/LeetCode-Notes-012/index.html","3db916e80fcc7ba3c53fb8abea3717ce"],["2018/03/17/LeetCode-Notes-013/index.html","ac242e318786a13da8cc2c4628f7da3f"],["2018/03/18/LeetCode-Notes-013/index.html","92c8bd54111ba7054a5a0ca3f6083aa6"],["2018/03/19/LeetCode-Notes-014/index.html","51d266b3c729131b39e552cf828b85e9"],["2018/03/20/LeetCode-Notes-015/index.html","81ad1d690d5cee40afc8a996fd62ee03"],["2018/03/21/LeetCode-Notes-016/index.html","4a95f39cc1bfcd075adf7a01d052c931"],["2018/03/22/LeetCode-Notes-017/index.html","60c6d41fef43065cdeae165f0dac335f"],["2018/03/23/LeetCode-Notes-018/index.html","082e6e599c0185b5e8bc185fb00f4f26"],["2018/03/24/LeetCode-Notes-019/index.html","9d2623c3a7048ac491b3090608a7a167"],["2018/03/25/LeetCode-Notes-020/index.html","137c8ec418596b7245098db6af8baaf7"],["2018/03/26/Simple-Implement-of-Spring-MVC/index.html","dabf8004cfe343e7a5eb45ec6d93a6a7"],["2018/03/29/Project-Euler-020/index.html","b804f6f755f7695ef90db544acaa7aad"],["2018/03/30/LeetCode-Notes-009/index.html","64eee8803dfaff30d843bdfa98c40cba"],["2018/03/30/LeetCode-Notes-021/index.html","61aeed6a50cc96db5a2b77238e817f82"],["2018/03/31/Project-Euler-021/index.html","d268d160d99ca377aeb94447229aa36b"],["2018/03/31/Project-Euler-022/index.html","7f81c983ba7607abd447d6aed286ddf6"],["2018/04/01/Reading-Challenge-April-2018/index.html","4cb040cd8a3ef8c57eb7460728e4614d"],["2018/04/02/LeetCode-Notes-022/index.html","13162f415c07e6ab9fbdae6772b2670b"],["2018/04/02/Project-Euler-022/index.html","f752be4824e0fb879c8a45975f073b07"],["2018/04/03/Project-Euler-023/index.html","a2b612c44122e977a90df089b6a78b9a"],["2018/04/04/LeetCode-Note-023/index.html","75b8267b94968cb0bcd9af05376ccb95"],["2018/04/04/LeetCode-Notes-023/index.html","eb32d497c4bc8c89400061f884bda374"],["2018/04/05/LeetCode-Notes-024/index.html","76ed09a7b3d83392a6e37626823744b6"],["2018/04/06/LeetCode-Notes-025/index.html","e027fa9a79329303ca2efd9f5b8f4e10"],["2018/04/06/Project-Euler-024/index.html","dba11c05be0316856771d8f96cd469aa"],["2018/04/07/Perceptron-with-Margin/index.html","213039388be21fe7fac5dbaddbfcaf7c"],["2018/04/09/Perceptrons-the-most-basic-form-of-a-neural-network/index.html","7931eec7e95bdeabd7937231c12e60db"],["2018/04/09/Project-Euler-025/index.html","776384b1c04af3edb824eed5a7114816"],["2018/04/11/Project-Euler-026/index.html","7e5132288e03cc26aa5f6d56612f15ae"],["2018/04/11/Project-Euler-027/index.html","5e0d763c997decfc85762763c221ae08"],["2018/04/12/Project-Euler-028/index.html","4fe34bef237dd2ca4f80a9db61372208"],["2018/04/13/ML-Lectures-Perceptron/index.html","3ac538a6af4114492569dcf2df25eec9"],["2018/04/13/Project-Euler-029/index.html","5e370095152a237e0f8aeec87a5a4697"],["2018/04/14/LeetCode-Notes-026/index.html","53592736b3fde58e14533c242b075ddf"],["2018/04/20/LeetCode-Notes-027/index.html","e9d11c2dd3122706301200e58300d5de"],["2018/04/22/LeetCode-Notes-028/index.html","23bcc4cee5b0f1eab9f78fddd12a205c"],["2018/05/03/Vue中的双向数据绑定/index.html","3633515c6036d8aa7a43be8083cf527b"],["2018/05/04/Reading-Challenge-May-2018/index.html","0f29f902737a8b567e4c15221130d1c6"],["2018/05/06/Promise版本的数组遍历/index.html","655ade11d9dec2088e5283db580f3de7"],["2018/05/16/Slide demo/index.html","59c31d90a47a9269736d2ac094343239"],["about/index.html","181d2531bc46b2992ab83b6995e385de"],["archives/2017/04/index.html","a97d339257e5fc25854fc1debc2fb3c4"],["archives/2017/10/index.html","7e56bb94c54dd0cda8b65359f8577653"],["archives/2017/11/index.html","d83c7f91d77fbb60899de0acee9b6b31"],["archives/2017/11/page/2/index.html","52e3e101eba9a3bb381830ea1ed48d32"],["archives/2017/12/index.html","0081a474e567dbb1616f0ad728919cc1"],["archives/2017/12/page/2/index.html","d4714fcb35f4ddf73772f61d266c32d8"],["archives/2017/12/page/3/index.html","32a063afba73858da1543146a511695d"],["archives/2017/12/page/4/index.html","da145ed2b2b23e2103108852cec1b6fe"],["archives/2017/12/page/5/index.html","47d79988c1989cd3c3aa271591922a52"],["archives/2017/index.html","ac56994f959762c8f969f8cf54cd757b"],["archives/2017/page/2/index.html","4ed6e2695109bf82c930d2a843897425"],["archives/2017/page/3/index.html","77b9dd6186a455e00d094e1522367979"],["archives/2017/page/4/index.html","02e402e54249370d4da6c4b588a151e0"],["archives/2017/page/5/index.html","e361d5b82c7952cbc860f98980f03768"],["archives/2017/page/6/index.html","aac10f679c977048949cb5e1d8eeaaab"],["archives/2017/page/7/index.html","f61199a9ab7d99f20344e757430921d2"],["archives/2018/02/index.html","7f80ac0c3b96c97458d853e8b3fd30de"],["archives/2018/02/page/2/index.html","80bfcf4516ea0784a02a643fb2caba48"],["archives/2018/02/page/3/index.html","683920ccec9a6f4547178210df9c3193"],["archives/2018/02/page/4/index.html","1c939780ffa3349493bfa583e5da8a35"],["archives/2018/03/index.html","c47602c00fb8919ab593afdfcc5c3817"],["archives/2018/03/page/10/index.html","9970fe86770403216a3be934b01e0c77"],["archives/2018/03/page/11/index.html","9ce42bbfda35955349bacca1d5593f3f"],["archives/2018/03/page/2/index.html","ac5f68bd134aaf2356113f7cc08e0375"],["archives/2018/03/page/3/index.html","0b3ae8d8e8234f9a016791306f13988f"],["archives/2018/03/page/4/index.html","b346e3590b1c330467628bba8f9f0028"],["archives/2018/03/page/5/index.html","8dc875db5d2f3d20cbc948ce7c8d2c1e"],["archives/2018/03/page/6/index.html","0f7d09a2838798db283547ca7625a6e3"],["archives/2018/03/page/7/index.html","a6b8e58a890dd7140a18d1f8a0a43116"],["archives/2018/03/page/8/index.html","0af287728082bcd8f2e7e57cda74b0e3"],["archives/2018/03/page/9/index.html","f4e1aacf54ae82f3b4cbf3c69875972d"],["archives/2018/04/index.html","e7682c0f6a29507e360eae1ef2178e40"],["archives/2018/04/page/2/index.html","23d96543f6d51e2cdb02f4660b9e28f9"],["archives/2018/04/page/3/index.html","34ba00db0c49e93ac7a1cbd0311e3961"],["archives/2018/05/index.html","974b12e2d3a70961978c1364d93192db"],["archives/2018/index.html","e3a6f612726f38be90e3155e5c550411"],["archives/2018/page/10/index.html","32b94f9c1df9db9f73c9bfed9c087436"],["archives/2018/page/11/index.html","5869209862e0707879f15cb81834cf93"],["archives/2018/page/12/index.html","833e41af131b32d41fbf5b5d0b2958ee"],["archives/2018/page/13/index.html","2ebdadacddbb6f57f43f6563e46d427a"],["archives/2018/page/14/index.html","caa4bd11fcea994d2f9b1f3cd2349b24"],["archives/2018/page/15/index.html","ec6a4d012831586b7f56fb1572446df9"],["archives/2018/page/2/index.html","deacee7b3aaee4ca2f1586461d49d4b8"],["archives/2018/page/3/index.html","57858de65d8460b61e4f1e7bfce6961e"],["archives/2018/page/4/index.html","602aadaf406db91a0a60264fe05a6cde"],["archives/2018/page/5/index.html","08d17da408a18dfdea0c5fcd953d45aa"],["archives/2018/page/6/index.html","1ea734dcd02fdd1291c9200b3920ea4d"],["archives/2018/page/7/index.html","ddce438883cd1c35344f81cfdf40b85a"],["archives/2018/page/8/index.html","dd6862ebb8395e5e3d3c0f338a05b904"],["archives/2018/page/9/index.html","34d69f41eaa28deea9686cea941e7008"],["archives/index.html","e7ed287fb8cb16f3c55f68fa78b957d7"],["archives/page/10/index.html","4704c3d103e334528025a43957eb9c2c"],["archives/page/11/index.html","03d3f49949af4d567c4e271ef8018c3a"],["archives/page/12/index.html","817ef8c1c0251647b0f4f628171ebb98"],["archives/page/13/index.html","7628bc8840df0fde159a9331610cef38"],["archives/page/14/index.html","86336cca849e07ec39f83014f9605731"],["archives/page/15/index.html","35ecbd8f9acf95e578f5607455ac8433"],["archives/page/16/index.html","9b48812770a817130b1b74ebf59746fe"],["archives/page/17/index.html","a6aec995c500843da5a1c66b344b75fe"],["archives/page/18/index.html","7d3dc449cd27f057d10404b27d7b35f6"],["archives/page/19/index.html","c79f7cac855a69598f5905e0f89e63a4"],["archives/page/2/index.html","0e573248072271adc7610d371aaf0767"],["archives/page/20/index.html","20da17e206e6c7d996110e8f0498023b"],["archives/page/21/index.html","eab62e9c4fc0f044f2f3ef1787bafb7f"],["archives/page/22/index.html","df73ea74102de4f1986f217f0a1cb24d"],["archives/page/3/index.html","97a4befd7ff001b7b0b52bcaf5ab0b27"],["archives/page/4/index.html","620b1cc53190c8ed7b2ae18596db2d10"],["archives/page/5/index.html","55299c720c15f609b45ff22064839fe5"],["archives/page/6/index.html","46b7cb03cb20a236b6dbcb10634e7d56"],["archives/page/7/index.html","be190feba91c9cabb149c71501c0d4fc"],["archives/page/8/index.html","c05a71eaafa1789a666770e83890aea7"],["archives/page/9/index.html","08e3ed8724ec83dcbf34c3b1579d347f"],["assets/algolia/algoliasearch.js","d2d43273523febe70b3fbe4c7fb050bd"],["assets/algolia/algoliasearch.min.js","d5ac7c786438492c5b4e9a9f8fc411ba"],["assets/algolia/algoliasearchLite.js","81dab03a4f3d2e08cb6ebccca9f81a09"],["assets/algolia/algoliasearchLite.min.js","01e86fe9a14b3d8270ca1867bacc7066"],["categories/index.html","22a79e25f68df679db9e7902f4e9790e"],["css/index.css","684347f4a908c72e8cd0cb9677cbdb52"],["css/main.css","aeb6f3736303081ba32e786507eb9370"],["css/style.css","7db8b8c4cef61c3fc09843ccab62b5ac"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["font/coveredbyyourgrace-webfont.eot","4e6c56beb324d6be3cfaf20f239c1e6e"],["font/coveredbyyourgrace-webfont.svg","90305a69b4632298bf8b4a273ffb8119"],["font/coveredbyyourgrace-webfont.ttf","0621a449356138817ff8e16cf5046a64"],["font/coveredbyyourgrace-webfont.woff","c04c2f5fa3220add6d590926d5d01b10"],["font/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["font/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["font/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["font/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["font/fontdiao.eot","bfc3bbc33eb59f2740df3f378eec1719"],["font/fontdiao.svg","e5fb14e75ddb588283c3be2696d33a35"],["font/fontdiao.ttf","590e30d2c52494739d0b22d31651e15a"],["font/fontdiao.woff","bdd0416608605b9077a512bb52c153f6"],["fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["fonts/iconfont.45d7ee.svg","45d7ee2dac9b3d44d52b84f8c8990053"],["fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["gallery/index.html","db3ad1bb605528660086c0e71a356b20"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/author.jpg","cd4a1d77a5b228644327258a8cdbe03c"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["img/banner.jpg","1f6c0e658ef3f6b95ad4302193747097"],["img/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["img/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["img/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["img/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["img/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["img/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["img/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["img/jacman.jpg","af1e8f8b5882487e9ab4d992a4927c9e"],["img/logo.png","73bc2ebc907a36637d8c4ceba075a79f"],["img/logo.svg","940714a621cc13bcd3a614e56db2cefc"],["img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["img/scrollup.png","62ee33e63fd96a448fd125b0d1b7f6f7"],["index.html","f937c458af0329263dcbec175c922bb0"],["js/copy.js","f4607057c0513bd07a69fcac08121979"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/gallery.js","d0deb5db0a73773d1b1b2b15a2cf25a4"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/jquery-2.0.3.min.js","58a97c2e2195fd1cd3c3055f5cc02d0f"],["js/jquery.imagesloaded.min.js","1fd2cb4320a2c970931017710397d1b4"],["js/jquery.qrcode-0.12.0.min.js","ddb79e5abac8e281bbdd3cc48d8462cb"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","dedc6e24c8d82429d5d498cc5a47ab07"],["js/search/local-search.js","bac0e1eda3d01fe70e4f7b887390ad97"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/totop.js","a552c9f9bf6dceaf6347a5071082fe58"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["lib/fastclick/README.html","b3cd6e7f930bf6e410a2e7eab8a148a8"],["lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["lib/jquery_lazyload/README.html","d89aa4afe316331a25b636b5ead4716e"],["lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["main.0cf68a.css","b9b1413784cad584eefbdf1c03117359"],["main.0cf68a.js","0431be007a34d1af67b5042cd398cc2a"],["mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["page/10/index.html","a2037322b28e691685877dfbf6c20d59"],["page/11/index.html","7a1ebf0acd8e06d1b07a47c05bf8a2ea"],["page/12/index.html","fccf58e1cc8d75c7035b49335200bc58"],["page/13/index.html","681d008547eee4d5f68fc060fb6599ce"],["page/14/index.html","878519e1157c0c75e9412513531826ab"],["page/15/index.html","e490f1eb8fdbf6e791e8e97071a25fb0"],["page/16/index.html","cfdd0bb53ea3ab558f4ddac8cedf2668"],["page/17/index.html","6d42765ce3d5bd5e3aed5e7bf0bb7ff6"],["page/18/index.html","41b8bf54465f51f659b036c25d76cc18"],["page/19/index.html","2f25569f1d32865a13a2b780560b32df"],["page/2/index.html","d826bde5c38c63955d5e0439bf8a9acf"],["page/20/index.html","92815811fc587a7ec624c6ff87b2370d"],["page/21/index.html","d979de3bc72f7fd79dc68083d323a4b5"],["page/22/index.html","a0173cbb8a555d1e729fe3f6ddd23038"],["page/3/index.html","f7527ff7af12f6bd634b62f62c42a66f"],["page/4/index.html","bd24f5d93c96c4e4580744d685010118"],["page/5/index.html","4e78b531183f3f059375027553e4c4a9"],["page/6/index.html","0c056ac7a42022c3eee2ca727d7825ba"],["page/7/index.html","264af35c4b3a2787d1bc4285abceffe0"],["page/8/index.html","3b0162acb12785bcaabae9cede94461d"],["page/9/index.html","6660eb2ed34697e43152e0b56464f96e"],["slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["slides/index.html","c645e4711e5bf84ba464a7e146f65194"],["tags/ES6/index.html","37c72eb7c6176e57865000a3934a2d5b"],["tags/Java/index.html","297997879a9cafe9c3516bb243201627"],["tags/R/index.html","aa6f1c6fc31d5f0d55669ea4dfd052e7"],["tags/R/page/2/index.html","9b96618afb3421e8b63c66ba3ef95304"],["tags/computationa-method/index.html","29e93a19105238c2887cecdfe1289799"],["tags/computational-method/index.html","a9f0699fc840c2050ee61d3acdb8e070"],["tags/deep-learning/index.html","bb5e5b4427111ff1e9e32e096dc29511"],["tags/dot/index.html","c7522ef22990cb14ca3617eebaee5bb3"],["tags/euler/index.html","b88522b248b8bb9ecd4e9f32fa1360a3"],["tags/euler/page/2/index.html","6039bca25563dc2a2732b58f8c49af0d"],["tags/euler/page/3/index.html","0f1a354610a608d357d61dbc350cf97f"],["tags/euler/page/4/index.html","f1f70fe8a7402ed9d48475551a6da2ea"],["tags/euler/page/5/index.html","05d36f2e98785ed16c4670b6aa8fdb48"],["tags/euler/page/6/index.html","ee2833065817e289956abb80d947fc70"],["tags/euler/page/7/index.html","08eb0c41cc7248cb5e9fc776f3dfb6dd"],["tags/hexo/index.html","a5b507e7a9e2fa87df7bf217285df8da"],["tags/index.html","963448f7aed83dc873a2b1249509befc"],["tags/java/index.html","76c3c3e671c636fd82c65c989d6c1e36"],["tags/javascript-leetcode/index.html","5689e82cc251c3428af59e50125c2982"],["tags/javascript/index.html","b617ce8573cf719d15061fad33e4019a"],["tags/javascript/page/2/index.html","6ef13496aa9102a4a64d6200b98f40c7"],["tags/javascript/page/3/index.html","53c2d584494451048551e7fc422cfe06"],["tags/javascript/page/4/index.html","3d77891ec49a5370b7376a0c3a4d7a2b"],["tags/javascript/page/5/index.html","2c54aebb7501952061d595f81f2e8b22"],["tags/javascript/page/6/index.html","373b4380a24ca7450f98c7df08d41a1b"],["tags/javascript/page/7/index.html","ea5e8841a37199094e6290e8d8a04869"],["tags/javascript/page/8/index.html","e4937027fb2328d1b13175ec76a2cd2d"],["tags/javascript/page/9/index.html","dcc2d300a0fadf03e1c795d40c016044"],["tags/julia/index.html","47ef156be8b4df092b8de5d9f5432273"],["tags/julia/page/2/index.html","dd4332afa6e5c30a8e3c89e7fe0657dd"],["tags/julia/page/3/index.html","10e1e811fd4602872efa009a29fc51e2"],["tags/leetcode/index.html","2e32f4d614ae43de70f1c1585bb9072f"],["tags/leetcode/page/2/index.html","a38c4daf95c67cefab0fe89c4b7bb30e"],["tags/leetcode/page/3/index.html","76d4982d2e1a226f54b03214ad56c48c"],["tags/leetcode/page/4/index.html","33e69cff6cb107fd008e0573d69143c0"],["tags/leetcode/page/5/index.html","ba505aba977e60b7bae3a1b3ba5a80f7"],["tags/leetcode/page/6/index.html","3a4af5cfb307d5d2027f939e643cfd32"],["tags/leetcode/page/7/index.html","e3fd7571a967c163d5da34c5325ee1d9"],["tags/machine-learning/index.html","8d13ccaaa9fe8721e1ff1a1523e7295d"],["tags/multilingual/index.html","1344d1ef117c70d5d817af3bf56a66ba"],["tags/multilingual/page/2/index.html","8e20c6e414e75159fd290648eb52d4c5"],["tags/multilingual/page/3/index.html","87dc60dde15d96b82e1cea41b472fd3a"],["tags/multilingual/page/4/index.html","dcb15c8c9cd26a34f9f666dd4d5b0fe7"],["tags/multilingual/page/5/index.html","16603bc2afbea553a17cb39b5a2f23fb"],["tags/multilingual/page/6/index.html","d27d10e088827a8f8b680ed89514d463"],["tags/multilingual/page/7/index.html","2d260502b359b056c810875176577a84"],["tags/p5js/index.html","1001fe800a9cf94b540dae2e95e19936"],["tags/perceptron/index.html","414f247d4f9e8992d857948906624237"],["tags/processing/index.html","945c3cb7c641b10b7ba04f3b1aab25f9"],["tags/python/index.html","4f50db57e32ac1980aeaaf8953c48baa"],["tags/r/index.html","bc7aa5a3fc77d7c5509acf46f8e6d56b"],["tags/r/page/2/index.html","40f8eb905ed6c73cd75e159f968ccbc9"],["tags/reading/index.html","25f732dccb6b3a4ad63bd9690f8e5347"],["tags/statistic/index.html","786d8cfeea65b5540aba1fe8df3ccbd9"],["tags/statistics/index.html","53e674ca86196037358832d51ae7f8e7"],["tags/statistics/page/2/index.html","b29561ad440f6aad6e69b2f9b2b3e9b7"],["tags/vue/index.html","eb965b8d4785dbe51e7d47768a7369b3"]];
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







