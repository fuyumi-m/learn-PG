$(function(){
  // 最初のボタンにイベントを割り当てる
  $(":button:eq(0)").click(function(){
    // img要素のalt属性を読み出し表示する
    var altText = $("#imageList img:first").attr("alt");
    $("output:first").text(altText);
  });
  // 2番目のボタンにイベントを割り当てる
  $(":button:eq(1)").click(function(){
    // img要素のtitle属性に文字を設定する
    $("#imageList img:first").attr("title", "国宝です");
  });
});