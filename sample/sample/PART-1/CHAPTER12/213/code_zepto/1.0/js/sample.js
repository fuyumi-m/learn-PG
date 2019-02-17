$(function(){
  // 確認のためのカウンターを用意
  var count = 1;
  // オブジェクト作成
  var myObj = {
    codeNo : 700,
    getCode : function(val){
      var htmlText = $("#result").html();
      $("#result").html(htmlText+count+" : "+this.codeNo+"●"+val+"<br>");
      count++;
    }
  };
  // オブジェクトその２を作成
  var myObj2 = {
    codeNo : 1500
  };
  // ボタンにイベントを割り当て
  // thisはイベントオブジェクトに設定
  $("#btn1").click(myObj.getCode);
  // thisをmyObjに設定
  $("#btn2").click($.proxy(myObj.getCode, myObj));
  // thisをmyObj2に設定
  $("#btn3").click($.proxy(myObj.getCode, myObj2));
  // thisをmyObj2に設定にしパラメーターを渡す
  $("#btn4").click($.proxy(myObj.getCode, myObj2, 2531));
  // 直接myObjのメソッドを呼び出し結果を表示。thisはmyObj
  myObj.getCode();
});
