// グローバル変数に数値を代入する
var num = 123;
$(function(){
  // 結果を入れる変数を用意
  var result = "";
  // ローカル変数に456を代入する
  var num = 456;
  // このeval()だとローカルコンテキストなので456が表示される
  var n = eval("alert(num)");
  // グローバルでeval()なのでグローバル変数の値の123が表示される
  var n = $.globalEval("alert(num)");
});
