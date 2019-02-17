(function() {
  "use strict";

  kintone.events.on(
    ["app.record.create.change.日付1", "app.record.edit.change.日付1"],
    function(event) {
      let record = event.record;
      let days = record["日付1"]["value"];
      let yy = days.slice(0, 4); //0番目から4番目を切り出す
      let mm = days.substr(5, 2); //5番目から２桁切り出す
      let dd = days.slice(-2); //後ろから２桁切り出す

      let today = new Date();
      let y = today.getFullYear();
      let m = today.getMonth() + 1;
      let d = today.getDate();
      m = ("0" + m).slice(-2);
      d = ("0" + d).slice(-2);
      today = y + "-" + m + "-" + d;

      if (yy == y) {
        if (mm == m) {
          if (dd == d) {
            //
            console.log("今日のことです");
          }
        }
      }
      alert(today + "!=" + days);

      return event;
    }
  );
})();
