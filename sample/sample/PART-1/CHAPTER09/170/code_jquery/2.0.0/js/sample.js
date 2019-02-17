$(function(){
  // btn1に画像をの表示・非表示を切り換えるイベントを設定する
  $("#btn1").toggle(function(){
    $("#photo1").fadeOut("slow");
  },function(){
    $("#photo1").fadeIn("slow");
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