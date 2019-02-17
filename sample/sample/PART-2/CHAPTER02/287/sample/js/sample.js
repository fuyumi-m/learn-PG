$(function(){
  // タブ機能を設定する
  $("#mashroom").tabs({
    // 2番目のタブ番号を無効にする
    disabled: [1]
  });
  // ボタンにclickイベントを割り当てる
  $("#disAll").click(function(){
    // 全てのタブを無効にする
    $("#mashroom").tabs("option", "disabled", true);
  });
  // ボタンにclickイベントを割り当てる
  $("#enaAll").click(function(){
    // 全てのタブを有効にする
    $("#mashroom").tabs("option", "disabled", false);
  });
  // ボタンにclickイベントを割り当てる
  $("#dispart").click(function(){
    // 最初と最後のタブを無効にする
    $("#mashroom").tabs("option", "disabled", [0, 2]);
  });
});