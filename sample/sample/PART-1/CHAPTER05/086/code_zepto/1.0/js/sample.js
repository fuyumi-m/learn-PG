$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3番目より後の画像全部を半透明にする
    $("#basePoint").nextAll().css("opacity", 0.3);
  });
});