$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルをgetメソッドで読み込む
  $.get("data.txt", function(data, status, jqXHR){
    $("output:first").text("読み込んだデータ："+data);
  });
});