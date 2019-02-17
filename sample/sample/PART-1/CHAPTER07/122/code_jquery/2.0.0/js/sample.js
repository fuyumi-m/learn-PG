$(function(){
  // 最初のボタンにイベントを割り当て
  $("#btn1").click(function(){
    // div要素のスクロール位置(上下のスクロール量)を読み出し
    var y = $("#memo").scrollTop();
    alert("縦のスクロール量："+y);
  });
  // 2番目のボタンにイベントを割り当て
  $("#btn2").click(function(){
    // div要素のスクロール位置(上下のスクロール量)を読み出し
    $("#memo").scrollTop(20);
  });
});