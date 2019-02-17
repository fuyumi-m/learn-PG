$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // shakeエフェクトを行う
    $(this).toggle("shake").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度shakeエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // shakeエフェクトを行う
        $(obj).toggle("shake", {
          // 方向を指定する
          direction : "down",
          // 距離
          distance : 40,
          // 回数
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