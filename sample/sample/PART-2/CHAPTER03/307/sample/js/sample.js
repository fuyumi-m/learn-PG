$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // pulsateエフェクトを行う
    $(this).toggle("pulsate").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度pulsateエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // pulsateエフェクトを行う
        $(obj).toggle("pulsate", {
          // 回数を指定する
          times : 6,
          // エフェクトにかける時間を指定する
          duration : 2000,
          // エフェクト完了時の処理を指定する
          complete: function(){
            // 内容を終了メッセージに書き換える
            $(obj).text("エフェクト終了");
          }
        });
      }, 3000);
    })(this);
  });
});