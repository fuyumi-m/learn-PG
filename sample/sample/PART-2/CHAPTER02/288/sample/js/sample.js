$(function(){
  // タブ機能を設定する
  $("#mashroom").tabs();
  // ボタンにclickイベントを割り当てる
  $("#deleteTab").click(function(){
    // タブそのものを削除する
    $("#mashroom").tabs("destroy");
  });
});