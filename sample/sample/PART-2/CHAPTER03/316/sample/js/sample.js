$(function(){
  // マウスオーバー時の処理。CSSクラスを追加する
  $("div").mouseover(function(){
    // ef2クラスを追加。2秒でeaseOutExpoの動きで処理
    $(this).addClass("ef2", 2*1000, "easeOutExpo");
  });
  // マウスアウト時の処理。CSSクラスを削除する
  $("div").mouseout(function(){
    // ef2クラスを削除。2秒でeaseOutExpoの動きで処理
    $(this).removeClass("ef2", 2*1000, "easeOutExpo");
  });
});