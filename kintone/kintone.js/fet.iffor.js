
 /* kintone.events.on('app.record.index.show',  function(e) {
   var bgColor = '#cceeff';
   var item = kintone.app.getFieldElements('ジャンル');

  for (var i = 0; i < item.length; i++) {
   var record = e.records[i];
   item[i].style.backgroundColor = bgColor;

   switch (record['ジャンル']['value']) {
   case"HTML/css":
   item[i].style.color = '#ccc';
   break;

   case"javascript":
   item[i].style.color = '#00ff00';
   break;

   case"kintone":
       item[i].style.backgroundColor = '#d0a9f5';
   break;

   default:
   item[i].style.color = 'red';
   }
 }
});*/
(function() {
// とりあえず取得できた
  "use strict";
  kintone.events.on('app.record.detail.show', function(event) {
     var records = event.records;

      var recNo = event['record']['レコード番号']['value'];
//   ? var recNo = record['レコード番号']['value'];
    var param = {
      "app": 27,
      //  'app':kintone.app.getId(),
      // ?'query':kintone.app.getQuery()
      "fields": ["ジャンル","処理内容", "レコード番号"],
    };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', param, function(resp) {
      //取得レコード
       test(resp.records);
    }
    );

  var mySpace = kintone.app.record.getHeaderMenuSpaceElement();




   function test(records) {
  if (!records || !records.length) {
      alert('表示するレコードがありません');
      return;
    }

    var recUrl = 'https://devjyoskn.cybozu.com/k/' + 27 + '/show#record=';
    mySpace.innerHTML = "";

      // 条件に合ったレコード取れた
(function() {
// とりあえず取得できた
  "use strict";
  kintone.events.on('app.record.detail.show', function(event) {
     var records = event.records;

      var recNo = event['record']['レコード番号']['value'];
//   ? var recNo = record['レコード番号']['value'];
    var param = {
      "app": 27,
      //  'app':kintone.app.getId(),
      // ?'query':kintone.app.getQuery()
      "fields": ["ジャンル","処理内容", "レコード番号"],
    };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', param, function(resp) {
      //取得レコード
       test(resp.records);
    }
    );

  var mySpace = kintone.app.record.getHeaderMenuSpaceElement();




   function test(records) {
  if (!records || !records.length) {
      alert('表示するレコードがありません');
      return;
    }

    var recUrl = 'https://devjyoskn.cybozu.com/k/' + 27 + '/show#record=';
    mySpace.innerHTML = "";


    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if(recNo == record.レコード番号.value) {
         var item = document.createElement('div');
        //   var list = document.createElement('div');
           var rec = document.createElement('a');
          item.innerHTML = record.ジャンル.value;

          rec.href = recUrl + record.レコード番号.value;
           rec.innerHTML = record.処理内容.value;
           mySpace.appendChild(item);
           mySpace.appendChild(rec);
        }
        // ? console.log(recNo + ":" + record.レコード番号.value);
       }
     }
  return event;
  });
})();

    for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if(recNo == record.レコード番号.value) {
         var item = document.createElement('div');
        //   var list = document.createElement('div');
           var rec = document.createElement('a');
          item.innerHTML = record.ジャンル.value;

          rec.href = recUrl + record.レコード番号.value;
           rec.innerHTML = record.処理内容.value;
           mySpace.appendChild(item);
           mySpace.appendChild(rec);
        }
        // ? console.log(recNo + ":" + record.レコード番号.value);
       }
     }
  return event;
  });
})();
