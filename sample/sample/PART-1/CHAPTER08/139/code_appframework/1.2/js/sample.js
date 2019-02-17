$(function(){
  // 最初のボタンにclickイベントを割り当てる
  $(document).on("click", "#btn1", function(evt) {
    // 画像のカスタムイベントを呼び出す
    $("img").trigger("changeOpacity.gallery");
  });
  // 2番目のボタンにclickイベントを割り当てる
  $(document).on("click", "#btn2", function(evt) {
    // 画像のカスタムイベントを呼び出す
    $("img").trigger("changeOpacity.swap");
  });
  // 画像にカスタムイベントのイベントハンドラを設定する
  $("img").on("changeOpacity.gallery", "img", message);
  $("img").on("changeOpacity.swap", "img", message);
  // カスタムイベント発生時に呼び出されるイベントハンドラ
  function message(evt){
    // 名前空間を取得する
    var ns = evt.namespace;
    // カスタムイベントの名前空間を表示
    $("#result").text(ns);
  }
});