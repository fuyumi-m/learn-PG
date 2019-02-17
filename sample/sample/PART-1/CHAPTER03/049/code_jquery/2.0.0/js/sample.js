$(function(){
  // ボタンにイベントを割り当てる
  $(":button").click(function(){
    // ボタンのIDを読み出す
    var id = this.id;
    // ボタンのIDをアラートダイアログに表示する
    alert("クリックされたボタンID："+id);
  });
});