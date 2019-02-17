// readyイベントを発行しないようにする
$.holdReady(true);
// 処理1と表示する
$("#result").html("処理1を実行<br>");
// ボタンにイベントを割り当てる
$("#btn").click(function(){
  // readyイベントの保留を解除。これでreadyイベントが発行される。
  $.holdReady(false);
});
// 以下はreadyイベント発行時に処理される
$(function(){
  // 処理2と表示する
  var htmlData = $("#result").html();
  $("#result").html(htmlData+"処理2を実行<br>");
});