$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // 最初の画像の子要素を全て取得し不透明度を変える
    $("#imageList").children("img").css("opacity", 0.3);
  });
});