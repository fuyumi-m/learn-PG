$("#info").on("click", function(e,d){
  // 同一ページ内のinfoに移動する
  $.mobile.changePage("#info");
});
$("#about").on("click", function(e,d){
  // about.htmlページに移動する
  $.mobile.changePage("about.html");
});
