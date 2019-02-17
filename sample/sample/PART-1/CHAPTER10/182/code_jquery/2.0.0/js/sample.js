$(function(){
  // 非同期通信時のオプションを設定する
  $.ajaxSetup({
    async : true,
    complete : function(){
      alert("読み込み完了");
    }
  });
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $.ajax("data.txt", {
    success : function(data, status, jqXHR){
      $("output:first").text("読み込んだデータ："+data);
    }
  });
});