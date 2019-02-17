$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // fadeエフェクトを行う
    $(this).toggle("fade").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度fadeエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // fadeエフェクトを行う
        $(obj).toggle("fade", {
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