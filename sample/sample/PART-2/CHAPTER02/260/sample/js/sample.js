$(function(){
  // ダイアログを生成する
  $("#message").dialog({
    // 位置を指定する
    position : {
      // ダイアログの左上を基準にする
      my : "left top",
      // 左から10px、上から50pxに配置する
      at : "left+30 top+80"
    }
  });
});