$(function(){
  // div要素をクリックした時の処理
  $("div").click(function(){
    // エフェクトを交互に切り替える
    $(this).toggle("slide");
    // 3秒(3000msec)後にslideエフェクトを行う
    (function(obj){
      setTimeout(function(){
        // slideエフェクトを行う
        $(obj).toggle("slide");
      }, 3000);
    })(this);
  });
});