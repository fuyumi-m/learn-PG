$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // ID名imageList内の3番目より後の画像全部を半透明にする
    $("#imageList img:eq(2)").nextAll().css("opacity", 0.3);
  });
});