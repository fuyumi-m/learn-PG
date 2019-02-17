$(function(){
  // ダイアログを表示する
  $("#message").dialog({
    // ダイアログが表示された場合に発生するopenイベントの処理
    open : function(evt, ui){
      // 現在の時刻をリアルタイムに表示する
      var dateObj = new Date();
      var h = ("0"+dateObj.getHours()).slice(-2);
      var m = ("0"+dateObj.getMinutes()).slice(-2);
      var s = ("0"+dateObj.getSeconds()).slice(-2);
      $("#message").html(h+":"+m+":"+s);
      // 1秒ごとに繰り返す
      setTimeout(arguments.callee, 1000);
    }
  });
});