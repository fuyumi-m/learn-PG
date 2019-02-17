(function() {
  "use strict";

  kintone.events.on(
    ["app.record.edit.change.選択", "app.record.create.change.選択"],
    function(event) {
      let record = event.record;

      let radio = record.選択.value;
      kintone.app.record.setGroupFieldOpen("グループA", false);
      kintone.app.record.setGroupFieldOpen("グループB", false);

      switch (radio) {
        case "A":
          kintone.app.record.setGroupFieldOpen("グループA", true);
          break;

        case "B":
          kintone.app.record.setGroupFieldOpen("グループB", true);
          break;

        case "C":
          kintone.app.record.setGroupFieldOpen("グループA", true);
          kintone.app.record.setGroupFieldOpen("グループB", true);
          break;
      }
      return event;
    }
  );
  kintone.events.on(
    [
      "app.record.detail.show",
      "app.record.create.change.契約種目",
      "app.record.edit.change.契約種目"
    ],
    function(event) {
      let record = event.record;

      kintone.app.record.setGroupFieldOpen("賃貸", false);
      kintone.app.record.setGroupFieldOpen("リフォーム", false);
      kintone.app.record.setGroupFieldOpen("紹介料", false);

      let categori = record.契約種目.value;
      console.log(categori);

      if (categori == "賃貸") {
        kintone.app.record.setGroupFieldOpen("賃貸", true);
      } else if (categori == "リフォーム") {
        kintone.app.record.setGroupFieldOpen("リフォーム", true);
      } else if (categori == "紹介料") {
        kintone.app.record.setGroupFieldOpen("紹介料", true);
      } else {
        alert("賃貸、リフォーム、紹介料の中から選択してください");
      }

      return event;
    }
  );
})();
