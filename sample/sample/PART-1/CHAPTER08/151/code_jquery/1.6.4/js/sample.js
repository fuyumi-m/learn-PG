$(function(){
  // div要素（画像の親要素）にマウスオーバーイベントを割り当てる
  $(".thumb").mouseover(function(){
    // div要素の不透明度を設定
    $(this).fadeTo(50, 0.5);
    // マウスオーバーの状態である事を示すためメッセージを表示
    $("#result").html($("#result").html()+"div要素でmouseoverイベント発生<br>");
  });
  // div要素（画像の親要素）にmouseoutイベントを割り当てる
  $(".thumb").mouseout(function(){
    // div要素の不透明度を設定
    $(this).fadeTo(50, 1.0);
    // マウスポインタが離れた状態である事を示すためメッセージを表示
    $("#result").html($("#result").html()+"div要素でmouseoutイベント発生<br>");
  });
  // 画像にmouseoverイベントを割り当てる
  $("#photo1").mouseover(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(50, 0.5);
    // マウスオーバーの状態である事を示すためメッセージを表示
    $("#result").html($("#result").html()+"画像でmouseoverイベント発生<br>");
  });
  // 画像にmouseoutイベントを割り当てる
  $("#photo1").mouseout(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(50, 1.0);
    // マウスポインタが離れた状態である事を示すためメッセージを表示
    $("#result").html($("#result").html()+"画像でmouseoutイベント発生<br>");
  });
});