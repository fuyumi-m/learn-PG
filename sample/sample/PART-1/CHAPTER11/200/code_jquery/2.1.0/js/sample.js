$(function(){
  // $.when()で全ての処理が正常終了するのを待つ
  // 指定した3つのメソッドは異なる秒数後に処理を行う
  $.when(
    sleep(3),
    sleep(6),
    sleep(1)
  )
  // 処理が正常に終了した場合はdone()を指定する
  .done( msg_ok );
  // 一定時間後にメッセージを表示する関数
  function sleep(sec){
    // Deferredオブジェクトを生成する
    var def = new $.Deferred();
    // 指定された秒数後にメッセージを表示する
    setTimeout(function(){
      $("#result").html($("#result").html() + "●"+sec+", ");
      // 処理が成功した(resolve)ことを呼び出し元に返す（重要）
      def.resolve();
    }, sec*1000);
    // sleep関数からはDeferredのPromiseオブジェクトを返す（重要）
    return def.promise();
  }
  // 正常終了のメッセージを表示する関数
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>正常に処理が終わりました");
  }
});
