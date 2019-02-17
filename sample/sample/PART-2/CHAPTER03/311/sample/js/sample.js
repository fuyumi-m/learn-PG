$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // slideエフェクトを行う
    $(this).toggle("slide").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度slideエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // slideエフェクトを行う
        $(obj).toggle("slide", {
          // 距離を指定する
          distance : 50,
          // 方向
          direction : "up",
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