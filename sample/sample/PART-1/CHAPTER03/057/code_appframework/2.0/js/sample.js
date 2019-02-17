$(function(){
  // 200msecごとに処理する
  setInterval(function(){
    // フォーカスされている要素の内容を表示する
    $("output:first").text($(":focus").val());    
  }, 200);
});