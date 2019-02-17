$(function(){
  // カウンタを用意
  var counter = 1;
  // 非同期処理を行う
  proc_OK()
    // 処理を順番に行うためにthen()を指定する
    .then( function(){ return proc_OK(); } )
    .then( function(){ return proc_NG(); } )
    .then( function(){ return proc_OK(); } )
    // alwaysは成功、失敗に関わらず処理が終了した場合に処理する
    .always( msg_ok );
  // 正常処理を行う関数
  function proc_OK(){
    // Deferredオブジェクトを作成する
    var def = new $.Deferred();
    // 1秒後に処理を行う
    setTimeout(function(){
      // 画面に正常に処理された事を示す文字を表示する
      $("#result").html($("#result").html() + "<br>"+counter+"：正常に処理しました");
      counter++;
      // 成功した(resolve)ことを示す。戻り値はPromiseオブジェクト
      var promiseObj = def.resolve();
      // Deferredオブジェクトの状態を表示する
      dispStatus(def);
      // Promiseオブジェクトを返す（重要）
      return promiseObj;
    }, 3000);
    // Deferredオブジェクトの状態を表示する
    dispStatus(def);
    // Promiseオブジェクトを返す（重要）
    return def.promise();
  }
  // 失敗する処理を行う関数
  function proc_NG(){
    // Deferredオブジェクトを作成する
    var def = new $.Deferred();
    // 0.1秒後に処理を行う
    setTimeout(function(){
      // 画面に失敗した事を示す文字を表示する
      $("#result").html($("#result").html() + "<br>"+counter+"：処理に失敗しました");
      counter++;
      // 失敗した(reject)ことを示す。戻り値はPromiseオブジェクト
      var promiseObj = def.reject();
      // Deferredオブジェクトの状態を表示する
      dispStatus(def);
      // Promiseオブジェクトを返す（重要）
      return promiseObj;
    }, 1500);
    // Deferredオブジェクトの状態を表示する
    dispStatus(def);
    // Promiseオブジェクトを返す（重要）
    return def.promise();
  }
  // 正常終了のメッセージを表示する関数
  function msg_ok(){
    $("#result").html($("#result").html() + "<br>処理が終わりました");
  }
  // Deferredオブジェクトの状態を表示する
  function dispStatus(defObj){
    $("#stat").text(defObj.state());
  }
});
