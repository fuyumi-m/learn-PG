$(function(){
  $("#sale")
    // th要素にアクセスし、その前の要素#saleに戻す
    .find("th").css("color", "red").end()
    // td要素にアクセスし、その前の要素#saleに戻す
    .find("td").css("background-color", "yellow").end()
    // tr要素にアクセスし、その前の要素#saleに戻す
    .find("tr").eq(2).css("color", "red");
});