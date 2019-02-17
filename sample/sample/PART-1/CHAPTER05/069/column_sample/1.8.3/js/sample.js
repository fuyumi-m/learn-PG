$(function(){
  // input要素のボタンにクリックイベントを割り当てる
  $("#btn").click(function(){
    // 番号付きリストの項目にCSSのnoteクラスを追加する
    var ele = $('<div>').add($(".caution"));
console.log(ele);
  });
});