(function() {
// とりあえず取得できた
  "use strict";
  kintone.events.on('app.record.index.show', function(event) {
     var records = event.records;


    var param = {
      "app": 27,
      //  'app':kintone.app.getId(),
      // ?'query':kintone.app.getQuery()
      "fields": ["ジャンル", "処理内容", "レコード番号"],
    };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', param, function(resp) {
      //取得レコード
       test(resp.records);
    }
    );

  var mySpace = kintone.app.getHeaderSpaceElement();




   function test(records) {
  if (!records || !records.length) {
      alert('表示するレコードがありません');
      return;
    }
      var category = ['PHP', 'kintone', 'javascript', 'webページ'];
    var recUrl = 'https://devjyoskn.cybozu.com/k/' + 27 + '/show#record=';
    mySpace.innerHTML = "";

    for (var i = 0; i < records.length; i++) {
      if (record.ジャンル.value == category[1]) {
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
    }
  }
  return event;
  });
})();
