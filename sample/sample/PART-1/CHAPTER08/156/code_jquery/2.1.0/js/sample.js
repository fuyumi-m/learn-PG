$(function(){
  // input要素にkeydownイベントを割り当てる
  $("input").keydown(function(event){
    // フェードさせてイベントが発生した事を示す
    $("#kd").fadeTo(0, 1.0).fadeTo("slow", 0);
  });
  // input要素にkeypressイベントを割り当てる
  $("input").keypress(function(event){
    // フェードさせてイベントが発生した事を示す
    $("#kp").fadeTo(0, 1.0).fadeTo("slow", 0);
  });
  // input要素にkeyupイベントを割り当てる
  $("input").keyup(function(event){
    // フェードさせてイベントが発生した事を示す
    $("#ku").fadeTo(0, 1.0).fadeTo("slow", 0);
  });
});