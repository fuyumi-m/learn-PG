$("#pageLoad").on("click", function(e, d){
  // about.htmlを読み込みキャッシュする
  $.mobile.loadPage("about.html", {
    showLoadMsg: true
  });
  $("output").text("読み込み完了");
});
