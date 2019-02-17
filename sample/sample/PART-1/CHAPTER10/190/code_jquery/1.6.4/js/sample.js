$(function(){
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $("output:first").load("data.txt");
  // 読み込み成功時にアラートダイアログを表示する
  $(document).ajaxSuccess(function(evt, xhr, opt){
    alert("読み込みに成功しました");
    // 読み込んだデータをアラートダイアログに表示する
    alert(xhr.responseText);
  });
});