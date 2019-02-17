$(function(){
  // documentにmousemoveイベントを割り当てる
  $(document).on("click", function(evt){
    // 現在のモニタ画面上でのマウス座標を取得
    var mouseX = evt.originalEvent.screenX;
    var mouseY = evt.originalEvent.screenY;
    var eType = evt.type;
    $("#result").text(eType +" : "+mouseX+", "+mouseY);
  });
});