// windowオブジェクトにresizeイベントを割り当てる
$(window).resize(function(event){
  // リサイズ時のミリ秒を表示
  $("output:first").text("resizeイベント発生："+Date.now());
});