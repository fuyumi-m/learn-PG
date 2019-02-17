$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3番目より前の画像全部を半透明にする
    $("#imageList img:eq(2)").prevAll().css("opacity", 0.3);
  });
});