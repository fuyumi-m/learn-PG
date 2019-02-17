$(function(){
  // ボタンにクリックイベントを割り当て
  $("#del").click(function(){
    // 要素を重複して取得する。ele1, ele4, ele5が重複
    var ele1 = $("#list1").get(0);
    var ele2 = $("#list3").get(0);
    var ele3 = $("#list3").get(0);
    var ele4 = $("#list1").get(0);
    var ele5 = $("#list1").get(0);
    // 要素を配列に入れる
    var ary = [ ele1, ele2, ele3, ele4, ele5 ];
    // 重複している要素を削除する
    var result = $.unique(ary);
    // 配列内容を表示する
    $(result).each(function(index, n){
      var str = $("#result").html();
      str = str +  (1+index) + " : " + $(this).text() + "<br>";
      $("#result").html(str);
    });
  });
});