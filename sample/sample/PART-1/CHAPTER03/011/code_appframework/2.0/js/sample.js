$(function(){
  // ボタンにイベントを割り当て
  $("#btn").click(function(){
    // src属性がある要素に赤い枠をつける
    $("[src]").css("border", "4px solid red");
  });
});