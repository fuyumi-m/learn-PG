$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // ID名imageList内のdiv要素内にさらにdiv要素を入れる
    $("#imageList div").wrapInner('<div class="note">');
  });
});