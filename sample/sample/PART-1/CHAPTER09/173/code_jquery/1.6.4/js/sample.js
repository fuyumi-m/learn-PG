$(function(){
  $("#btn1").toggle(function(){
    // 画像をアニメーションさせながら非表示にする
    $("#photo1").hide("fast");
  },function(){
    // 画像をアニメーションさせながら表示する
    $("#photo1").show("slow");
  });
  // アニメーション完了後に処理を行う
  $("#btn2").toggle(function(){
    // 0ミリ秒にするかパラメーター0だとアニメーションなしで処理
    $("#photo2").hide(0, function(){
      // 非表示処理が完了したのでメッセージを表示
      $("output:first").text("");
    });
  },function(){
    $("#photo2").show(1000, function(){
      // 表示処理が完了したのでメッセージを消去
      $("output:first").text("表示完了");
    });
  });
});