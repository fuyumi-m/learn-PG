$(function(){
  // スピナーを設置する
  $("#orderNumber").spinner({
    // 生成時にランダムに数値を設定する
    create : function(evt, ui){
      // 0〜99までの整数値をランダムに生成
      $(this).val(Math.random()* 100 | 0);
    }
  });
  // 生成ボタンをクリックし生成する場合の処理
  $("#create").click(function(){
    // input要素を生成しスピナーを設置する
    $('<input>').appendTo("form").spinner({
      create : function(evt, ui){
        // 0〜9999までの整数値をランダムに生成
        $(this).val(Math.random()* 10000 | 0);
      }
    });
  });
});