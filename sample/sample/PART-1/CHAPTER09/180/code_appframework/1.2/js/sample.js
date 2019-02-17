$(function(){
  // アニメ開始ボタンにクリックイベントを割り当てる
  $("#startAnime").click(function(){
    // 左側の画像のアニメーションを設定
    $("#photo1").animate({ width : 40 }, 1000)
          .animate({ height : 40 }, 1000)
          .animate({ opacity : 0.01 }, 1000)
          .animate({ opacity : 1.0 }, 1000)
          .animate({ height : 120 }, 1000)
          .animate({ width : 160 }, 1000)
  });
  // キュークリアボタンにクリックイベントを割り当てる
  $("#clearQ").click(function(){
    $("#photo1").clearQueue();
  });
});