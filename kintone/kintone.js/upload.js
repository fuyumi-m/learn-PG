
(function() {
 "use strict";
  kintone.events.on(['app.record.create.submit',
                      'app.record.edit.submit'], function(event) {
                     var record = event.record;



                     var money = record['額面'].value;
                     var month = record['個数'].value;

                     //合計金額の算出
                     var sumtotal = money * month;

                     //￥10000以上は2割引
                     if (sumtotal >= 10000) {
                       sumtotal = sumtotal / 100 * 80;
                       //50000以上は1割引き
                     } else if (sumtotal >= 50000) {
                       sumtotal = sumtotal / 100 * 90;
                     }

                      record['収入'].value = sumtotal;
                      return event;
                    });
   kintone.events.on(['app.record.create.show', 'app.record.edit.show'], function(event) {
                      var record = event.record;

                      //収入フィールドの入力制限
                       event.record['収入'].disabled = true;
                     return event;
                   });
})();
