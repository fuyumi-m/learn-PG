$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // sizeエフェクトを行う
    $(this).toggle("size").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度sizeエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // sizeエフェクトを行う
        $(obj).toggle("size", {
          // サイズを指定する
          to : { width: 320, height: 120 },
          // 基準位置
          origin : ["left", "top"],
          // どれをサイズ変更するかを指定
          scale : "box",
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