(function() {
  'use strict';

  kintone.events.on('app.record.index.show', function(event) {
    var appId = kintone.app.getId();
    if (event.viewId !== 2031) {
      return;
    }
    if($('.header-contents').length !== 0){
      return;
    }

    var el = kintone.app.getHeaderSpaceElement();
    var headerDiv = $("<div></div>", {
      class: "header-contents",
    });
    //button作成
    var balusButton = $("<button></button>", {
      class: "approval-button",
    }).
    html("一括承認").
    click(function() {
      if(event.records.length > 0) {
        window.swal({
          title: 'すべて承認して大丈夫ですか？',
          text: "表示されているレコードをすべて承認します",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#006855",
          confirmButtonText: "承認！",
          cancelButtonText: "やっぱりやめる",
          closeOnConfirm: false },
          function() {
            var records = [];
            for (var h = 0; h < event.records.length;h++) {
              var obj = {};
              obj['id'] = event.records[h].value;
              obj['action'] = "承認"; //プロセス管理で設定されたアクション名を指定
              records.push(obj);
            }
            var requestObj = {
              "app": appId,
              "records": records
            };
            kintone.api('/k/v1/records/status', 'PUT', requestObj, function() {
              window.swal({title: "承認に成功しました",
            text: "お疲れさまでした",
            type: "success"}, function() {
              lcation.reload();
            });
        });
      });
    }else {
      window.swal({
        title: "申請中のレコードがありません",
        type: "warning"});
    }
  });
  headerDiv.append(balusButton);
  headerDiv.append($("<br />"));
  headerDiv.appendTo(el);
});
})();
