$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // scaleエフェクトを行う
    $(this).toggle("scale").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度scaleエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // scaleエフェクトを行う
        $(obj).toggle("scale", {
          // スケールの割合を指定する
          percent : 300,
          // スケールする方法
          scale : "box",
          // スケールする基準位置
          origin : ["top", "left"],
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