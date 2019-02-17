$(function(){
  // Arrayを生成し配列テストの結果を代入
  var a = new Array();
  var flag1 = $.isArray(a);
  // Objectを生成し配列テストの結果を代入
  var b = new Object();
  var flag2 = $.isArray(b);
  // Numberを生成し配列テストの結果を代入
  var c = new Number();
  var flag3 = $.isArray(c);
  // 結果を出力
  $("#result").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3);
});