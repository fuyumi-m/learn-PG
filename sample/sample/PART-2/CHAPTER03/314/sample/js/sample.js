$(function(){
  // ドキュメントをクリックしたらエフェクト付きで表示する
  $(document).click(function(){
    // 最初のdiv要素をblindエフェクトで表示する
    $("div:eq(0)").show("blind");
    // 2番目のdiv要素をslideエフェクトで表示する
    $("div:eq(1)").show("slide", {
      // エフェクトにかける時間を指定する
      duration : 2*1000,
      // エフェクトの動きを示す文字列を指定する
      easing: "linear",
      // エフェクト完了時の処理を指定する
      complete: function(){
        $(this).text("エフェクト終了");
      }
    });
  });
});