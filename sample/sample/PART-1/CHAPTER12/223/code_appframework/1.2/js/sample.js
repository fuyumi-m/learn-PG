$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // 配列を作成
    var data = [40, -61, 40, 90, 50, -91, 60, -31];
    // 正数のみ取り出す
    var posi = $.grep(data, function(value, index){
      // 負数の場合はfalseを指定することで配列に残さないようにする
      if (value < 0) { return false; }
      // trueを返すと要素は配列に残る
      return true;
    }, false);
    // 結果を表示
    $("#result").text(posi.toString());
  });
});