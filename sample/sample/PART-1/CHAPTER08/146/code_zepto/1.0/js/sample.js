$(function(){
  // 画像にerrorイベントを割り当てる
  $("#gallery img").error(function(evt){
    // 読み込めなかった画像のsrcプロパティを読み出す
    var url = $(this).attr("src");
    // エラーメッセージと読み込めなかった画像のURLを表示
    $("#result").html($("#result").html()+"エラー："+url+"<br>");
  });
});