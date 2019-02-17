$(function(){
  // a要素をグラフィカルなボタンにする
  $("a").button({
    icons: {
      // ボタンの先頭のアイコンを指定する
      primary: "ui-icon-alert" ,
      // ボタンの末尾のアイコンを指定する
      secondary: "ui-icon-triangle-1-s"
    }
  });
  // アイコン変更のボタンにclickイベントを割り当てる
  $("#change").click(function(){
    $("a").button("option", "icons", {
      // ボタンの先頭のアイコンを鍵マークに変更する
      // 末尾のアイコンは指定していないため削除される
      primary: "ui-icon-locked"
    });
  });
});