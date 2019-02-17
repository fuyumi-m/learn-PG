$(function(){
  // jQuery UIのセレクトメニューを設置する
  $("#mySelectMenu").selectmenu({
    // イベントハンドラを設定する
    change : function(evt, ui){
      // 選択項目（文字）を読み出す
      var v = ui.item.value;
      // 選択番号を読み出す
      var n = ui.item.index;
      // 選択番号と項目を表示する
      $("#result").text(n+" : "+v);
    }
  });
});