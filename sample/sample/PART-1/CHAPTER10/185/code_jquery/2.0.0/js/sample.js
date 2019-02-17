$(function(){
  // 読み込むJSONファイルのURL
  var url = "./data.json";
  // 同一ドメイン上のサーバー上にあるdata.jsonファイルを読み込む
  $.getJSON(url, function(data, status, jqXHR){
    // JSONデータからyearプロパティの値を読み出す
    var year = data.year;
    // JSONデータからmonthプロパティの値を読み出す
    var month = data.month;
    // JSONデータからnameプロパティの値を読み出す
    var name = data.name
    $("output:first").text("読み込んだデータ："+year+"年"+month+"月　"+name);
  });
});