$(function(){
  // btn1ボタンにイベントを設定する
  $("#btn1").click(function(){
    // 画像をの表示・非表示を切り換える
    $("#photo1").toggle();
  });
  // btn2ボタンにイベントを設定する
  $("#btn2").click(function(){
    // 画像をの表示・非表示をフェード効果付きで切り換える
    $("#photo1").toggle("slow");
  });
});