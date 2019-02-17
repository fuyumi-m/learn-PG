$(function(){
  // アコーディオン機能を設定する
  $("#mashroom").accordion({
    // アイコンの設定
    icons : {
      // ヘッダーのアイコンを指定する
      "header" : "ui-icon-folder-collapsed",
      // アクティブヘッダーのアイコンを指定する
      "activeHeader" : "ui-icon-folder-open"
    }
  });
});