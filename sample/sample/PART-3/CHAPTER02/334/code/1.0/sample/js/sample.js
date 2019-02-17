$("#dialog01").live("pageinit", function(){
  $("#yes").click(function(){
    $(".ui-dialog").dialog("close");
  });
});