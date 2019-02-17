$(function(){
  // input要素にselectイベントを割り当てる
  $("input").select(function(event){
    // 選択した文字の範囲を取得
    var selObj = window.getSelection();
    var text  = selObj.toString();
    // 文字が選択されたことを示す
    $("#result").html("以下の文字が選択されました。<br>"+text);
  });
});