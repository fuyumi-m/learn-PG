$(function(){
  // input要素にblurイベントを割り当てる
  $("input").blur(function(event){
    // フォーカスが外れた要素の背景色を橙色にする
    $("input").css("background-color", "white");
    $(this).css("background-color", "orange");
  });
});