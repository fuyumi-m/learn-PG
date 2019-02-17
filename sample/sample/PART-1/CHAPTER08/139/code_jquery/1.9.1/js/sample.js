$(function(){
  // 最初のボタンにclickイベントを割り当てる
  $("button:eq(0)").click(function(evt) {
    // 画像のカスタムイベントを呼び出す
    $("img").trigger("changeOpacity.gallery");
  });
  // 2番目のボタンにclickイベントを割り当てる
  $("button:eq(1)").click(function(evt) {
    // 画像のカスタムイベントを呼び出す
    $("img").trigger("changeOpacity.swap");
  });
  // 画像にカスタムイベントのイベントハンドラを設定する
  $("img").on("changeOpacity.gallery", message);
  $("img").on("changeOpacity.swap", message);
  // カスタムイベント発生時に呼び出されるイベントハンドラ
  function message(evt){
    // 名前空間を取得する
    var ns = evt.namespace;
    // カスタムイベントの名前空間を表示
    $("output:first").text(ns);
  }
});