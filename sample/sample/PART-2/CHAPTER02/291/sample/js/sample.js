$(function(){
  // ツールチップを設定する
  $("#worldtime a").tooltip();
  // 1秒ごとに内容を更新する
  (function(){
    // 現在の時間を読み出す
    var dt = new Date();
    // 時刻を読み出し2桁に揃える
    var h = ("0"+dt.getHours()).slice(-2);
    var m = ("0"+dt.getMinutes()).slice(-2);
    var s = ("0"+dt.getSeconds()).slice(-2);
    var time = h+"時"+m+"分"+s+"秒";
    // ツールチップの内容を書き換える
    $("#worldtime a").tooltip("option", "content", time);
    // 1秒ごとに更新処理を呼び出す
    setTimeout(arguments.callee, 1000);
  })();
});