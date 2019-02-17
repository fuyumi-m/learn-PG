$(function(){
  // Arrayを生成
  var langList = ["Java", "Ruby", "Python", "JavaScript", "Java", "Ada", "C", "FORTH" ];
  // "JavaScript"が配列内にあるか調べる
  var flag1 = $.inArray("JavaScript", langList);
  // "COBOL"が配列内にあるか調べる
  var flag2 = $.inArray("COBOL", langList);
  // "Java"が配列内の3番目以降にあるか調べる
  var flag3 = $.inArray("Java", langList, 2);
  // 結果を出力
  $("#result").html("JavaScript："+flag1+"<br>COBOL："+flag2+"<br>Java："+flag3);
});