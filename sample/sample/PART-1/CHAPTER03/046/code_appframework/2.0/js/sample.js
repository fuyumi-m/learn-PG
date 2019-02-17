$(function(){
  // ボタンにclickイベントを割り当てる
  $("#btn").click(function(){
    // downクラスでないtd要素の文字色を黒にする
    $("td:not(.down)").css("color", "black");
  });
});