$(function(){
  // アコーディオン機能を設定する
  $("#mashroom").accordion({
    // パネルヘッダーがアクティブになった場合に処理する
    activate: function( event, ui ) {
      // 結果を表示する
      $("#result").html(
        // アクティブになったヘッダーの文字を表示
        "新ヘッダー："+ui.newHeader.text()+"<br>"+
        // デアクティブになったヘッダーの文字を表示
        "旧ヘッダー："+ui.oldHeader.text()  
      );
    }
  });
});