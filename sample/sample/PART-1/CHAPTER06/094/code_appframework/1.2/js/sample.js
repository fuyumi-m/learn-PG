$(function(){
  // ボタンにイベントを割り当てる
  $("#btn").click(function(){
    // 表の温度の部分だけを消去する
    $("#temp tr td").each(function(index, item){
      if (index & 1){
        $(this).empty();
      }
    });
  });
});