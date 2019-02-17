$(function(){
  // ボタンにclickイベントを割り当てる
  $(":button").click(function(){
    // noteのID名を持つ要素の背景色をオレンジ色にする
    $("#note").css("background", "orange");
  });
});