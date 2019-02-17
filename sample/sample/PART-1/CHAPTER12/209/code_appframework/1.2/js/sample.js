$(function(){
  // ボタンにクリックイベントを割り当て
  $("#check").click(function(){
    // 文字列の場合。結果はstring
    var type1 = $.type("C&R研究所");
    // nullの場合。結果はnull
    var type2 = $.type(null);
    // 配列の場合。結果はarray
    var type3 = $.type([1,2,3]);
    // 結果を画面に表示する
    $("#result").text(type1+", "+type2+", "+type3);
  });
});