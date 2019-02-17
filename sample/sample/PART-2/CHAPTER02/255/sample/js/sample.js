$(function(){
  // a要素をグラフィカルなボタンにする
  $("a").button({
    icons: {
      // ボタンの先頭のアイコンを指定する
      primary: "ui-icon-image"
    },
    text: false
  });
  // ボタンにclickイベントを割り当てる
  $("#change").click(function(){
    $("a:eq(0)").button("option", "text", true );
  });
});