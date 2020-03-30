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
