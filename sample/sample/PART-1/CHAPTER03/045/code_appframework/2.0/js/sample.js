$(function(){
  // 内容に-が含まれる場合は赤色の文字にする
  $("#sale tbody td:contains('-')").css("color", "red");
});