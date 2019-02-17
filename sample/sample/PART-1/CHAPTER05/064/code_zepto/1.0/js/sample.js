$(function(){
  $("#sale tbody tr").each(function(index){
    // tr要素以下の最初のtd要素の文字を読み出す
    var tdText = $(this).find("td").first().text();
    // インデックス番号に1を加算した値と読み出した文字を連結
    tdText = (1+index) + tdText;
    // td要素内に書き戻す
    $(this).find("td").first().text(tdText)
  });
});