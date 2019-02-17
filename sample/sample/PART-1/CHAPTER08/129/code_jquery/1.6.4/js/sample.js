$(function(){
  // 画像にclickイベントを設定する
  $("img").bind("click", function(){
    // イベントが発生した事を示す文字を表示
    $("output:first").text("clickイベント発生");
  });
  // 画像にmouseoverイベントを設定する
  $("img").bind("mouseover", function(){
    // イベントが発生した事を示す文字を表示
    $("output:first").text("mouseoverイベント発生");
  });
  // 画像にmouseoutイベントを設定する
  $("img").bind("mouseout", function(){
    // イベントが発生した事を示す文字を表示
    $("output:first").text("mouseoutイベント発生");
  });
  // clickイベント解除ボタンの処理
  $("#one").click(function(){
    // clickイベントのみ解除
    $("img").unbind("click");
    // clickイベントを解除した事を示す文字を表示
    $("output:first").text("clickイベントを解除しました");
  });
  // 全てのイベント解除ボタンの処理
  $("#all").click(function(){
    // 全イベントを解除
    $("img").unbind();
    // 全イベントを解除した事を示す文字を表示
    $("output:first").text("全てのイベントを解除しました");
  });
});