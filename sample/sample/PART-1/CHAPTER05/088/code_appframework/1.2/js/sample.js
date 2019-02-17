$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3番目より前のokクラス以外の不透明度を変える
    $("#basePoint").prevUntil(".ok").css("opacity", 0.3);
  });
});