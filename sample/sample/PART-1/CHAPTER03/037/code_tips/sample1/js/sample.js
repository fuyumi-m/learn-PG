$(function(){
  $(":button").click(function(){
    $(":disabled").each(function(){
      // テキストフィールドだけを対象にする
      if($(this).attr("type") == "text"){
        // 要素のdisable属性を削除する
        $(this).removeAttr("disabled");
      }
    });
  });
});
