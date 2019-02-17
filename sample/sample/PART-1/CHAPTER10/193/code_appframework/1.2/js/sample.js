$(function(){
  // オブジェクトを生成
  var obj = { name : "C&R研究所", year : 1991, month : 7 };
  // オブジェクトをシリアライズ
  var result = $.param(obj);
  // シリアライズした結果を表示する
  $("#result").text(result);
});