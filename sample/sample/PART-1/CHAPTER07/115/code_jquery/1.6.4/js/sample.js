$(function(){
  // 最初のボタンにイベントを割り当て
  $("#checkClass").click(function(){
    // h1要素にcautionクラスがあるか調べる
    alert($("h1").hasClass("caution"));
  });
  // 2番目のボタンにイベントを割り当て
  $("#addClass").click(function(){
    // h1要素にcautionクラスを追加
    $("h1").addClass("caution");
  });
});