$(function(){
  // 空っぽのオブジェクトを生成しテストの結果を代入
  var a = { }
  var flag1 = $.isEmptyObject(a);
  // オブジェクトを生成しテストの結果を代入
  var b = new Object(123);
  var flag2 = $.isEmptyObject(b);
  // 中身のあるオブジェクトを生成しテストの結果を代入
  var c = { pi : 3.14, e : 2.71 };
  var flag3 = $.isEmptyObject(c);
  // 空っぽの配列を生成しテストの結果を代入
  var d = [ ];
  var flag4 = $.isEmptyObject(d);
  // 中身のあるオブジェクトを生成しテストの結果を代入
  var e = { };
  e.pi = 3.14;
  var flag5 = $.isEmptyObject(e);
  // 結果を出力
  $("output:first").html("a："+flag1+"<br>b："+flag2+"<br>c："+flag3+
    "<br>d："+flag4+"<br>e："+flag5);
});