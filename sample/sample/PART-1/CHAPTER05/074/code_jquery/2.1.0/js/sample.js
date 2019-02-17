$(function(){
  // 3番目のtr要素を指定する
  $("#sale tr").eq(2).css("background-color", "orange");
  // 末尾から5番目のtr要素を指定する
  $("#sale tr").eq(-5).css("background-color", "yellow");
});