$(function(){
  // ボタンにイベントを割り当て
  $("#btn").click(function(){
    // img要素のonclick属性を削除
    $("#myPhoto").removeAttr("onclick");
  });
});