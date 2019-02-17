$(function(){
  // input要素を取得
  var ele = $("input");
  // 最初の要素の背景色をオレンジ色にする
  ele.first().css("background", "orange");
  // 最後の要素の背景色をオレンジ色にする
  ele.last().css("background", "gray");
});