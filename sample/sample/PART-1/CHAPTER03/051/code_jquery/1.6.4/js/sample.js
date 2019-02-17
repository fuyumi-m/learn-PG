$(function(){
  // ボタンにclickイベントを割り当てる
  $(":button").click(function(){
    // 要素に枠を付ける
    $(":reset").css("border", "2px dotted red");
  });
});