$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $("#result").load("data.txt");
  // 非同期通信処理の完了時にアラートダイアログを表示する
  $(document).ajaxComplete(function(evt, xhr, opt){
    alert("非同期通信処理が完了しました");
  });
});