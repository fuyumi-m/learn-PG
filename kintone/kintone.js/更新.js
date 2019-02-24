(function() {
  "use strict";

  var updateApp = 51;


      /* 一括更新するrercordデータを作成する関数
       *@param records 一括取得したデータ
       *@param {array} 一括更新するrecordsデータ
       */

      function createputRecords(records) {
        var putRecords = [];
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          putRecords[i] = {
            id: record['$id'].value,
            record: {
              氏名: {
                value: record.氏名.value
              },
              住所: {
                  value: record.住所.value
              }
            }
          };
        }
        return putRecords;
      }

      /**
       *@param appId 更新を行うアプリ
       *@param records 一括更新するrecordsデータ
       */

      function updateLookup(appId, records) {
        kintone.api(
          kintone.api.url('/k/v1/records', true),
          'PUT', {
            app: appId,
            records: records
          },
          function(resp) {
            alert('put成功:' + appId);

          }
        );
      }

      // 保存実行時イベント
      kintone.events.on(['app.record.edit.submit', 'app.record.index.edit.submit'], function(event) {

      //レコードの一括取得
      kintone.api(
        kintone.api.url('/k/v1/records', true), 'GET', {
          app: updateApp,
          query: '従業員番号 = ' + event.record['従業員番号'].value
        },
        function(resp) {
          var records = resp.records;
          // ルックアップの更新
          updateLookup(updateApp, createputRecords(records));
        }
      );
      return event;
      });
})();
