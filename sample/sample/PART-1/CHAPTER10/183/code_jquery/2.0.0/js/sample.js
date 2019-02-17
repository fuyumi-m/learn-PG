$(function(){
  // 非同期オプションをフィルタリングする
  $.ajaxPrefilter(function( options, originalOptions, jqXHR ){
    // successオプションがある場合、動作を追加変更する
    if ( options.success ){
      alert("読み込み成功");
    }
  });
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $.ajax("data.txt", {
    async : true,
    success : function(data, status, jqXHR){
      $("output:first").text("読み込んだデータ："+data);
    }
  });
});