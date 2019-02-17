$(function(){
  // 最初のdiv要素をクリックした時の処理
  $("div:eq(0)").click(function(){
    // CSSクラスのef1を削除、ef2を追加する
    $(this).switchClass("ef2", "ef1");
  });
  // 2番目のdiv要素をクリックした時の処理
  $("div:eq(1)").click(function(){
    // CSSクラスのef1を削除、ef2を追加する
    $(this).switchClass("ef2", "ef1", {
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