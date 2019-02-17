$(function(){
  // ID名prefのセレクトメニューにchangeイベント設定する
  $("#pref").change(function(){
    // 選択された項目名を表示する
    $("output:first").text($("#pref option:selected").text());    
  });
});