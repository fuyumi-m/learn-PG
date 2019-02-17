$(function(){
  // Windowオブジェクトかどうか調べ結果を代入
  var a = window
  var flag1 = $.isWindow(a);
  // オブジェクトを生成しテストの結果を代入
  var b = new Object();
  var flag2 = $.isWindow(b);
  // 結果を出力
  $("output:first").html("a："+flag1+"<br>b："+flag2);
});