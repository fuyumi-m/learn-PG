$(function(){
  // ダイアログを表示する
  $("#message").dialog({
    // ダイアログがドラッグ開始された場合に発生するdragStartイベントの処理
    dragStart : function(evt, ui){
      // ダイアログの座標を表示する
      $("#ddStart").text(evt.clientX+", "+evt.clientY);
    },
    // ダイアログがドラッグ中に発生するdragイベントの処理
    drag : function(evt, ui){
      // ダイアログの座標を表示する
      $("#dd").text(evt.clientX+", "+evt.clientY);
    },
    // ダイアログのドラッグが終了した場合に発生するdragEndイベントの処理
    dragStop : function(evt, ui){
      // ダイアログの座標を表示する
      $("#ddEnd").text(evt.clientX+", "+evt.clientY);
    }
  });
});