$(function(){
  // btn0にイベントを設定
  $("#btn0").click(function(){
    // 画像をスライドアップ
    $("#photo1").slideUp("slow");
  });
  // btn1にイベントを設定
  $("#btn1").click(function(){
    // 画像をスライドダウン
    $("#photo1").slideDown(2000);
  });
  // btn2にイベントを設定
  $("#btn2").click(function(){
    // 画像をスライドアップしメッセージを表示
    $("#photo2").slideUp(2000, function(){
      $("#result").text("スライドアップ完了");
    });
  });
  // btn3にイベントを設定
  $("#btn3").click(function(){
    // 画像をスライドダウンしメッセージを表示
    $("#photo2").slideDown(2000, function(){
      $("#result").text("スライドダウン完了");
    });
  });
});