$(function(){
  $(":button").click(function(){
    // 文字列をID名piの後に追加
    $("#pi").append(function(){ return "c and r"}, "<span>です。</span>");
  });
});