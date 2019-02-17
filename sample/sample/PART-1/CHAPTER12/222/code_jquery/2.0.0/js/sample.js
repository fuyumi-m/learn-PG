$(function(){
  // ボタンにクリックイベントを割り当て
  $(":button").click(function(){
    // 配列その1
    var ary1 = ["(株)", "C", "and"];
    // 配列その2
    var ary2 = ["R", "研究所"];
    // 2つの配列を連結
    var ary = $.merge(ary1, ary2);
    // 結果を表示
    $("output:eq(0)").html("要素数："+ary.length+"<br>内　容："+ary.join());
  });
});