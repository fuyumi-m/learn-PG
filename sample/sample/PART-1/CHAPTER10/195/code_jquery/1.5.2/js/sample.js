$(function(){
  // 同一ドメイン上のサーバー上にあるdata.jsonファイルを読み込む
  $.getJSON("./data.json")
    // 非同期処理が完了（resolve[成功時]またはreject[失敗時]）した場合
    .always(function(){
      // 完了を示す文字を画面に表示する
      var htmlStr = $("output:first").html();
      $("output:first").html(htmlStr+"<br>処理が完了しました。(resolve/reject)");
    });
});
