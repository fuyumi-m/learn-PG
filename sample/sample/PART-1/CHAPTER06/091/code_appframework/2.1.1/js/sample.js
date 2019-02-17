$(function(){
  // img要素にクリックイベントを割り当てる
  $("img").click(function(){
    alert("クリックされました");
  });
  // 最初のボタンにイベントを割り当てる
  $("#btn1").click(function(){
    // 最初のimg要素を複製する
    var cloneElement = $("#myPhoto").clone();
    $(cloneElement).appendTo("#imageList");
  });
  // 2番目のボタンにイベントを割り当てる
  $("#btn2").click(function(){
    // 最初のimg要素をイベントも含めて複製する
    var cloneElement = $("#myPhoto").clone(true);
    $(cloneElement).appendTo("#imageList");
  });
});