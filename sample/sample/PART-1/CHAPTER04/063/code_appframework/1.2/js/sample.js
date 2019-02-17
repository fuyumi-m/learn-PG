$(function(){
  // 最初のボタンにイベントを割り当て
  $("#readContent").click(function(){
    // テキストフィールドの内容を表示
    alert($("#myContent").val());
  });
  // 2番目のボタンにイベントを割り当て
  $("#setContent").click(function(){
    // テキストフィールドの内容を設定
    $("#myContent").val("OpenSpace");
  });
});