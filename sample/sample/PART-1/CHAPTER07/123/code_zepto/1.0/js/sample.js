$(function(){
  // 最初のボタンにイベントを割り当て
  $("#readCSS").click(function(){
    // h1要素のCRLaboプロパティを読み出しアラートダイアログに表示
    alert($("#myHeader").css("CRLabo"));
  });
  // 2番目のボタンにイベントを割り当て
  $("#setCSS").click(function(){
    // h1要素のCRLaboプロパティの値(真偽値)を読み出し
    var flag = $("#myHeader").css("CRLabo");
    // true←→falseを交互に切り換えてプロパティに設定する
    $("#myHeader").css("CRLabo", !flag);
  });
});
// CRLaboというカスタムCSSプロパティを利用できるようにする
$.cssHooks["CRLabo"] = {
  // 読み出しの場合の処理
  get : function(ele, computed, extra ) {
    return $(ele).data("CRLabo");
      },
  // 値を設定する場合の処理
  // CRLaboプロパティにはtrueかfalseが設定可能
  // trueなら赤色を文字色として設定し、そうでない場合は黒色にする
      set: function(ele, value){
    // 設定値をdata()メソッドを使って保存する
    $(ele).data("CRLabo", value);
    // trueの場合の処理
    if (value === true){
      $(ele).css("color", "red");
    }else{
    // falseの場合の処理
      $(ele).css("color", "black");
    }
      }
}
