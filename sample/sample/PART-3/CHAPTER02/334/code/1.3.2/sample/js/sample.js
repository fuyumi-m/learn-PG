$("#dialog01").on("pageinit", function(){
  $("#yes").click(function(){
    $(".ui-dialog").dialog("close");
  });
});