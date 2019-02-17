$(function(){
  // スライダーを設置する
  $("#myslider").slider({
    // スライダー値を表示する
    slide: function( event, ui ){
      // 開始値を読み出す
      var startValue = ui.values[0];
      // 終了値を読み出す
      var endValue = ui.values[1];
      // 値を表示する
      $("#result").html(
          "開始角度："+startValue+
          "<br>終了角度："+endValue
      );
    },
    // 開始値（最小値）を設定する
    min : 20,
    // 終了値（最大値）を設定する
    max : 80,
    // 開始値と終了値の初期値を設定する
    values : [ 40, 70 ],
    // 範囲スライダーとして設定する
    range : true
  });
});