$(function(){
  // 最初のdiv要素をクリックした時の処理
  $("div:eq(0)").click(function(){
    // CSSクラスのef3を切り替える
    $(this).toggleClass("ef3");
  });
  // 2番目のdiv要素をクリックした時の処理
  $("div:eq(1)").click(function(){
    // CSSクラスのef3を切り替える。3秒でeaseOutExpoの動きで処理
    $(this).toggleClass("ef3", 3*1000, "easeOutExpo");
  });
  // 3番目のdiv要素をクリックした時の処理
  $("div:eq(2)").click(function(){
    // CSSクラスを切り替える
    $(this).toggleClass("ef3",
      // falseを指定してCSSクラスのef3を削除する。trueなら追加。
      false, {
          // 4秒かけてエフェクト処理を行う
          duration : 4 * 1000,
          // 動きはリニア(直線的）にする
          easing : "linear",
          // エフェクト処理が完了したらメッセージを表示する
          complete : function(){
            $(this).text("エフェクト処理完了");
          }
        }
    );
  });
});