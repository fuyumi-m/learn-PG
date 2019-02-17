$(function(){
  // ボタンにclickイベントを割り当てる
  $(":button").click(function(){
    // チェックボックスを指定する
    $(":checkbox").each(function(){
      // チェックボックスのチェックを外す
      $(this).attr("checked", false);
    });
  });
});