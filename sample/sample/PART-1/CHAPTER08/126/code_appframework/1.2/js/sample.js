$(function(){
  // 画像にclickイベントを紐付ける（バインドする）
  $("img").bind("click", function(){
    // クリックした画像のalt属性を読み出す
    var altText = this.alt;
    // 画像のalt属性の内容を表示
    $("#result").text("クリックイベント発生："+altText);
  });
});