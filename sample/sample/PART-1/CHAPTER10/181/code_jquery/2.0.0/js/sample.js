$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $.ajax("data.txt", {
    async : true,
    cache : false,
    success : function(data, status, jqXHR){
      $("output:first").text("読み込んだデータ："+data);
    }
  });
});