$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // puffエフェクトを行う
    $(this).toggle("puff").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度puffエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // puffエフェクトを行う
        $(obj).toggle("puff", {
          // 拡大率を指定する (300%にする)
          percent : 300,
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