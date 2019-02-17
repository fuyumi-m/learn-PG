(function() {
  "use strict";

  moment.locale("ja");

  kintone.events.on(
    [
      "app.record.detail.show",
      "app.record.edit.show",
      "app.record.create.show",
      "app.record.index.show"
    ],
    function(event) {
      let record = event.record;
      let day = kintone.app.record.getFieldElement("日付0");
      for (var i = 0; i < event.records.length; i++) {
        let date = event.records[i]["日付0"].value;
        day[i].innerHTML = moment(date).fromNow();
      }
      return event;
    }
  );
})();
