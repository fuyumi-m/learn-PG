$(function(){
  // ボタンにclickイベントを割り当てる
  $(":button").click(function(){
    // 背景色をオレンジ色にする
    $("input[type=text]:last").css("background", "orange");
  });
});