$(function(){
  // ドキュメントにクリックイベントを割り当てる
  $(document).bind("click", function(evt){
    // 結果表示する要素をクリアする
    $("output:first").text("");
    // クリック時の親要素を全て出力する
    $(evt.target).parents().each(function(index){
      // 内容を読み出す
      var htmlText = $("output:first").html();
      // タグ名（要素名）を取得する
      htmlText += this.tagName + "<br>";
      // 結果を表示する
      $("output:first").html(htmlText);
    });
  });
});