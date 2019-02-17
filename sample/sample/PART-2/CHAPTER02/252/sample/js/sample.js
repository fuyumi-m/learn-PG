$(function(){
  // 最初のボタンをグラフィカルなボタンにし無効にする
  $("a:eq(0)").button({ disabled : true });
  // 2番目以降のボタンをグラフィカルなボタンにする
  $("a:gt(0)").button();
  // 3秒後に最初のボタンを有効にする
  setTimeout(function(){
    // ボタンを有効になるように設定する
    $("a:eq(0)").button("option", "disabled", false);
  }, 5*1000);
});