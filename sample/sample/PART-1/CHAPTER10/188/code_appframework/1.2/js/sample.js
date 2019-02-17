$(function(){
  // リクエスト送信時にアラートダイアログを表示する
  $(document).ajaxSend(function(evt, xhr, opt){
    alert("サーバーにリクエストを送信しました");
  });
  // 同一ディレクトリ内にあるdata.txtファイルを読み込む
  $("#result").load("data.txt");
});