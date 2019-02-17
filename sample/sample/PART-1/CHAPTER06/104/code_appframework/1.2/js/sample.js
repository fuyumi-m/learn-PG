$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // noteクラスの前にimg要素を挿入する
    $('<img src="images/note.png">').prependTo(".note");
  });
});