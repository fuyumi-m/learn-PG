$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  //$("#result").load("data.txt");
  // 読み込み成功時にアラートダイアログを表示する
  $.ajax({
    type : "get",
    url : "data.txt",
    success : function(data){
      alert("読み込みに成功しました："+data);
    }
  });
});