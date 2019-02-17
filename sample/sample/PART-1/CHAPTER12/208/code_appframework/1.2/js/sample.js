$(function(){
  // ボタンにクリックイベントを割り当て
  $("#check").click(function(){
    // 不透明度をサポートしているか調べる
    var flag = $.support.opacity;
    // 結果を表示する
    $("#result").text("opacity : "+flag);
  });
});