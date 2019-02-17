$(function(){
  // form要素にsubmitイベントを割り当てる
  $("form").submit(function(event){
    // 送信前にアラートダイアログを表示する
    alert("送信します");
  });
});