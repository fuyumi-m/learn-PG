$(function(){
  // 画像にクリックイベントを割り当てる
  $("#photo1").one("click", function(){
    // 画像の不透明度を設定
    $(this).fadeTo(100, 0.5);
    // クリックした事を示すためメッセージを表示
    var dateObj = new Date();
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    $("#result").text(h+"時"+m+"分"+s+"秒にクリックしました");
  });
});