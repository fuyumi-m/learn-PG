$(function(){
  // ボタンにhoverイベントを割り当て
  $(":image").hover(function(){
    // 画像を入れ替える
    $(":image").attr("src", "images/btn2.png");
  }, function(){
    // 画像を入れ替える
    $(":image").attr("src", "images/btn.png");
  });
});