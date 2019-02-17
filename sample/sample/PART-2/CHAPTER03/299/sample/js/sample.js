$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // bounceエフェクトを行う
    $(this).toggle("bounce").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度bounceエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // bounceエフェクトを行う
        $(obj).toggle("bounce", {
          // 距離を指定する
          distance : 70,
          // バウンドする回数を指定する
          times : 2,
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