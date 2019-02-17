$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // noteクラスの要素を置き換える
    $("#damList .note").replaceWith('<li><img src="images/note.png">撮影済み</li>');
  });
});