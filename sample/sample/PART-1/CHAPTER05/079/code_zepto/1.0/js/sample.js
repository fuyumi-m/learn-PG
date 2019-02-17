$(function(){
  // img要素にクリックイベントを割り当て
  $("img").click(function(){
    // img要素の親要素の背景色を変える
    $(this).offsetParent().css("background-color", "yellow");
  });
});