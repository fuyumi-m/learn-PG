$(function(){
  // ボタンにclickイベントを割り当てる
  $("#testBtn").click(function(evt){
    return "xyz";
  });
  // ボタンに再度、clickイベントを割り当てる
  $("#testBtn").click(function(evt){
    // イベントオブジェクトの戻り値と連結
    return "abc"+evt.result;
  });
  // ボタンにさらに、clickイベントを割り当てる
  $("#testBtn").click(function(evt){
    // イベントオブジェクト間で渡されたデータを表示
    alert(evt.result);
  });
});