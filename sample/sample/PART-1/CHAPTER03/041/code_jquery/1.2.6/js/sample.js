$(function(){
  // 最初のボタンにclickイベントを割り当てる
  $("#changeCSS").click(function(){
    // 背景色をオレンジ色にする
    $("input[value='Nexus']").css("background", "orange");
  });
  // 2番目のボタンにclickイベントを割り当てる
  $("#setAttr").click(function(){
    // attrを使ってID名kindleの値をNexusにする
    $("#kindle").attr("value", "Nexus");
  });
  // 3番目のボタンにclickイベントを割り当てる
  $("#setProp").click(function(){
    // propを使ってID名kindleの値をNexusにする
    $("#kindle").prop("value", "Nexus");
  });
});