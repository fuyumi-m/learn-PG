$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // ID名imageList内の画像全部をdiv要素、markクラスで囲む
    $("#imageList img").wrapAll('<div class="mark">');
  });
});