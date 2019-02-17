$(function(){
  // 画像にクリックイベントを割り当てる
  $("#photo1").click(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(250, 0.25);
    setTimeout(function(){
      $("#photo1").fadeTo(200, 1.0);
    }, 2000);
    // クリックした事を示すためメッセージを表示
    $("#result").text("画像でクリックイベント発生："+Date.now());
  });
  // ボタンにクリックイベントを割り当てる
  $("#sendEvent").click(function(){
    // 画像にclickイベントを送信
    $("#photo1").trigger("click");
  });
});