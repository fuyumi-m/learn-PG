$(function(){
  // 最初のボタンにイベントを割り当てる
  $("#btn1").click(function(){
    // 最初のフォームデータをシリアライズする
    var text = $("#myForm").serialize();
    // シリアライズした結果を表示する
    $("#result").text(text);
  });
  // 2番目のボタンにイベントを割り当てる
  $("#btn2").click(function(){
    // 最初のフォームデータをシリアライズし配列に格納する
    var textArray = $("#myForm").serializeArray();
    // シリアライズした項目数を表示する
    $("#result").html("シリアライズした項目数："+textArray.length+"<br>");
    // コンソールにも出力する
    console.dir(textArray);
  });
});