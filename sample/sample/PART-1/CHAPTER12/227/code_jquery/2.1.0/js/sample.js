$(function(){
  // ボタンにクリックイベントを割り当て
  $("#del").click(function(){
    // 要素を重複して取得する。ele1, ele4, ele5が重複
    var ele1 = $("#myList li:eq(0)").get(0);
    var ele2 = $("#myList li:eq(2)").get(0);
    var ele3 = $("#myList li:eq(2)").get(0);
    var ele4 = $("#myList li:eq(0)").get(0);
    var ele5 = $("#myList li:eq(0)").get(0);
    // 要素を配列に入れる
    var ary = [ ele1, ele2, ele3, ele4, ele5 ];
    // 重複している要素を削除する
    var result = $.unique(ary);
    // 配列内容を表示する
    $(result).each(function(index, n){
      var str = $("output:eq(0)").html();
      str = str +  (1+index) + " : " + $(this).text() + "<br>";
      $("output:eq(0)").html(str);
    });
  });
});