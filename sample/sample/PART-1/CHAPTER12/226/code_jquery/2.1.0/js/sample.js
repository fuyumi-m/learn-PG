$(function(){
  $("input[type=button]").click(function(){
    // テキストフィールドの内容を取得
    var str = $("input:first").val();
    // 左右の空白を削除
    var resultStr = $.trim(str);
    // 結果を出力
    $("output:first").html("<br>処理前："+str+"【"+escape(str)+"】<br>"+
          "処理後："+resultStr+"【"+escape(resultStr)+"】");
  });
});