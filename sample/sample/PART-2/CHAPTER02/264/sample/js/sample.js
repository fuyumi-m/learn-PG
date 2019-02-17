$(function(){
  // ダイアログを生成する
  $("#message").dialog({ autoOpen : false });
  // ボタンがクリックされた時の処理
  $("#openDlg").click(function(){
    var flag = $("#message").dialog("isOpen");
    if (flag == true){
      alert("すでにダイアログは開かれています");
      return;
    }
    // ダイアログを表示する
    $("#message").dialog("open");
    // 5秒経過したら自動的に閉じる
    setTimeout(function(){
      $("#message").dialog("close");
    }, 5*1000);
  })
});