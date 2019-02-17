$(function(){
  // 最初のa要素にclickイベントを割り当てる
  $("div").click(function(evt){
    // 現在の伝達状態を取得
    var flag = evt.isPropagationStopped();
    // 状態を示すアラートダイアログを表示
    alert("isDefaultPrevented()実行前："+flag);
    // イベントの伝達を禁止
    evt.stopPropagation();
    // 現在の伝達状態を取得
    var flag = evt.isPropagationStopped();
    // 状態を示すアラートダイアログを表示
    alert("isDefaultPrevented()実行後："+flag);
  });
});