$(function(){
  // スライダーを設置する
  $("#myslider").slider({
    // スライダーのステップを設定する
    step : 20,
    // ハンドルをドラッグ中の場合にスライダー値を表示する
    slide: function( event, ui ){
      // スライダー値を読み出す
      var val = ui.value;
      // スライダー値を表示する
      $("#result").html(val+"個発注");
    },
  });
});