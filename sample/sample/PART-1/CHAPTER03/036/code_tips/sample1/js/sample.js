$(function(){
  $(":button").click(function(){
    $(":enabled").each(function(){
      // テキストフィールドだけを対象にする
      if($(this).attr("type") == "text"){
        // 要素をdisableにする
        $(this).attr("disabled", "disabled");
      }
    });
  });
});
