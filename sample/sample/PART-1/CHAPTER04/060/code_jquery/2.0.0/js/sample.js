$(function(){
  // 最初のボタンにイベントを割り当て
  $(":button:eq(0)").click(function(){
    // img要素のsrcプロパティを読み出し
    var url = $("#myPhoto").prop("src");
    // 読み出した内容を表示
    alert(url);
  });
  // 2番目のボタンにイベントを割り当て
  $(":button:eq(1)").click(function(){
    // img要素のsrcプロパティを設定
    $("#myPhoto").prop("src", "images/1.jpg");
  });
});