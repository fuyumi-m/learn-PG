$(function(){
  // ボタンにclickイベントを割り当て
  $(":button").click(function(){
    // td要素が親要素なら背景色をオレンジ色にする
    $("td:parent").css("background-color", "orange");
  });
});