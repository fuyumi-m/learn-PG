$(function(){
  // 画像にクリックイベントを割り当てる
  $("#photo1").click(function(evt){
    // イベント発生時の時間を取得
    var time = evt.timeStamp;
    // Dateオブジェクトのパラメータに指定
    var dateObj = new Date(time);
    // 時を取得
    var h = dateObj.getHours();
    // 分を取得
    var m = dateObj.getMinutes();
    // 秒を取得
    var s = dateObj.getSeconds();
    // ミリ秒を取得
    var ms = dateObj.getMilliseconds();
    // クリックした時間を表示
    $("#result").text(h+"時"+m+"分"+s+"秒."+ms);
  });
});