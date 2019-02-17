$(function(){
  // ボタンにクリックイベントを割り当てる
  $("#btn").click(function(){
    // ID名imageList内のdiv要素内の画像を半透明にする
    $("#imageList div").has("img").css("opacity", 0.3);
  });
});