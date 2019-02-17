$(function(){
  // 確認のためのカウンターを用意
  var count = 1;
  // オブジェクト作成
  var myObj = {
    codeNo : 700,
    getCode : function(val){
      var htmlText = $("output:first").html();
      $("output:first").html(htmlText+count+" : "+this.codeNo+"●"+val+"<br>");
      count++;
    }
  };
  // オブジェクトその２を作成
  var myObj2 = {
    codeNo : 1500
  };
  // ボタンにイベントを割り当て
  // thisはイベントオブジェクトに設定
  $(":button:eq(0)").click(myObj.getCode);
  // thisをmyObjに設定
  $(":button:eq(1)").click($.proxy(myObj.getCode, myObj));
  // thisをmyObj2に設定
  $(":button:eq(2)").click($.proxy(myObj.getCode, myObj2));
  // thisをmyObj2に設定にしパラメーターを渡す
  $(":button:eq(3)").click($.proxy(myObj.getCode, myObj2, 2531));
  // 直接myObjのメソッドを呼び出し結果を表示。thisはmyObj
  myObj.getCode();
});
