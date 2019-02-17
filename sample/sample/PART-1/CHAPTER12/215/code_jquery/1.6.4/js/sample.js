$(function(){
  // 関数を生成しテストの結果を代入
  var a = function(){ var i = 4649; }
  var flag1 = $.isFunction(a);
  // bにaの参照を入れた後、テストの結果を代入
  var b = a;
  var flag2 = $.isFunction(b);
  // Numberを生成しテストの結果を代入
  var c = new Number();
  var flag3 = $.isFunction(c);
  // Functionを生成しテストの結果を代入
  var d = new Function();
  var flag4 = $.isFunction(d);
  // 結果を出力
  $("output:first").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+"<br>d："+flag4);
});