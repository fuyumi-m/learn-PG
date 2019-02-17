$(function(){
  $("#btn").click(function(){
    // 最初のoutput要素の内容をHTMLとして読み出し
    var content = $("#result").html();
    // 乱数値を追加
    content = content + "<p>"+Math.random()+"</p>";
    // output要素にHTMLとして出力
    $("#result").html(content);
  });
});