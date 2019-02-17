$(function(){
  // 画像にhoverイベントを割り当てる
  $("#photo1").hover(
    // マウスが重なった時の処理を設定する
    function(){
      // 画像の不透明度を設定
      $(this).fadeTo(50, 0.5);
      // マウスが重なった状態である事を示すためメッセージを表示
      $("#result").text("マウスが重なりました");
  },  // マウスが離れた時の処理を設定する
    function(){
      // 画像の不透明度を設定
      $(this).fadeTo(50, 1.0);
      // マウスが離れた状態である事を示すためメッセージを表示
      $("#result").text("マウスが離れました");
    }
  );
});