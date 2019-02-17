$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // dropエフェクトを行う
    $(this).toggle("drop").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度dropエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // dropエフェクトを行う
        $(obj).toggle("drop", {
          // 方向を指定する
          direction : "right",
          // エフェクトにかける時間を指定する
          duration : 2500,
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