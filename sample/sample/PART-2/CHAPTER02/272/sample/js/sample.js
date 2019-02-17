$(function(){
  // 初期値を設定する
  var percent = 0;
  // プログレスバーを設定する
  $("#dlStatus").progressbar({
    // 初期値を設定する
    value : 75
  });
  // 無効にするボタンがクリックされた時の処理
  $("#dis").click(function(){
    // プログレスバーを無効にする
    $("#dlStatus").progressbar("disable");
  });
  // 有効にするボタンがクリックされた時の処理
  $("#ena").click(function(){
    // プログレスバーを無効にする
    $("#dlStatus").progressbar("enable");
  });
});