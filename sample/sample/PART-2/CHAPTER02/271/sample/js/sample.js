$(function(){
  // 初期値を設定する
  var percent = 0;
  // プログレスバーを設定する
  $("#diskStatus").progressbar({
    // プログレスバーが変化した時の処理
    change : function(evt, ui){
      // 現在値を読み出し
      var per = $("#diskStatus").progressbar("value");
      $("#status").text(per+"%");
    },
    // プログレスバーがmaxの値まで達した時の処理
    complete : function(evt, ui){
      // メッセージを表示する
      $("#result").text("検証が終了しました");
    }
  });
  // プログレスバーを更新する
  (function(){
    $("#diskStatus").progressbar("value", percent);
    // 進捗状況の割合を増やす
    percent++;
    // 100%になるまで自分自身を25msecごと呼び出す
    if (percent <= 100){
      setTimeout(arguments.callee, 25);
    }
  })();
});