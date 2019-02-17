$(function(){
  $(":button").click(function(){
    // ID名msgの要素をID名piの前に挿入
    $("#msg").insertBefore("#pi");
  });
});