$(function(){
  // ボタンにclickイベントを割り当てる
  $(":button").click(function(){
    // value属性値がNexusではない要素を対象にする
    $("input[value!='Nexus']").each(function(){
      // テキストフィールドだけを対象にする
      if($(this).attr("type") == "text"){
        // 背景色をオレンジ色にする
        $(this).css("background", "orange");
      }
    });
  });
});