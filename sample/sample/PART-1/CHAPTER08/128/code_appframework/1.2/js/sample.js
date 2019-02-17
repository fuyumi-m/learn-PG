$(function(){
  // 最初のボタンにイベントを割り当てる
  $("#btn1").on("click", function(){
    // 画像を追加する
    $("#basePoint").append('<img src="images/photo1.jpg" width="160" height="120" alt="">');
  });
  // 2番目のボタンにイベントを割り当てる
  $("#btn2").on("click", function(){
    // 全ての画像のイベントを解除する
    $(document).off("click", "img");
  });
  // document上にある全ての画像にクリックイベントを割り当てる
  $(document).on("click", "img", function(){
    // クリックしたらアラートダイアログを表示する
    alert("クリックされました");
  });
});