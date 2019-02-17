$(function(){
  // ダイアログを生成する
  $("#message").dialog({
    // 自動的に表示されないように設定する
    autoOpen : false
  });
  // ボタンがクリックされた時の処理
  $("#openDlg").click(function(){
    // ダイアログを表示する
    $("#message").dialog("open");
  })
});