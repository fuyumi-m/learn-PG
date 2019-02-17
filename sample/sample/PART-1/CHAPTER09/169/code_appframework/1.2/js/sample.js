$(function(){
  // btn1に画像をの表示・非表示を切り換えるイベントを設定する
  $("#btn1").toggle(function(){
    $("#photo1").fadeOut();
  },function(){
    $("#photo1").fadeIn();
  });
  // btn2にクリックイベントを割り当てる
  $("#btn2").click(function(){
    // アニメーション処理間隔を設定する
    $.fx.interval = parseFloat($("#msec").val());
  });
});