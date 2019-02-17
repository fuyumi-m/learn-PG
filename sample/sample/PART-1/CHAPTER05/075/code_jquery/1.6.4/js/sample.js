$(function(){
  // th, td要素のクリックイベントを割り当てる
  $("td, th").click(function(){
    // クリック時の親要素の背景色を変更する
    $(this).parent().css("background-color", "yellow");
  });
});