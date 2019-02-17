$("#to400").live("click", function(e,d){
  // 上から400pxに移動
  $.mobile.silentScroll(400);
});
$("#toTop").live("click", function(e,d){
  // 先頭に移動
  $.mobile.silentScroll();
});
