$(function(){
  $(":button").click(function(){
    // 文字列をID名piの前に挿入
    $("#pi").before(function(){ return "SNK ASO"});
  });
});