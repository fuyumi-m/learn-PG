$(function(){
  // btn1にイベントを設定
  $("#btn1").click(function(){
    $("#photo1").slideToggle("slow");
  });
  // btn2にイベントを設定
  $("#btn2").click(function(){
    $("#photo1").slideToggle("fast", function(){
      $("output:first").text("スライドダウン完了");
    });
  });
});