$(function(){
  // カウンタを用意
  var counter = 1;
  // 非同期処理を行う
  proc_OK()
    // 処理を順番に行うためにthen()を指定する
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK2(); } )
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_OK2(); } )
    // alwaysは成功、失敗に関わらず処理が終了した場合に処理する
    .always( msg_ok );
  // 正常処理を行う関数
  function proc_OK(){
    // Deferredオブジェクトを作成する
    var def = new $.Deferred();
    // notify実行時に呼び出す関数を指定する
    def.progress(dispStatus);
    // 1秒後に処理を行う
    setTimeout(function(){
      // 画面に正常に処理された事を示す文字を表示するためにnotify()を実行する
      def.notifyWith($("#result1"), ["type1", "OK func"]);
      // 成功した(resolve)ことを示す。戻り値はPromiseオブジェクト
      return def.resolve();
    }, 1000);
    // Promiseオブジェクトを返す（重要）
    return def.promise();
  }
  // 正常処理を行う関数、その２。上記関数と同じなのでコメントは省略
  function proc_OK2(){
    var def = new $.Deferred();
    def.progress(dispStatus);
    setTimeout(function(){
      def.notifyWith($("#result2"), ["type2", "OK2 func"]);
      return def.resolve();
    }, 1000);
    return def.promise();
  }
  // 正常終了のメッセージを表示する関数
  function msg_ok(){
    $("#result3").html($("#result3").html() + "<br>処理が終わりました");
  }
  // notifyメソッド実行時に呼び出す関数。パラメーターも渡される
  function dispStatus(type, msg){
    this.html(this.html() + "<br>"+type+" : "+counter+"：正常に処理しました。"+msg);
    counter++;
  }
});
