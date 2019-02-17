$(function(){
  // 一番内側の要素にclickイベントを割り当てる
  $("#Lv3").click(function(evt){
    // イベントの伝達をこの要素で禁止
    evt.stopImmediatePropagation();
    // 伝達状況を表示
    $("output").html($("output").html()+"<br>(イベント発生)："+evt.currentTarget.id);
  });
  // 2番目のdiv要素にclickイベントを割り当てる
  $("#Lv2").click(function(evt){
    // イベントの伝達を禁止
    evt.stopPropagation();
    // 伝達状況を表示
    $("output").html($("output").html()+"<br>イベント発生："+evt.currentTarget.id);
  });
  // 全てのdiv要素にclickイベントを割り当てる
  $("div").click(function(evt){
    $("output").html($("output").html()+"<br>[イベント発生]："+evt.currentTarget.id);
  });
});