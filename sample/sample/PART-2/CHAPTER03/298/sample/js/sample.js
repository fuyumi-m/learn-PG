$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // blindエフェクトを行う
    $(this).toggle("blind").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度blindエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // blindエフェクトを行う
        $(obj).toggle("blind", {
          // 動きを指定する
          easing : "easeInQuart",
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