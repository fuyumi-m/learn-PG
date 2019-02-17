$(function(){
  // ボタンにイベントを割り当てる
  $("#btn").click(function(){
    // ID名melonがID名myList1内のノード内か調べる
    var flag1 = $.contains($("#myList1").get(0), $("#melon").get(0));
    // ID名melonがID名myList2内のノード内か調べる
    var flag2 = $.contains($("#myList2").get(0), $("#melon").get(0));
    // 結果を表示する
    $("#result").html(flag1+"<br>"+flag2);
  });
});