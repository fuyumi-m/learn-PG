$(function(){
  // ボタンにイベントを割り当て
  $("#btn").click(function(){
    // h1要素のcautionクラスのON/OFFを切り換える
    $("h1").toggleClass("caution");
  });
});