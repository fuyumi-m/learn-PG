$(function(){
  // アニメ開始ボタンにクリックイベントを割り当てる
  $("#startAnime").click(function(){
    // 画像のアニメーションを設定
    $("#photo1").animate({ width : 40 }, 1000)
          .animate({ height : 40 }, 1000)
          .animate({ opacity : 0.01 }, 1000)
          .animate({ opacity : 1.0 }, 1000)
          .animate({ height : 120 }, 1000)
          .animate({ width : 160 }, 1000)
          .queue(function(){
            $(this).css("border", "2px solid red");
            $(this).dequeue();
          })
          .queue(function(){
            $("output:eq(0)").text("終わりました");
            $(this).dequeue();
          })
  });
});