$(function(){
  // 指定した秒数だけ待ってから処理を行う。
  // sleep関数はpromiseオブジェクトを返すのでメソッドチェーンで接続
  sleep(1)
    // 処理を順番に行うためにthen()を指定する
    .then( function(){ return sleep(2); } )
    .then( function(){ return sleep(3); } )
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
