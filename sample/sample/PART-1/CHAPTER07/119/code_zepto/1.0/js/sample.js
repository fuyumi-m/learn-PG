$(function(){
  // 最初のボタンにイベントを割り当て
  $("#btn1").click(function(){
    // h1要素の内側の横幅と縦幅を読み出し
    var w = $("h1").innerWidth();
    var h = $("h1").innerHeight();
    alert("内側の横幅："+w+"、縦幅："+h);
  });
  // 2番目のボタンにイベントを割り当て
  $("#btn2").click(function(){
    // h1要素の内側の横幅と縦幅を読み出し
    var w = $("h1").outerWidth();
    var h = $("h1").outerHeight();
    alert("外側の横幅："+w+"、縦幅："+h);
  });
  // 3番目のボタンにイベントを割り当て
  $("#btn3").click(function(){
    // h1要素の内側の横幅と縦幅を読み出し
    var w = $("h1").outerWidth(true);
    var h = $("h1").outerHeight(true);
    alert("枠を含む外側の横幅："+w+"、縦幅："+h);
  });
});