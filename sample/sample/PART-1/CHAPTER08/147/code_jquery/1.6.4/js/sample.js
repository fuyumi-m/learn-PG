$(function(){
  // 画像にクリックイベントを割り当てる
  $("#photo1").click(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(200, 0.5);
    // クリックした事を示すためメッセージを表示
    $("output:first").text("クリックイベント発生");
  });
});