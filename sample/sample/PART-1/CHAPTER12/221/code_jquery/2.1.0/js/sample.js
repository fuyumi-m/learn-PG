$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button").click(function(){
    // 配列を作成
    var data = [40, -61, 40, 90, 50, -91, 60, -31];
    // 正数のみ取り出す
    var posi = $.map(data, function(value, index){
      // 負数の場合はnullを指定することで追加されないようにする
      if (value < 0) { return null; }
      // 取得した正数（または０）は、そのまま返すと配列に追加される
      return value;
    });
    // 結果を表示
    $("output:eq(0)").text(posi.toString());
  });
});