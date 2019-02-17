$(function(){
  // ボタンにclickイベントを割り当てる
  $("#btn").click(function(){
    // noteのID名を持つ要素の背景色をオレンジ色にする
    $("#note").css("background", "orange");
  });
});