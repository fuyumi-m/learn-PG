$(function(){
  // タイマーで現在時刻を定期的に表示
  setInterval(function(){
    // 現在の時刻を取得
    var time = $.now();
    // 時分秒を求める
    var dateObj = new Date(time);
    var h = dateObj.getHours();
    var m = dateObj.getMinutes();
    var s = dateObj.getSeconds();
    // 結果を出力
    $("#result").text(h+"時"+m+"分"+s+"秒");
  }, 1000);
});