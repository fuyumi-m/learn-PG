$(function(){
  // ボタンにclickイベントを割り当てる
  $("#btn").click(function(){
    // 要素に枠をつける
    $(":submit").css("border", "2px dotted red");
  });
});