(function() {
  "use strict";

  kintone.events.on(["app.record.detail.show"], function(event) {
    let record = event.record;
    let id = event.recordId;

    let table = event.record.明細.value;

    for (let i = 0; i < table.length; i++) {

    let item[i] = table[i].value["商品名"].value;
    let price[i] = table[i].value["単価"].value;
    let num[i] = table[i].value["数量"].value;
    console.log(item[i] + price[i] + num[i] + id[i]);
    }
    return event;
  });
})();
