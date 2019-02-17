$(function(){
  // div要素をクリックした時の処理
  $(".ef").click(function(){
    // ランダムなエフェクトを適用する
    var effectList = ["blind", "clip", "drop", "explode", "fade", "fold", "puff"];
    var n = Math.random()*effectList.length | 0;
    // エフェクトを行う
    $(this).effect(effectList[n]);
    // エフェクト名を表示する
    $(this).text(effectList[n]);
    // 3秒(3000msec)後に同じエフェクトで表示する
    (function(obj, efType){
      setTimeout(function(){
        // エフェクトを使って表示する
        $(obj).show(efType);
      }, 3000);
    })(this, effectList[n]);
  });
});