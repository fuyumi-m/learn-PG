$(function(){
  // ボタンクリックでアニメーション開始
  $("#btn1").click(function(){
    $("#photo1").hide();
  });
  // ボタンクリックでアニメーション停止
  $("#btn2").click(function(){
    $("#photo1").stop();
  });
});