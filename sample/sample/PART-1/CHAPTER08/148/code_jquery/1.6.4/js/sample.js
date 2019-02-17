$(function(){
  // 画像にトグルイベントを割り当てる
  $("#photo1").toggle(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(100, 0.5);
    // クリックした事を示すためメッセージを表示
    $("output:first").text("不透明度50%");
  }, function(){
    // 画像の不透明度を設定
    $(this).fadeTo(100, 1.0);
    // クリックした事を示すためメッセージを表示
    $("output:first").text("不透明度100%");
  });
});