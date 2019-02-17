$("#main").on("pageshow", function(e, d){
  // 現在のページURLを読み出す
  var url = $.mobile.activePage.context.documentURI;
  // 現在のページIDを読み出す
  var id = e.target.id;
  // ページに出力
  $("output").html($("output").html()+id+"<br>"+url);
});
$("#info").on("pageshow", function(e, d){
  // 現在のページURLを読み出す
  var url = $.mobile.activePage.context.documentURI;
  // 現在のページIDを読み出す
  var id = e.target.id;
  // ページに出力
  $("output").html($("output").html()+id+"<br>"+url);
});
