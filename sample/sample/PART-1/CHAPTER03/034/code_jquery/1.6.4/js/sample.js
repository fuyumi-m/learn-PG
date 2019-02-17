$(function(){
  // 最初のボタンにclickイベントを割り当てる
  $(":button:eq(0)").click(function(){
    // 要素に枠を付ける
    $("img:visible").css("border", "4px solid blue");
  });
  // 2番目のボタンにclickイベントを割り当てる
  $(":button:eq(1)").click(function(){
    // 画像を表示する
    $("img").show();
  });
});