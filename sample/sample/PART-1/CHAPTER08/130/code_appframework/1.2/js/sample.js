$(function(){
  // 最初の画像にmouseoverイベントを割り当てる
  $("#img1").click({ camera : "Nikon D1X", year: 2004 }, message);
  // 2番目の画像にmouseoverイベントを割り当てる
  $("#img2").click({ camera : "EOS 5D mark II", year: 2010 }, message);
  // 3番目の画像にmouseoverイベントを割り当てる
  $("#img3").click({ camera : "TM700", year: 2011 }, message);
  // mouseover時に呼び出されるイベントハンドラ
  function message(evt){
    // 撮影カメラ名
    var cameraName = evt.data.camera;
    // 撮影年月日
    var ymd = evt.data.year;
    // データを画面に表示
    $("#result").html("カメラ："+cameraName+"<br>撮影年："+ymd);
  }
});