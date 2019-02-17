$(function(){
  // 同一ドメイン上のサーバー上にあるdata2.jsonファイルを読み込む
  $.getJSON("./data2.json")
    // 非同期処理がresolve[成功時]状態の場合
    .done(function(data, status, jqXHR){
      $("output:first").html(htmlStr+"<br>処理は成功しました。(resolve)");
    })
    // 非同期処理がreject[失敗時]状態の場合
    .fail(function(){
      var htmlStr = $("output:first").html();
      // 失敗を示す文字を画面に表示する
      $("output:first").html(htmlStr+"<br>処理に失敗しました。(reject)");
    })
});
