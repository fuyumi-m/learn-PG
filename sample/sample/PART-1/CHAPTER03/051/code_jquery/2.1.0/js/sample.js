$(function(){
  $(":button").click(function(){
    $(":reset").each(function(){
      // 要素に枠を付ける
      $(this).css("border", "2px dotted red");
    });
  });
});