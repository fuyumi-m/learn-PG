$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の3番目以降の全ての画像を半透明にする
    $("#no3").nextAll().andSelf().css("opacity", 0.3);
  });
});