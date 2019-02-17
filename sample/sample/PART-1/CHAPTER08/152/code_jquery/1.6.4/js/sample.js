$(function(){
  // div要素（画像の親要素）にmouseenterを割り当てる
  $(".thumb").mouseenter(function(){
    // div要素の不透明度を設定
    $(this).fadeTo(50, 0.5);
    // マウスが要素内にある事を示すためメッセージを表示
    $("#result").html($("#result").html()+"div要素でmouseenterイベント発生<br>");
  });
  // div要素（画像の親要素）にmouseleaveイベントを割り当てる
  $(".thumb").mouseleave(function(){
    // div要素の不透明度を設定
    $(this).fadeTo(50, 1.0);
    // マウスポインタが離れた状態である事を示すためメッセージを表示
    $("#result").html($("#result").html()+"div要素でmouseleaveイベント発生<br>");
  });
  // 画像にmouseenterイベントを割り当てる
  $("#photo1").mouseenter(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(50, 0.5);
    // マウスが要素内にある事を示すためメッセージを表示
    $("#result").html($("#result").html()+"画像でmouseenterイベント発生<br>");
  });
  // 画像にmouseleaveイベントを割り当てる
  $("#photo1").mouseleave(function(){
    // 画像の不透明度を設定
    $(this).fadeTo(50, 1.0);
    // マウスポインタが離れた状態である事を示すためメッセージを表示
    $("#result").html($("#result").html()+"画像でmouseleaveイベント発生<br>");
  });
});