$(function(){
  // input要素にfocusイベントを割り当てる
  $("input").focus(function(event){
    // フォーカスした要素のvalue属性を表示
    $("#result").text(event.currentTarget.value);
  });
});