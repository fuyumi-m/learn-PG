$(function(){
  // 初期値を設定する
  var percent = 0;
  // プログレスバーを設定する
  $("#energyStatus").progressbar({
    // 最大値を設定する
    max : 200
  });
  // プログレスバーを表示する
  (function(){
    $("#energyStatus").progressbar("value", percent);
    // 進捗状況の割合を増やす
    percent++;
    // 100%になるまで自分自身を20msecごと呼び出す
    if (percent <= 100){
      setTimeout(arguments.callee, 20);
    }
  })();
});