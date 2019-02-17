$(function(){
  // btn1に画像をの表示・非表示を切り換えるイベントを設定する
  $("#btn0").click(function(){
    $("#photo1").fadeIn("slow");
  });
  $("#btn1").click(function(){
    $("#photo1").fadeOut("slow");
  });
  // btn2にクリックイベントを割り当てる
  $("#btn2").click(function(){
    // アニメーション処理をONにする
    $.fx.off = false;
  });
  // btn3にクリックイベントを割り当てる
  $("#btn3").click(function(){
    // アニメーション処理をOFFにする
    $.fx.off = true;
  });
});