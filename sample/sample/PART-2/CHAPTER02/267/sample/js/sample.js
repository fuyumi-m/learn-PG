$(function(){
  // ダイアログを表示する
  $("#message").dialog({
    // ダイアログがリサイズ開始された場合に発生するresizeStartイベントの処理
    resizeStart : function(evt, ui){
      // ダイアログの幅を表示する
      $("#rsStart").text(ui.size.width+", "+ui.size.height);
    },
    // ダイアログがリサイズ中に発生するresizeイベントの処理
    resize : function(evt, ui){
      // ダイアログの幅を表示する
      $("#rs").text(ui.size.width+", "+ui.size.height);
    },
    // ダイアログのリサイズが終了した場合に発生するresizeStopイベントの処理
    resizeStop : function(evt, ui){
      // ダイアログの幅を表示する
      $("#rsEnd").text(ui.size.width+", "+ui.size.height);
    }
  });
});