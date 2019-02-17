$(function(){
  $(":button").click(function(){
    $("[type=text]:enabled").each(function(){
      // 背景色をオレンジ色にする
      $(this).css("background", "orange");
    });
  });
});