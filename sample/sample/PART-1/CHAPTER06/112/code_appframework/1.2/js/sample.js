$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // ID名imageList内の画像を囲んでいるdiv要素を削除する
    $("#imageList img").unwrap();
  });
});