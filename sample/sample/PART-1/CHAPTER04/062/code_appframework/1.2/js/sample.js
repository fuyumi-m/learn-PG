$(function(){
  // 最初のボタンにイベントを割り当て
  $("#setProp").click(function(){
    // img要素にtaxプロパティを追加
    $("#coin").prop("tax", 0.1);
  });
  // 2番目のボタンにイベントを割り当て
  $("#readProp").click(function(){
    // img要素のtaxプロパティを表示
    alert($("#coin").prop("tax"));
  });
  // 3番目のボタンにイベントを割り当て
  $("#removeProp").click(function(){
    // img要素のtaxプロパティを削除
    $("#coin").removeProp("tax");
  });
});