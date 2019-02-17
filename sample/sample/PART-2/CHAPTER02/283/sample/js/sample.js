$(function(){
  // スピナーを設置する
  $("#orderNumber").spinner({
    // スピンボタンがクリック中の処理をする
    spin : function(evt, ui){
      // イベント発生時の時間を表示する
      $("#result1").text("spinイベント発生："+Date.now());
    },
    // スピンボタンが押された始めた時の処理をする
    start : function(evt, ui){
      // イベント発生時の時間を表示する
      $("#result2").text("startイベント発生："+Date.now());
    },
    // スピンボタンの押下が終わった時の処理をする
    stop : function(evt, ui){
      // イベント発生時の時間を表示する
      $("#result3").text("stopイベント発生："+Date.now());
    },
    // 内容が変化した時の処理をする
    change : function(evt, ui){
      // イベント発生時の時間を表示する
      $("#result4").text("changeイベント発生："+Date.now());
    }
  });
});