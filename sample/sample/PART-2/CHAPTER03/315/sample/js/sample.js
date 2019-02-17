$(function(){
  // 最初のdiv要素をクリックした時の処理
  $("div:eq(0)").click(function(){
    // blindエフェクトで非表示にする
    $(this).hide("blind");
  });
  // 2番目のdiv要素をクリックした時の処理
  $("div:eq(1)").click(function(){
    // shakeエフェクトで非表示にする
    $(this).hide("shake");
  });
  // 3番目のdiv要素をクリックした時の処理
  $("div:eq(2)").click(function(){
    // slideエフェクトで非表示にする
    $(this).hide("slide");
  });
});