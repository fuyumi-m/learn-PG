$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // ID名imageList内の3番目以降の全ての画像を半透明にする
    $("#imageList img:eq(2)").nextAll().andSelf().css("opacity", 0.3);
  });
});