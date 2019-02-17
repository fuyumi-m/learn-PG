$(function(){
  // 結果を入れる変数を用意
  var resultStr = "";
  // Safari/Chrome (WebKit)かどうか調べる
  resultStr = "<div>WebKit："+$.browser.webkit+"</div>";
  // Firefox(Mozilla)かどうか調べる
  resultStr += "<div>Firefox："+$.browser.mozilla+"</div>";
  // IEかどうか調べる
  resultStr += "<div>Internet Explorer："+$.browser.msie+"</div>";
  // Operaかどうか調べる
  resultStr += "<div>Opera："+$.browser.opera+"</div>";
  // 結果を出力
  $("#result").html(resultStr);
});