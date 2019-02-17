$(function(){
  // ボタンにクリックイベントを割り当てる
  $("#startAnime").click(function(){
    // 左側の画像のアニメーションを設定
    $("#photo1").animate({
      width : 40,
      height: 30,
      opacity : '-=0.25'
    });
  });
});