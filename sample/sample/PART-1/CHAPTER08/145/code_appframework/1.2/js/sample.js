$(function(){
  // 全ての要素にclickイベントを割り当てる
  $("div").click(function(evt){
    // 現在の伝達状態を取得
    var flag = evt.isImmediatePropagationStopped();
    // 状態を示すアラートダイアログを表示
    alert("isImmediatePropagationStopped()実行前："+flag);
    // イベントの伝達をこの要素で禁止
    evt.stopImmediatePropagation();
    // 現在の伝達状態を取得
    var flag = evt.isImmediatePropagationStopped();
    // 状態を示すアラートダイアログを表示
    alert("isImmediatePropagationStopped()実行後："+flag);
  });
});