$(function(){
  // 最初のボタンにイベントを割り当て
  $("#btn1").click(function(){
    $("img:hidden").each(function(){
      // 要素に枠を付ける
      $(this).css("border", "4px solid blue");
    });
  });
  // 2番目のボタンにイベントを割り当て
  $("#btn2").click(function(){
    $("img").show();
  });
});