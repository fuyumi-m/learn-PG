$(function(){
  // 見出し要素にマウスが乗った／離れた場合に処理
  $(":header").hover(function(){
    // マウスが乗ったら背景色をオレンジ色にする
    $(this).css("background-color", "orange");
  }, function(){
    // マウスが離れたら背景色を白色にする
    $(this).css("background-color", "white");
  });
});