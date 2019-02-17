$(function(){
  // jQuery UIのセレクトメニューを設置する
  $("#mySelectMenu").selectmenu();
  // ボタンにclickイベントを割り当てる
  $("#destroyMenu").click(function(){
    // メニューを破棄する
    $("#mySelectMenu").selectmenu("destroy");
  });
});