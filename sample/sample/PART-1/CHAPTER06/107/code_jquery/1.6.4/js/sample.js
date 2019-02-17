$(function(){
  $(":button").click(function(){
    // 最初のoutput要素の内容をHTMLとして読み出し
    var content = $("output:first").html();
    // 乱数値を追加
    content = content + "<p>"+Math.random()+"</p>";
    // output要素にHTMLとして出力
    $("output:first").html(content);
  });
});