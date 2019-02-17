$(function(){
  $(":button").click(function(){
    // 結果を表示する要素内を消去
    $("output:first").text("");
    // チェック済みのチェックボックスを指定する
    $(":checkbox:checked").each(function(){
      // チェックボックスの項目名を読み出す
      var itemName = $(this).attr("name");
      // 読み出した結果を要素に追加
      $("output:first").append(itemName).append("<br>");
    });
  });
});