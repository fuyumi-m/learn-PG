$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $("output:first").load("data.txt");
  // 非同期通信処理の完了時にアラートダイアログを表示する
  $(document).ajaxComplete(function(evt, xhr, opt){
    alert("非同期通信処理が完了しました");
  });
});