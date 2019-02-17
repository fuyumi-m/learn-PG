$(function(){
  // 非同期通信処理の開始時にメッセージを表示する
  $(document).ajaxStart(function(evt, xhr, opt){
    $("output:eq(1)").html("読み込み開始<br>");
  });
  // 非同期通信処理の停止時にメッセージを表示する
  $(document).ajaxStop(function(evt, xhr, opt){
    var html = $("output:eq(1)").html();
    $("output:eq(1)").html(html+"読み込み終了");
  });
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $("output:first").load("data.txt");
});