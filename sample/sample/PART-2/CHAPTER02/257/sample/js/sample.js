$(function(){
  // ページ内がクリックされたらカレンダーを表示する
  $("body").click(function(){
    // カレンダーを表示する
    $(this).datepicker(
      // ダイアログモードにする
      "dialog",
      // 2035年9月2日にする
      "2035/9/2",
      // 日付が選択された時に呼び出す関数（イベントハンドラ）
      function(date){
        $("#result").text("選択したのは"+date+"です。");
      },
      // オプション（特に指定していない）
      { },
      // ダイアログの表示座標を(20, 120)に設定する
      [20, 120]
    );
  });
});