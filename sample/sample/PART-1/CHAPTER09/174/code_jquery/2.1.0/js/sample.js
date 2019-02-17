$(function(){
  $("#btn1").toggle(function(){
    // 画像をフェードアウトさせる
    $("#photo1").fadeOut("fast");
  },function(){
    // 画像をフェードインする
    $("#photo1").fadeIn("slow");
  });
  // アニメーション完了後に処理を行う
  $("#btn2").click(function(){
    $("#photo1").fadeTo("slow", 0.5, function(){
      // フェード処理が完了したのでメッセージを表示
      $("output:first").text("フェード完了");
    });
  });
});