$(function(){
  // 最初の画像にクリックイベントを割り当てる
  $("#photo1").click(function(){
    // 画像のエフェクトを設定
    $(this).fadeTo(250, 0).delay(3000).fadeTo(250, 1.0);
  });
  // 2番目の画像にクリックイベントを割り当てる
  $("#photo2").click(function(){
    // 画像のエフェクトを設定（待ち時間なし）
    $(this).fadeTo(250, 0).fadeTo(250, 1.0);
  });
});