$(function(){
  // ボタンにイベントを割り当て
  $(":button").click(function(){
    // img要素のsrcプロパティを削除
    $("#myPhoto").removeProp("src");
  });
});