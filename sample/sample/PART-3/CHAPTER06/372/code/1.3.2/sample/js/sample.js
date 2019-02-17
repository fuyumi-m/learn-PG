// pagecreateイベントを処理
$("#page01").on("pagecreate", function(){
  $("output:eq(0)").text("pagecreateイベント発生");
});
// pageinitイベントを処理
$("#page01").on("pageinit", function(){
  $("output:eq(1)").text("pageinitイベント発生");
});
// pagebeforeshowイベントを処理
$("#page01").on("pagebeforeshow", function(){
  $("output:eq(2)").text("pagebeforeshowイベント発生");
});
// pageshowイベントを処理
$("#page01").on("pageshow", function(){
  $("output:eq(3)").text("pageshowイベント発生");
});
