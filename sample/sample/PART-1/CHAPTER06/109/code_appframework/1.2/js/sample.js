$(function(){
  // 最初のボタンにイベントを割り当てる
  $("#readAttr").click(function(){
    // img要素のalt属性を読み出し表示する
    var altText = $("#myPhoto").attr("alt");
    $("#result").text(altText);
  });
  // 2番目のボタンにイベントを割り当てる
  $("#setAttr").click(function(){
    // img要素のtitle属性に文字を設定する
    $("#myPhoto").attr("title", "国宝です");
  });
});