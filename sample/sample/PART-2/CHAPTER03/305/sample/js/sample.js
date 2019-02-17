$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // highlightエフェクトを行う
    $(this).toggle("highlight").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度highlightエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // highlightエフェクトを行う
        $(obj).toggle("highlight", {
          // 色を指定する
          color : "#ff00ff",
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