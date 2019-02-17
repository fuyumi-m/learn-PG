$(function(){
  // ボタンにイベントを割り当て
  $("#btn").click(function(){
    // h1要素のbody要素からの相対位置を読み出し
    var coords = $("h1").position();
    var x = coords.left;
    var y = coords.top;
    alert("X："+x+"、Y："+y);
  });
});