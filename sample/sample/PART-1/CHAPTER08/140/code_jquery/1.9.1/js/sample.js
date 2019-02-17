$(function(){
  // #baseを基準にしてdiv要素にclickイベントを割り当てる
  $("#base").on("click", "div", function(evt){
    // 現在の時間を取得
    var time = (new Date()).getTime();
    // イベントを受けた親（委任）要素を取得する
    var tagDele = evt.delegateTarget;
    // 実際にイベントが発生した要素を取得する
    var tagTarget = evt.target;
    // delegateTargetの要素を表示する
    $("output:first").html("delegate："+tagDele.id+"<br>target : "+
      tagTarget.id+"<br>時間："+time);
  });
});