$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // explodeエフェクトを行う
    $(this).toggle("explode").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度explodeエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // explodeエフェクトを行う
        $(obj).toggle("explode", {
          // 分割数を指定する
          pieces : 60,
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