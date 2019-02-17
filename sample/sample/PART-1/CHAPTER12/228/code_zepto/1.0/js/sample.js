$(function(){
  // 変換ボタンにイベントを割り当てる
  $("#btn").click(function(){
    // テキストエリアからデータを読み出し
    var textData = $("#myContent").val();
    // JSONに変換する。不正な値があるとエラーになるので要try
    try {
      var jsonData = $.parseJSON(textData);
    }catch(e){
      var jsonData = null;
      }
    // 結果を表示する
    if (jsonData === null){
      jsonData = "JSONデータが正しくありません";
    }else{
      jsonData = $.param(jsonData);
    }
    $("#result").text(jsonData);
  });
});
