$(function(){
  // 画像にクリックイベントを割り当てる
  $("#photo1").click(function(){
    // 画像の不透明度を設定
    $(this).css("opacity", 0.5);
    // クリックした事を示すためメッセージを表示
    $("#result").text("クリックイベント発生");
  });
});