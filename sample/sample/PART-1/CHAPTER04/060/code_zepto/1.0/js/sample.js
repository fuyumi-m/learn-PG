$(function(){
  // 最初のボタンにイベントを割り当て
  $("#readProp").click(function(){
    // img要素のsrcプロパティを読み出し
    var url = $("#myPhoto").prop("src");
    // 読み出した内容を表示
    alert(url);
  });
  // 2番目のボタンにイベントを割り当て
  $("#setProp").click(function(){
    // img要素のsrcプロパティを設定
    $("#myPhoto").prop("src", "images/1.jpg");
  });
});