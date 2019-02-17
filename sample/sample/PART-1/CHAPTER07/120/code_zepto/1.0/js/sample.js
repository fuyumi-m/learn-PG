$(function(){
  // 最初のボタンにイベントを割り当て
  $("#btn1").click(function(){
    // h1要素の横幅と縦幅を読み出し
    var coords = $("h1").offset();
    var x = coords.left;
    var y = coords.top;
    alert("X："+x+"、Y："+y);
  });
  // 2番目のボタンにイベントを割り当て
  $("#btn2").click(function(){
    // h1要素の横幅と縦幅を設定
    $("h1").offset({ left: 20, top: 40 });
  });
});