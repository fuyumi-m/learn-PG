$(function(){
  // a要素をグラフィカルなボタンにする
  $("a:eq(0)").button({
    // ボタンの文字を設定する
    label: "剣士"
  });
  $("a:eq(1)").button({ label: "魔道士" });
  $("a:eq(2)").button({ label: "商人" });
  // アイコン変更のボタンにclickイベントを割り当てる
  $("#change").click(function(){
    $("a:eq(0)").button("option", "label", "ファイター" );
  });
});