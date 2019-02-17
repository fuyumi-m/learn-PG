$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.addBackBtn = true;
  $.mobile.page.prototype.options.backBtnText = "戻る";
  $.extend($.mobile, {
    loadingMessage : "読み込み中です...",
    pageLoadErrorMessage : "読み込み中にエラーが発生しました",
    ajaxEnabled : false,
    defaultDialogTransition : "slidedown"
  });
})