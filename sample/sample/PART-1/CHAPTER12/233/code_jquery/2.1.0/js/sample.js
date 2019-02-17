// readyイベントを発行しないようにする
$.holdReady(true);
// 処理1と表示する
$("output:first").html("処理1を実行<br>");
// ボタンにイベントを割り当てる
$(":button:first").click(function(){
  // readyイベントの保留を解除。これでreadyイベントが発行される。
  $.holdReady(false);
});
// 以下はreadyイベント発行時に処理される
$(function(){
  // 処理2と表示する
  var htmlData = $("output:first").html();
  $("output:first").html(htmlData+"処理2を実行<br>");
});