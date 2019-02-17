$(function(){
  // vfxクラスの要素がクリックされた場合の処理
  $(".vfx").click(function(){
    // 処理中のメッセージを表示する
    $(this).text("エフェクト処理中...")
    // transferエフェクトを行う
    $(this).effect("transfer", { to : $("#fit"),
      // エフェクト完了時の処理を指定する
      complete: function(){
        // 内容を終了メッセージに書き換える
        $(this).text("エフェクト終了");
      }
     }, 2000);
  });
});