$(function(){
  // 要素にscrollイベントを割り当てる
  $("#myWindow").on("scroll", function(evt){
    // 現在のスクロール座標を取得する
    var x = $(this).scrollLeft();
    var y = $(this).scrollTop();
    // スクロール量を表示する
    $("#result").text(x+", "+y);
  });
});