$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // foldエフェクトを行う
    $(this).toggle("fold").text("エフェクト処理中...");
    // 3秒(3000msec)後に再度foldエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // foldエフェクトを行う
        $(obj).toggle("fold", {
          // サイズを指定する
          size : 10,
          // 水平方向から先に処理するか（toggleの場合は逆になる）
          horizFirst : true,
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