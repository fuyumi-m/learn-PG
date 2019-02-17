$(function(){
  // img要素にmouseoverイベントを割り当てる
  $("img").mouseover(function(evt){
    // マウスオーバー時の前にマウスが乗っていた要素を取得
    var eTarget = evt.relatedTarget;
    var htmltext = $("#result").html();
    $("#result").html(htmltext+"<br>[mouseover前] : "+eTarget);
  });
  // img要素にmouseoutイベントを割り当てる
  $("img").mouseout(function(evt){
    // マウスアウト時の前にマウスが乗っていた要素を取得
    var eTarget = evt.relatedTarget;
    var htmltext = $("#result").html();
    $("#result").html(htmltext+"<br>[mouseout前] : "+eTarget);
  });
});