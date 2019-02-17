$(function(){
  // 初期値を設定する
  var percent = 0;
  // プログレスバーを設定する
  $("#waterStatus").progressbar({
    // 初期値を設定する
    value : 25
  });
  // 読み出しボタンがクリックされた時の処理
  $("#getValue").click(function(){
    // プログレスバーの読み出し
    var n = $("#waterStatus").progressbar("value");
    alert(n);
  });
  // 設定ボタンがクリックされた時の処理
  $("#setValue").click(function(){
    // プログレスバーに値を設定する
    $("#waterStatus").progressbar("value", 50);
  });
});