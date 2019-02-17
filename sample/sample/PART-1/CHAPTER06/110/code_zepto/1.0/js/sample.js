$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の画像をdiv要素、markクラスで囲む
    $("#imageList img").wrap('<div class="mark">');
  });
});