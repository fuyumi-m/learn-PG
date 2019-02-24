(function() {

"use strict";

kintone.events.on('app.record.detail.show', function(event) {
    //'アプリID'に格納された値を取得
     var appId = event.record['アプリID'].value;
      if (!appId) {
        return;
      }

    //kintone REST API レコードGET
    kintone.api(
      kintone.api.url('/k/v1/app', true),  //pathOrUrl
      'GET',                                 //method
      { "id": appId },
      function(resp) {   //callback
        alert(resp, name);
      }

    );
});


})();
