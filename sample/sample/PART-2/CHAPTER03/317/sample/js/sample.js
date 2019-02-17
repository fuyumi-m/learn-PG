$(function(){
  // 1〜2番目の要素をクリックした時の処理。CSSクラスのef2を削除する
  $("div:eq(0), div:eq(1)").click(function(){
    // ef2クラスを削除。5秒でeaseOutExpoの動きで処理
    $(this).removeClass("ef2", 5*1000, "easeOutExpo");
  });
  // 3〜4番目の要素をクリックした時の処理。CSSクラスのef1〜3を削除する
  $("div:eq(2), div:eq(3)").click(function(){
    // ef1〜3クラスを削除
    $(this).removeClass("ef1 ef2 ef3", {
      // エフェクトにかける時間を指定する
      duration : 7*1000,
      // エフェクトの動きを示す文字列を指定する
      easing: "linear",
      // エフェクト完了時の処理を指定する
      complete: function(){
        // 内容を終了メッセージに書き換える
        $(this).text("エフェクト処理完了");
      }
    });
  });
});