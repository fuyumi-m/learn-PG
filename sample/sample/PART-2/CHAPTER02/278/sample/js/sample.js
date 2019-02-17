$(function(){
  // スライダーを設置する
  $("#myslider").slider();
  // 無効ボタンがクリックされた場合の処理
  $("#dis").click(function(){
    // スライダーを無効にする
    $("#myslider").slider("disable");
  });
  // 有効ボタンがクリックされた場合の処理
  $("#ena").click(function(){
    // スライダーを有効にする
    $("#myslider").slider("enable");
  });
});