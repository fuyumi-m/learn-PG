$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // noteクラスの要素を置き換える
    $('<li><img src="images/note.png">撮影済み</li>').replaceAll("#damList .note");
  });
});