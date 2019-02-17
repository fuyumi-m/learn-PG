$(function(){
  // 最初のボタンにイベントを割り当て
  $(":button:first").click(function(){
    // img要素にtaxプロパティを追加
    $("#coin").prop("tax", 0.1);
  });
  // 2番目のボタンにイベントを割り当て
  $(":button:eq(1)").click(function(){
    // img要素のtaxプロパティを表示
    alert($("#coin").prop("tax"));
  });
  // 3番目のボタンにイベントを割り当て
  $(":button:eq(2)").click(function(){
    // img要素のtaxプロパティを削除
    $("#coin").removeProp("tax");
  });
});