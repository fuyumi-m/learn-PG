$(document).on("pageinit", "#mainPage", function(){
  var ele = document.getElementById("myMap");  // 地図の表示先要素
  var map = new google.maps.Map(ele, {  // 地図を表示
    zoom : 17,  // ズームレベルを指定
    mapTypeId : google.maps.MapTypeId.ROADMAP,  // 通常の地図
    center : new google.maps.LatLng(36.114329,137.947844)  // 中心の緯度経度
  });
});