$(function(){
  // オートコンプリート機能を設定する
  $("#devicetype").autocomplete({
    // 表示リストを設定する
    source:[
      "iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4S", "iPhone 5",
      "iPad", "iPad2", "新しいiPad", "iPad mini",
      "Android", "アンドロイド", "Nexus 7", "Nexus 10",
      "Windows Phone", "Windows RT", "Windows 8", "Windows CE",
      "Galaxy", "Galaxy S2", "Galaxy Nexus", "Galaxy 3", "Galaxy Tab", "Galaxy 4"
    ],
    // 最低限3文字入れないと入力候補が表示されないようにする
    minLength : 3
  });
});