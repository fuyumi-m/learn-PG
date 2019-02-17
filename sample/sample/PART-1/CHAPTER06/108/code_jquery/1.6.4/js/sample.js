$(function(){
  // 最初のボタンにクリックイベントを割り当て
  $(":button:eq(0)").click(function(){
    // input要素を読み出す
    var text = $("input:first").val();
    // output要素に出力する
    $("output:first").val(text);
  });
  // 2番目のボタンにクリックイベントを割り当て
  $(":button:eq(1)").click(function(){
    // input要素にテキストとして出力
    $("input:first").val(Math.random());
  });
});