$(function(){
  // スライダーを設置する
  $("#myslider1").slider();
  // リアルタイムに数値が表示されるスライダーを設置する
  $("#myslider2").slider({
    // ハンドルをドラッグ中の場合にスライダー値を表示する
    slide: function( event, ui ){
      // スライダー値を読み出す
      var val = ui.value;
      // スライダー値を表示する
      $("#result").html("風量："+val);
    },
    // ハンドルを離した場合にスライダー値を表示する
    change: function( event, ui ){
      // スライダー値を読み出す
      var val = ui.value;
      // スライダー値を表示する
      $("#result").html("風量："+val+"に決定しました");
    }
  });
});