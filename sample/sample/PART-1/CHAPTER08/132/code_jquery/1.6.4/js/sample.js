$(function(){
  // documentにmousemoveイベントを割り当てる
  $(document).mousemove(function(evt){
    // 現在のモニタ画面上でのマウス座標を取得
    var mouseX = evt.originalEvent.screenX;
    var mouseY = evt.originalEvent.screenY;
    var eType = evt.type;
    $("output:first").text(eType +" : "+mouseX+", "+mouseY);
  });
});