$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3〜5番目の要素の不透明度を変える
    $("#imageList img").slice(2, 5).css("opacity", 0.3);
  });
});