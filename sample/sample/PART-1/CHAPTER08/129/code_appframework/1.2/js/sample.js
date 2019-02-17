$(function(){
  // 画像にclickイベントを設定する
  $("img").bind("click", function(){
    // イベントが発生した事を示す文字を表示
    $("#result").text("clickイベント発生");
  });
  // 画像にmouseoverイベントを設定する
  $("img").bind("mouseover", function(){
    // イベントが発生した事を示す文字を表示
    $("#result").text("mouseoverイベント発生");
  });
  // 画像にmouseoutイベントを設定する
  $("img").bind("mouseout", function(){
    // イベントが発生した事を示す文字を表示
    $("#result").text("mouseoutイベント発生");
  });
  // clickイベント解除ボタンの処理
  $("#one").bind("click", function(){
    // clickイベントのみ解除
    $("img").unbind("click");
    // clickイベントを解除した事を示す文字を表示
    $("#result").text("clickイベントを解除しました");
  });
  // 全てのイベント解除ボタンの処理
  $("#all").bind("click", function(){
    // 全イベントを解除
    $("img").unbind();
    // 全イベントを解除した事を示す文字を表示
    $("#result").text("全てのイベントを解除しました");
  });
});