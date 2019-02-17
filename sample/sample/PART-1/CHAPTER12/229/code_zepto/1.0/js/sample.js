$(function(){
  // XML文字列
  var xmlText = "<cr><book><name>jQuery本</name></book></cr>";
  // XMLに変換する。不正な値があるとエラーになるので要注意
  var xmlObj = $.parseXML(xmlText);
  // 本の名前を読み出す
  var nameTag = $(xmlObj).find("name");
  var bookName = nameTag[0].textContent;
  // 結果を表示する
  $("#result").text(bookName);
});
