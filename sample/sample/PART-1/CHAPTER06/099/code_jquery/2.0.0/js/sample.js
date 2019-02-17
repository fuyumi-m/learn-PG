$(function(){
  $(":button").click(function(){
    // ID名msgの要素をID名piの後に挿入
    $("#pi").insertAfter("#msg");
  });
});