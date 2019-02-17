$(function(){
  // btn1にイベントを設定
  $("#btn1").toggle(function(){
    // 画像をスライドアップ
    $("#photo1").slideUp("slow");
  },function(){
    // 画像をスライドダウン
    $("#photo1").slideDown(2000);
  });
  // btn2にイベントを設定
  $("#btn2").toggle(function(){
    // 画像をスライドアップしメッセージを表示
    $("#photo2").slideUp(2000, function(){
      $("output:first").text("スライドアップ完了");
    });
  },function(){
    // 画像をスライドダウンしメッセージを表示
    $("#photo2").slideDown(2000, function(){
      $("output:first").text("スライドダウン完了");
    });
  });
});