$(function(){
  // 要素にscrollイベントを割り当てる
  $("#myWindow").scroll(function(evt){
    // 現在のスクロール座標を取得する
    // var x = $(this).scrollLeft();  // Zepto.js 1.0にはないです
    var x = 0;
    var y = $(this).scrollTop();
    // スクロール量を表示する
    $("#result").text(x+", "+y);
  });
});