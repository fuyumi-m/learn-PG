(function() {
  // とりあえず取得できた
  "use strict";
  kintone.events.on('app.record.detail.show', function(event) {
    var records = event.records;


    var param = {
      "app": 27,
      //  'app':kintone.app.getId(),
      // ?'query':kintone.app.getQuery()
      "query": "レコード番号=" + event.record['レコード番号']['value'],
      "fields": ["ジャンル", "処理内容", "レコード番号"],
    };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', param, function(resp) {
      //取得レコード
      test(resp.records);
    });

    //  一覧表示用 var mySpace = kintone.app.getHeaderSpaceElement();

    function test(records) {
      if (!records || !records.length) {
        alert('表示するレコードがありません');
        return;
      }

      var recUrl = 'https://devjyoskn.cybozu.com/k/' + 27 + '/show#record=';
      var mySpace = kintone.app.record.getHeaderMenuSpaceElement();

      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var tmpA = document.createElement('div');
        var tmpB = document.createElement('div');
        var tmpC = document.createElement('a');
        tmpA.innerHTML = record.処理内容.value;
        tmpC.href = recUrl + record.レコード番号.value;
        tmpC.innerHTML = record.ジャンル.value;
        mySpace.appendChild(tmpA);
        mySpace.appendChild(tmpC);
      }
      alert(tmpA + ':' + tmpC);
    }
    return event;
  });
})();
