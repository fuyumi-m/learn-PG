// $をalertとして割り当てる
var $ = alert;
// jQueryオブジェクトを$として渡す
(function($) {
  $(function() {
  // jqオブジェクトを使って処理
  $("output").text("処理は完了しました");
  // prototype.jsの$を使って処理
  $("#result").css("color", "red");
  });
})(jQuery.noConflict(true));
// アラートダイアログを表示
$("衝突回避");
