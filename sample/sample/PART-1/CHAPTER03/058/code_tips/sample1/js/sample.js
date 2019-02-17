$(function(){
  // 最初のボタンにイベントを割り当て
  $(":button:eq(0)").click(function(){
    $("img").each(function(){
      // すべてのimg要素をアニメーションする
      $(this).animate({ 
        height: "240px",
        borderWidth: "10px"
      }, 8000 );
    });
  });
  // 2番目のボタンにイベントを割り当て
  $(":button:eq(1)").click(function(){
    // アニメーションを停止させる
    $("img:animated").stop();
  });
});