$(function(){
  $(document).bind("click", function(evt){
    // クリック時の親要素tr内にあるth要素内の文字を読み出す
    var month = $(evt.target).closest("tr").find("th").text();
    // クリックされた行の月を表示する
    $("output:first").text(month+"の売り上げです");
  });
});