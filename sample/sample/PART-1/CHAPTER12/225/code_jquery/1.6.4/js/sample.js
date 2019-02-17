$(function(){
  // 書き込みボタンにイベントを割り当てる
  $(":button:eq(0)").click(function(){
    // テキストフィールドからデータを読み出し
    var fieldData = $("#myContent").val();
    // h1要素に複数のキーと値でデータを保存する
    $("h1:first").data({
      "uID" : 5963,
      "myData" : fieldData,
    });
    // 結果を表示する
    $("output:first").text("保存しました");
  });
  // 読み込みボタン(uID)にイベントを割り当てる
  $(":button:eq(1)").click(function(){
    // h1要素からuIDというキー名のデータを読み出す
    var readData = $("h1:first").data("uID");
    // 結果を表示する
    $("output:first").html("uIDのデータを読み出しました<br>"+readData);
  });
  // 読み込みボタン(myData)にイベントを割り当てる
  $(":button:eq(2)").click(function(){
    // h1要素からmyDataというキー名のデータを読み出す
    var readData = $("h1:first").data("myData");
    // 結果を表示する
    $("output:first").html("myDataのデータを読み出しました<br>"+readData);
  });
  // データを削除ボタンにイベントを割り当てる
  $(":button:eq(3)").click(function(){
    // h1要素からmyDataというキー名のデータを削除する
    $("h1:first").removeData("myData");
    // 結果を表示する
    $("output:first").html("キー名myDataのデータを削除しました");
  });
  // 全データを削除ボタンにイベントを割り当てる
  $(":button:eq(4)").click(function(){
    // h1要素から全てのデータを削除する
    $("h1:first").removeData();
    // 結果を表示する
    $("output:first").html("全データを削除しました");
  });
});