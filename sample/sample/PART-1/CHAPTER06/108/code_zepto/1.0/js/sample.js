$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $("#readField").click(function(){
    // input要素を読み出す
    var text = $("#userID").val();
    // output要素に出力する
    $("#result").val(text);
  });
  // 2番目のボタンにクリックイベントを割り当て
  $("#writeField").click(function(){
    // input要素にテキストとして出力
    $("#userID").val(Math.random());
  });
});