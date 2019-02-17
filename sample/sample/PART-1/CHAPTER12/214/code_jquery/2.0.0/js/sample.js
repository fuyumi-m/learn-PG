$(function(){
  // 数値を生成しテストの結果を代入
  var a = new Number(5963);
  var flag1 = $.isNumeric(a);
  // 指数形式で指定し、テストの結果を代入
  var b = 3.14e2;
  var flag2 = $.isNumeric(b);
  // Numberを生成しテストの結果を代入
  var c = new Number();
  var flag3 = $.isNumeric(c);
  // Functionを生成しテストの結果を代入
  var d = new Function();
  var flag4 = $.isNumeric(d);
  // 正の無限大を生成しテストの結果を代入
  var e = Infinity;
  var flag5 = $.isNumeric(e);
  // 結果を出力
  $("output:first").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+
    "<br>d："+flag4+"<br>e："+flag5);
});