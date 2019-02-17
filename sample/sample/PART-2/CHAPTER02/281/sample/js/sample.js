$(function(){
  // スピナーを設置する
  $("#orderNumber").spinner({
    // 1回の増減値を設定する
    step : 5,
    // pageup/pagedownボタンを押した場合の増減値を設定する
    page: 20
  });
});