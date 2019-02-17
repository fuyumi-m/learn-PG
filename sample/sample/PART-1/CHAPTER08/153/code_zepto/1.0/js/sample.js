$(function(){
  // 画像にmousemoveイベントを割り当てる
  $("#photo1").mousemove(function(evt){
    // 現在のマウス座標を取得
    var mouseX = evt.pageX;
    var mouseY = evt.pageY;
    var eType = evt.type;
    $("#result").text(eType +" : "+mouseX+", "+mouseY);
  });
});