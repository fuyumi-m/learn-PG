$(function(){
  // 最初のボタンにイベントを割り当て
  $("#getWidth").click(function(){
    // h1要素の横幅と縦幅を読み出し
    var w = $("h1").width();
    var h = $("h1").height();
    alert("横幅："+w+"、縦幅："+h);
  });
  // 2番目のボタンにイベントを割り当て
  $("#setWidth").click(function(){
    // h1要素の横幅と縦幅を設定
    $("h1").width("320px");
    $("h1").height("140px");
  });
});