$(function(){
  // 初期値を設定する
  var percent = 0;
  // 更新前に一度表示する必要がある
  $("#updateStatus").progressbar();
  // プログレスバーを表示する
  (function(){
    $("#updateStatus").progressbar("value", percent);
    // 進捗状況の割合を増やす
    percent++;
    // 100%になるまで自分自身を100msecごと呼び出す
    if (percent <= 100){
      setTimeout(arguments.callee, 100);
    }
  })();
});