$(function(){
  // input要素のボタンにクリックイベントを割り当てる
  $("#btn").click(function(){
    // 番号付きリストの項目を追加する
    $("ol").css("border-bottom", "1px solid black").add("div").css("color", "red");
  });
});