$(function(){
  // ボタンにイベントを割り当て
  $(":button").click(function(){
    // img要素のonclick属性を削除
    $("#myPhoto").removeAttr("onclick");
  });
});