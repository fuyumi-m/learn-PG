// jQueryオブジェクトだけにincメソッドを追加する
$.extend({
  inc : function(n){ return n + 1; }
});
$(function(){
  // 加算ボタンにイベントを割り当てる
  $(":button:eq(0)").click(function(){
    // テキストフィールドからデータを読み出し
    var num = parseFloat($("#myContent").val());
    // 加算する
    var result = $.inc(num);
    // 結果を表示する
    $("output:first").text("加算結果："+result);
  });
});

