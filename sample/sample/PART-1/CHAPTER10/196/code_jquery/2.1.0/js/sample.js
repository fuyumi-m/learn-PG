$(function(){
  // 同一ドメイン上のサーバー上にあるdata.jsonファイルを読み込む
  $.getJSON("./data.json")
    // 非同期処理がresolve[成功時]状態の場合
    .done(function(data, status, jqXHR){
      // JSONデータから各プロパティの値を読み出し表示する
      var year = data.year;
      var month = data.month;
      var name = data.name
      $("output:first").text("読み込んだデータ："+year+"年"+month+"月　"+name);
      // 成功を示す文字を画面に表示する
      var htmlStr = $("output:first").html();
      $("output:first").html(htmlStr+"<br>処理が成功し終了しました。(resolve)");
    })
});
