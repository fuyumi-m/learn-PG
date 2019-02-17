$(function(){
  // 書き込みボタンにイベントを割り当てる
  $(":button:eq(0)").click(function(){
    // テキストフィールドからデータを読み出し
    var fieldData = $("#myContent").val();
    // h1要素にmyDataというキー名でテキストフィールドのデータを保存する
    $("h1:first").data("myData", fieldData);
    // 結果を表示する
    $("output:first").text("保存しました");
  });
  // 読み込みボタンにイベントを割り当てる
  $(":button:eq(1)").click(function(){
    // h1要素からmyDataというキー名のデータを読み出す
    var readData = $("h1:first").data("myData");
    // 結果を表示する
    $("output:first").html("以下のデータを読み出しました<br>"+readData);
  });
});