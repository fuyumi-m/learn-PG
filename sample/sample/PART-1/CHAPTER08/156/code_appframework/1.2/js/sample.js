$(function(){
  // input要素にkeydownイベントを割り当てる
  $(document).on("keydown", "input", function(event){
    // フェードさせてイベントが発生した事を示す
    $("#kd").css("opacity", 1.0);
    setTimeout('$("#kd").css("opacity", 1.0)', 1000);
  });
  // input要素にkeypressイベントを割り当てる
  $(document).on("keypress", "input", function(event){
    // フェードさせてイベントが発生した事を示す
    $("#kp").css("opacity", 1.0);
    setTimeout('$("#kp").css("opacity", 1.0)', 1000);
  });
  // input要素にkeyupイベントを割り当てる
  $(document).on("keyup", "input", function(event){
    // フェードさせてイベントが発生した事を示す
    $("#ku").css("opacity", 1.0);
    setTimeout('$("#ku").css("opacity", 1.0)', 1000);
  });
});