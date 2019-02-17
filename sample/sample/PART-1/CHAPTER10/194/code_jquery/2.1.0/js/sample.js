$(function(){
  // 最初のボタンにイベントを割り当てる
  $("#btn1").click(function(){
    // 最初のフォームデータをシリアライズする
    var text = $("form:first").serialize();
    // シリアライズした結果を表示する
    $("output:first").text(text);
  });
  // 2番目のボタンにイベントを割り当てる
  $("#btn2").click(function(){
    // 最初のフォームデータをシリアライズし配列に格納する
    var textArray = $("form:first").serializeArray();
    // シリアライズした項目数を表示する
    $("output:first").html("シリアライズした項目数："+textArray.length+"<br>");
    // コンソールにも出力する
    console.dir(textArray);
  });
});