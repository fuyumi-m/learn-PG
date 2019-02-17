$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // clipエフェクトを行う
    $(this).toggle("clip").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度clipエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // clipエフェクトを行う
        $(obj).toggle("clip", {
          // 方向を指定する
          direction : "horizontal",
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