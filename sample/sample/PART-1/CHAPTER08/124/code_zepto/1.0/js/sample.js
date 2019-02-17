$(function(){
  // ボタンにイベントを割り当てる
  $("#btn").on("click", function(){
    // 画像を追加する
    $("#basePoint").append('<img src="images/photo1.jpg" width="160" height="120" alt="">');
  });
  // 最初からある画像だけにフェード効果を設定する
  $("img").on("mouseover", function(){
    $(this).fadeTo("fast", 0.25);
  });
  $("img").on("mouseout", function(){
    $(this).fadeTo("fast", 1.0);
  });
  // document上にある全ての画像にクリックイベントを割り当てる
  $(document).on("click", "img", function(){
    // クリックしたらアラートダイアログを表示する
    alert("クリックされました");
  });
});