$(function(){
  // オートコンプリート機能を設定する
  $("#devicetype").autocomplete({
    // 表示リストを設定する
    source:[
      "iPhone", "iPad", "iPad mini",
      "Android", "アンドロイド", "Nexus 7", "Nexus 10",
      "Windows Phone"
    ]
  });
});