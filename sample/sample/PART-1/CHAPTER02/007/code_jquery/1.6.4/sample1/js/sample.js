// jQueryオブジェクトを$でなくjqを使ってアクセスする
var jq = jQuery.noConflict();
// jqオブジェクトを使って処理
jq(function(){
  // jqオブジェクトを使って処理
  jq("#result").text("処理は完了しました");
  // jQueryオブジェクトを使って処理
  jQuery("#result").css("border", "2px solid red");
});