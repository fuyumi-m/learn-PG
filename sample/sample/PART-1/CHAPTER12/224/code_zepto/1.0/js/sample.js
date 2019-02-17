$(function(){
  // 書き込みボタンにイベントを割り当てる
  $("#write").click(function(){
    // テキストフィールドからデータを読み出し
    var fieldData = $("#myContent").val();
    // h1要素にmyDataというキー名でテキストフィールドのデータを保存する
    $("#myHeader").data("myData", fieldData);
    // 結果を表示する
    $("#result").text("保存しました");
  });
  // 読み込みボタンにイベントを割り当てる
  $("#read").click(function(){
    // h1要素からmyDataというキー名のデータを読み出す
    var readData = $("#myHeader").data("myData");
    // 結果を表示する
    $("#result").html("以下のデータを読み出しました<br>"+readData);
  });
});