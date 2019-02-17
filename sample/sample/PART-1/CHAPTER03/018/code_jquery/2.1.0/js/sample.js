$(function(){
  // ボタンにclickイベントを割り当てる
  $(":button").click(function(){
    // 最初のinput要素を指定する
    $("input:first").each(function(){
      // 背景色をオレンジ色にする
      $(this).css("background", "orange");
    });
  });
});