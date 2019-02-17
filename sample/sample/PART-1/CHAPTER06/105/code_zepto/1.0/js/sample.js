$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内のdiv要素内にさらにdiv要素を入れる
    $("#imageList div").wrapInner('<div class="note">');
  });
});