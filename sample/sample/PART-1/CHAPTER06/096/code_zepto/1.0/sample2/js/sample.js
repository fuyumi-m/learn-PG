$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // noteクラスの要素を置き換える
    $("#damList .note").replaceWith(function(){
      return '<li>'+$(this).text()+'<img src="images/note.png">撮影済み</li>';
    });
  });
});