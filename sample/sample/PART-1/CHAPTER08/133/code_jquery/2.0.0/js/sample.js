$(function(){
  // 画像にクリックイベントを割り当てる
  $("img").click(dispEventType);
  // 画像にmouseoverイベントを割り当てる
  $("img").bind("mouseover", dispEventType);
  // 画像にmouseoutイベントを割り当てる
  $("img").bind("mouseout", dispEventType);
  // イベントの種類を表示する
  function dispEventType(evt){
    // イベントの種類を読み出し
    var eType = evt.type;
    // イベント名を表示
    $("output:first").text(eType);
  }
});