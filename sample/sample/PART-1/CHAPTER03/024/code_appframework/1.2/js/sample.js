$(function(){
  // 偶数番目の背景色をオレンジ色にする
  $("#sale tbody tr:even").css("background-color", "orange");
  // 奇数番目の背景色を黄色にする
  $("#sale tbody tr:odd").css("background-color", "yellow");
});