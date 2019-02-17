$(function(){
  // ボタンにクリックイベントを割り当て
  $("#btn").click(function(){
    // リストのli要素を読み出し
    var base = document.getElementById("price");
    var li = base.getElementsByTagName("li");
    // li要素を配列に変換する
    var priceData = $.makeArray(li);
    // 配列の数だけ繰り返し読み出し、末尾に円の文字を追加する
    for(var i=0, text=""; i<priceData.length; i++){
      text = text + $(priceData[i]).text() + "円<br>";
    }
    // 結果を表示
    $("#result").html(text);
  });
});