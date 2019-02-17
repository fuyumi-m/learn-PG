$(function(){
  $(":header").hover(function(){
    $(this).css("background-color", "orange");
  }, function(){
    $(this).css("background-color", "white");
  });
});