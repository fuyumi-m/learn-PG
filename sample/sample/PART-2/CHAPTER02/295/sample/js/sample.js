$(function(){
  // jQuery UIのセレクトメニューを設置する
  var menu = $("#mySelectMenu").selectmenu();
  // ボタンにclickイベントを割り当てる
  $("#disableMenu").click(function(){
    // セレクトメニューを無効にする
    $("#mySelectMenu").selectmenu("option", "disabled", true);
  });
  // ボタンにclickイベントを割り当てる
  $("#enableMenu").click(function(){
    // セレクトメニューを有効にする
    $("#mySelectMenu").selectmenu("option", "disabled", false);
  });
});