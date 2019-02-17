$(function(){
  // オブジェクトを生成しテストの結果を代入
  var a = { }
  var flag1 = $.isPlainObject(a);
  // オブジェクトを生成しテストの結果を代入
  var b = new Object();
  var flag2 = $.isPlainObject(b);
  // オブジェクト(数値)を生成しテストの結果を代入
  var c = new Object(39);
  var flag3 = $.isPlainObject(c);
  // オブジェクトを生成しテストの結果を代入
  var d = { e : 2.71, pi : 3.14 };
  var flag4 = $.isPlainObject(d);
  // オブジェクトを生成しテストの結果を代入
  var e = "JavaScript";
  var flag5 = $.isPlainObject(e);
  // 結果を出力
  $("output:first").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+
    "<br>d："+flag4+"<br>e："+flag5);
});