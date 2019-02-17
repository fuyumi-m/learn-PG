$(function(){
  // オートコンプリート機能を設定する
  $("#devicetype").autocomplete({
    // 表示リストを設定する
    source:[
      "iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4S", "iPhone 5",
      "iPad", "iPad2", "新しいiPad", "iPad mini",
      "Android", "アンドロイド", "Nexus 7", "Nexus 10"
    ],
    // 表示位置を設定する
    position : {
      my : "right top",
      at: "left top"
    }
  });
});