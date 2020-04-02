(function() {
  "use strict";

  // 双方向データバインディング
  var vm = new Vue({
    el: "#app",
    data: {
      payload: {}
    },
    mounted: function() {
      // データの初期化
      this.initPage();
    },
    methods: {
      initPage: function() {}
    }
  });
})();

// $(document).ready(function() {
//   $("img").error(function() {
//     $(this).attr({
//       src: "../image/no_image.png",
//       alt: "no image"
//     });
//   });
// });