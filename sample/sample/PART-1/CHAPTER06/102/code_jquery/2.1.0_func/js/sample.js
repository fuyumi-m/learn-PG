$(function(){
  $(":button").click(function(){
    // 文字列をID名piの後に挿入
    $("#pi").after(function(){ return "XYZ"; });
  });
});