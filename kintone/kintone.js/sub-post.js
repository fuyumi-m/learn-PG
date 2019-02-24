(function() {
  "use strict";

  kintone.events.on("app.record.detail.show", function(event) {
    let record = event.record;

    let subtable = event.record.明細.value;

    let item = [];
    let price = [];
    let num = [];
    //   console.log(price);

    //request
    for (let i = 0; i < subtable.length; i++) {
      item = subtable[i].value["商品名"].value;
      price = subtable[i].value["単価"].value;
      num = subtable[i].value["数量"].value;
    }
    //一行のみpost
    let params = {
      app: 83,
      record: {
        商品名: {
          value: item
        },
        単価: {
          value: price
        },
        数量: {
          value: num
        },
        親レコード番号: {
          value: record["レコード番号"]["value"]
        }
      }
    };

    kintone.api(
      kintone.api.url("/k/v1/record", true),
      "POST",
      params,
      function(resp) {
        //成功時
        console.log(params);
      },
      function(error) {
        alert("失敗しました");
      }
    );
  });
})();
