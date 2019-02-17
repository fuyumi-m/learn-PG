$(function(){
  // input要素, button要素を取得する
  var ele = document.querySelectorAll("input[type=button],button");
  for(var i=0; i<ele.length; i++){
    // イベントを設定する
    ele[i].addEventListener("click", function(){
      // ボタンのIDを読み出す
      var id = this.id;
      // ボタンのIDをアラートダイアログに表示する
      alert("クリックされたボタンID："+id);
    });
  }
});