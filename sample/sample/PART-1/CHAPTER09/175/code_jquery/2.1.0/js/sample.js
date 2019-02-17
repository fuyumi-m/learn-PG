$(function(){
  // btn1にイベントを設定
  $("#btn1").click(function(){
    $("#photo1").fadeToggle("slow");
  });
  // btn2にイベントを設定
  $("#btn2").click(function(){
    $("#photo1").fadeToggle("fast", function(){
      $("output:first").text("フェード完了");
    });
  });
});