$(function(){
  // ボタンにclickイベントを割り当て
  $("#btn").click(function(){
    // 要素に枠を付ける
    $(":image").css("border", "4px solid blue");
  });
});