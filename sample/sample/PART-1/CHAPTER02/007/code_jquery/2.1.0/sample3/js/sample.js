// jQueryオブジェクトをjQuery, $でなくjqを使ってアクセスする
var jq = jQuery.noConflict(true);
// jqオブジェクトを使って処理
jq(function(){
  // jqオブジェクトを使って処理
  jq("output").text("処理は完了しました");
  // prototype.jsの$を使って処理
  $("result").style.color = "red";
});