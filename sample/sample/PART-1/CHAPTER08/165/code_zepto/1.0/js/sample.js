// windowオブジェクトにresizeイベントを割り当てる
$(window).resize(function(event){
  // リサイズ時のミリ秒を表示
  $("#result").text("resizeイベント発生："+Date.now());
});