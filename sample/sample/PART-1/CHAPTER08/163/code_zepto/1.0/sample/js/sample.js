// ページの読み込みが完了したら処理する
$(function(){
  // ページ内のHTMLテキストを読み出し
  var htmlText = $("#result").html();
  // 読み込み完了時のメッセージを表示する
  $("#result").html(htmlText+"ページ読み込み完了"+"<br>");
  // 画像にloadイベントを割り当てる
  $("img").bind("load", function(){
    // 画像のalt属性を読み出し
    var altText = this.alt;
    // ページ内のHTMLテキストを読み出し
    var htmlText = $("#result").html();
    // 読み込み完了時のメッセージを表示する
    $("#result").html(htmlText+"読み込み完了："+altText+"<br>");
  });
});