$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3番目の前の画像を半透明にする
    $("#imageList img").eq(2).prev().css("opacity", 0.3);
  });
});