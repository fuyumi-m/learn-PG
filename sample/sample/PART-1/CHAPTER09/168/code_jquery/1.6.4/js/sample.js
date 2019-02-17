$(function(){
  // ボタンクリックでアニメーション開始
  $("#btn1").toggle(function(){
    $("#photo1").hide(3000);
  },function(){
    $("#photo1").show(3000);
  });
  // ボタンクリックでアニメーション停止
  $("#btn2").click(function(){
    $("#photo1").stop();
  });
});