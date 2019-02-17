$(function(){
  // document.bodyがXMLノード内にあるか調べる
  var flag1 = $.isXMLDoc(document.body);
  // チェックのためのXMLを生成する
  var domObj = new DOMParser();
  var xmlText = '<?xml version="1.0" encoding="UTF-8"?>';
  xmlText += '<data><item>MZ</item><item>PC</item></data>';
  var xmlDoc = domObj.parseFromString(xmlText, "text/xml");
  var itemNode = xmlDoc.getElementsByTagName("item");
  // itemNode[0]がXMLノード内にあるか調べる
  var flag2 = $.isXMLDoc(itemNode[0]);
  // 結果を出力
  $("output:first").html("document.body："+flag1+"<br>itemNode："+flag2);
});