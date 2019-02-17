$(function(){
  // 最初のボタンにイベントを割り当て
  $("#readCSS").click(function(){
    // h1要素の横幅を読み出しアラートダイアログに表示
    alert($("#myHeader").css("width"));
  });
  // 2番目のボタンにイベントを割り当て
  $("#setCSS").click(function(){
    // h1要素の横幅を320pxに設定
    $("#myHeader").css("width", "320px");
  });
});