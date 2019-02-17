(function() {
  "use strict";

  moment.locale("ja");

  kintone.events.on("app.record.index.show", function(event) {
    let record = event.record;
    let day = kintone.app.getFieldElements("日付1");
    for (var i = 0; i < event.records.length; i++) {
      let date = event.records[i]["日付1"].value;
      day[i].innerHTML = moment(date).fromNow();
    }
    return event;
  });
  kintone.events.on(
    [
      "app.record.detail.show",
      "app.record.create.change.日付2",
      "app.record.edit.change.日付2"
    ],
    function(event) {
      let record = event.record;

      let day0 = record["日付2"]["value"];
      record["日付4"]["value"] = moment(day0).fromNow();
      //検索したい文字列を変数に代入
      let day4 = record["日付4"]["value"];
      //文字列に「秒前」という文字があったら位置を代入
      let day00 = day4.indexOf("秒前");
      //２文字目に「時間前」が入っているか
      let day01 = day4.indexOf("時間前");
      if (day00 == 1 || day01 == 2) {
        console.log(day4 + "true");
        //「日付２」の値が「日付３」文字列フィールドにコピー
        record["日付3"]["value"] = record["日付2"]["value"];
        //「日付２」の値を「日付０」日付フィールドにコピー
        record["日付0"]["value"] = record["日付2"]["value"];
      }

      return event;
    }
  );
  kintone.events.on(["app.record.edit.show"], function(event) {
    let record = event.record;

    let day = record["作成日時"]["value"];
    record["test0"]["value"] = moment(day).format("dddd"); //曜日
    // record["test1"]["value"] = moment(day).format("ll");
    // record["test2"]["value"] = moment(day).calender("days"); //
    record["test3"]["value"] = moment(day).format("LL"); //2019年02月17日
    record["test4"]["value"] = moment(day).format("LTS"); //午後06時05分30秒
    return event;
  });
})();
