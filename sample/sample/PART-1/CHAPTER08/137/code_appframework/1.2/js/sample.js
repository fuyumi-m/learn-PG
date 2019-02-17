$(function(){
  // img要素にclickイベントを割り当てる
  $(document).on("click", "img", function(evt){
    // クリック時の前にマウスがあった要素を取得
    var eTarget = evt.relatedTarget;
    var htmltext = $("#result").html();
    $("#result").html(htmltext+"<br>[click前] : "+eTarget);
  });
});