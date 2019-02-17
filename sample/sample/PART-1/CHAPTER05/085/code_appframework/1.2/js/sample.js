$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名basePointの次の画像を半透明にする
    $("#basePoint").next().css("opacity", 0.3);
  });
});