$(function(){
  // input要素にkeydownイベントを割り当てる
  $("input").keydown(function(evt){
    // キー番号を取得する
    var keyNumber = evt.which;
    // キー番号を表示する
    $("output:first").text("キー番号："+keyNumber);
  });
  // input要素にclickイベントを割り当てる
  $("input").click(function(evt){
    // ボタン番号を取得する
    var buttonNumber = evt.which;
    // キー番号を表示する
    $("output:first").text("ボタン番号："+buttonNumber);
  });
});