$(function(){
  // ボタンにclickイベントを割り当てる
  $("#btn").click(function(){
    // チェックボックスを指定する
    $(":checkbox").each(function(){
      // チェックボックスのチェックを外す
      $(this).attr("checked", false);
    });
  });
});