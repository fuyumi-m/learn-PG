$(function(){
  // ツールチップを設定する
  $("#seList a").tooltip({
    // 表示位置を設定する
    position: {
      // ツールチップの右下を基準にする
      my: "right bottom",
      // 要素の位置を横を中央、縦を上側にする
      at: "center top"
    }
  });
});