$(function(){
  // 読み込むJavaScriptファイルのURL
  var url = "http://footage3.openspc2.org/js/myFunc2.js";
  // footage3サーバー上にあるJavaScriptファイルを読み込む
  $.getScript(url, function(script, status, jqXHR){
    // 読み込んだスクリプト内に記述されている関数を呼び出す
    outputMessage("正常に処理されました!!");
  });
});