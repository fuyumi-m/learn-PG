$(function(){
  // a要素にclickイベントを割り当てる
  $("a").click(function(evt){
    // 現在の禁止状態を取得
    var flag = evt.isDefaultPrevented();
    // 状態を示すアラートダイアログを表示
    alert("preventDefault()実行前："+flag);
    // ブラウザのデフォルトの動作を禁止
    evt.preventDefault();
    // 現在の禁止状態を取得
    flag = evt.isDefaultPrevented();
    // 状態を示すアラートダイアログを表示
    alert("preventDefault()実行後："+flag);
  });
});