$(function(){
  // ボタンにイベントを割り当てる
  $(":button").click(function(){
    // 表の温度の部分だけを消去する
    $("#temp tbody tr td:odd").empty();
  });
});