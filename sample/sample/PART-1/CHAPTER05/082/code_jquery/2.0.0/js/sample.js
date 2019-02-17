$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // hotelクラスの兄弟要素を全て取得し不透明度を変える
    $(".hotel").siblings().css("opacity", 0.3);
  });
});