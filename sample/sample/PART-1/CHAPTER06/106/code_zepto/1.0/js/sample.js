$(function(){
  $("#btn").click(function(){
    // 最初のoutput要素の内容をテキストとして読み出し
    var content = $("#result").text();
    // 乱数値を追加
    content = content + Math.random() + ", ";
    // output要素にテキストとして出力
    $("#result").text(content);
  });
});