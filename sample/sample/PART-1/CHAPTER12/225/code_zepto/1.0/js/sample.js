$(function(){
  // 書き込みボタンにイベントを割り当てる
  $("#btn1").click(function(){
    // テキストフィールドからデータを読み出し
    var fieldData = $("#myContent").val();
    // h1要素に複数のキーと値でデータを保存する
    $("#myHeader").data({
      "uID" : 5963,
      "myData" : fieldData,
    });
    // 結果を表示する
    $("#result").text("保存しました");
  });
  // 読み込みボタン(uID)にイベントを割り当てる
  $("#btn2").click(function(){
    // h1要素からuIDというキー名のデータを読み出す
    var readData = $("#myHeader").data("uID");
    // 結果を表示する
    $("#result").html("uIDのデータを読み出しました<br>"+readData);
  });
  // 読み込みボタン(myData)にイベントを割り当てる
  $("#btn3").click(function(){
    // h1要素からmyDataというキー名のデータを読み出す
    var readData = $("#myHeader").data("myData");
    // 結果を表示する
    $("#result").html("myDataのデータを読み出しました<br>"+readData);
  });
  // データを削除ボタンにイベントを割り当てる
  $("#btn4").click(function(){
    // h1要素からmyDataというキー名のデータを削除する
    $("#myHeader").removeData("myData");
    // 結果を表示する
    $("#result").html("キー名myDataのデータを削除しました");
  });
  // 全データを削除ボタンにイベントを割り当てる
  $("#btn5").click(function(){
    // h1要素から全てのデータを削除する
    $("#myHeader").removeData();
    // 結果を表示する
    $("#result").html("全データを削除しました");
  });
});