$(function(){
  // 画像にダブルクリックイベントを割り当てる
  $("#photo1").dblclick(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(200, 0.5);
    // ダブルクリックした事を示すためメッセージを表示
    $("output:first").text("ダブルクリックイベント発生");
  });
});