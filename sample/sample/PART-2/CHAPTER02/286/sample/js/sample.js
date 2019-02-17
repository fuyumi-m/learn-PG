$(function(){
  // タブ機能を設定する
  $("#mashroom").tabs({
    // アクティブにするタブ番号を指定する。3番目のタブがアクティブになる。
    active: 2
  });
  // ボタンにclickイベントを割り当てる
  $("#set2").click(function(){
    // 2番目のタブをアクティブにする
    $("#mashroom").tabs("option", "active", 1);
  });
});