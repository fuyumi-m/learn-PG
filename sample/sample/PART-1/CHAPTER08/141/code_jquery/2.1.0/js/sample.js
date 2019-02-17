$(function(){
  // 最初のa要素にclickイベントを割り当てる
  $("a:first").click(function(evt){
    // クリックされたらアラートダイアログを表示
    alert("イベント発生1");
    // ブラウザのデフォルトの動作を禁止
    evt.preventDefault();
  });
  // 2番目のa要素にclickイベントを割り当てる
  $("a:eq(1)").click(function(evt){
    // クリックされたらアラートダイアログを表示
    alert("イベント発生2");
  });
});