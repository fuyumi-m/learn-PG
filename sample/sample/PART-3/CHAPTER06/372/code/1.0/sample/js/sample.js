// pagecreateイベントを処理
$("#page01").live("pagecreate", function(){
  $("output:eq(0)").text("pagecreateイベント発生");
});
// pageinitイベントを処理
$("#page01").live("pageinit", function(){
  $("output:eq(1)").text("pageinitイベント発生");
});
// pagebeforeshowイベントを処理
$("#page01").live("pagebeforeshow", function(){
  $("output:eq(2)").text("pagebeforeshowイベント発生");
});
// pageshowイベントを処理
$("#page01").live("pageshow", function(){
  $("output:eq(3)").text("pageshowイベント発生");
});
