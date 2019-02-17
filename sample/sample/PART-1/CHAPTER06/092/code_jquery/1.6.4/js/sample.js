$(function(){
  // 要素を保存する変数をクリア
  var saveEle = null;
  // 最初のボタンにイベントを割り当てる
  $(":button:eq(0)").click(function(){
    // img要素を切り離す
    saveEle = $("img").detach();
  });
  // 2番目のボタンにイベントを割り当てる
  $(":button:eq(1)").click(function(){
    // img要素を連結する
    $(saveEle).appendTo(".parts");
  });
});