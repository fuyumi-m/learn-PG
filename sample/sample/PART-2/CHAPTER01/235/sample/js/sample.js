$(function(){
  // 画像をドラッグ可能にする
  $("img").draggable();
  // ドロップ領域を設定する
  $("#dropZone").droppable({
    drop : function(evt, ui){
      // ドロップされた画像のalt属性を表示する
      $("#dropZone").text(ui.draggable[0].alt);
    }
  });
});