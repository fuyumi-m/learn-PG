$(function(){
  $("#btn1").click(function(){
    // 画像をアニメーションさせながら表示する
    $("#photo1").show("fast");
  });
  $("#btn2").click(function(){
    // 画像をアニメーションさせながら非表示にする
    $("#photo1").hide("slow");
  });
  // アニメーション完了後に処理を行う
  $("#btn3").click(function(){
    // 0ミリ秒にするかパラメーター0だとアニメーションなしで処理
    $("#photo2").hide(0, function(){
      // 非表示処理が完了したのでメッセージを表示
      $("#result").text("完了");
    });
  });
});