$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む（存在しない）
  $("#result").load("data.txt");
  // エラー発生時にアラートダイアログを表示する
  $(document).ajaxError(function(evt, xhr, opt){
    alert("読み込みに失敗しました");
  });
});