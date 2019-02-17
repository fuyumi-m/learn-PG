$(function(){
  // ダイアログを生成する
  $("#message").dialog({
    // 横幅を指定する
    width : 500,
    // 縦幅を指定する
    height: 200,
    // 最小の横幅を指定する
    minWidth : 100,
    // 最小の縦幅を設定する
    minHeight : 80,
    // 最大の横幅を指定する
    maxWidth : 600,
    // 最大の縦幅を指定する
    maxHeight : 400
  });
});