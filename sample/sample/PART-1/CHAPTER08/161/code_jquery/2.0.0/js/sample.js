$(function(){
  // documentにmousemoveイベントを割り当てる
  $(document).mousemove(function(evt){
    // 現在のマウス座標を取得
    var mouseX = evt.pageX;
    var mouseY = evt.pageY;
    var eType = evt.type;
    $("output:first").text(eType +" : "+mouseX+", "+mouseY);
  });
});