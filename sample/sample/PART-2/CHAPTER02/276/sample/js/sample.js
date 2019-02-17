$(function(){
  // 縦型のスライダーを設置する
  $("#myslider").slider({
    // 縦型スライダーにする
    orientation : "vertical",
    // 初期値を設定する
    value : 50,
    // ハンドルをドラッグ中の場合にスライダー値を表示する
    slide: function( event, ui ){
      // スライダー値を読み出す
      var val = ui.value;
      // スライダー値を表示する
      $("#result").html("音量："+val);
    },
  });
});