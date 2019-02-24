(function() {
  "use strict";

  function load(src) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    //PC用の場合
    if (kintone.app.getHeaderSpaceElement()) {
      try {
        let head = kintone.app.getHeaderSpaceElement();
        head.appendChild(script);
      } catch (e) {
        return;
      }
    }
    // PC用の場合（詳細画面）
    if (kintone.app.record.getHeaderMenuSpaceElement()) {
      try {
        let head = kintone.app.record.getHeaderMenuSpaceElement();
        head.appendChild(script);
      } catch (e) {
        return;
      }
    }
    //モバイル用の場合
    if (kintone.mobile.app.getHeaderMenuSpaceElement()) {
      try {
        let head = kintone.mobile.app.getHeaderSpaceElement();
        head.appendChild(script);
      } catch (e) {
        return;
      }
    }
  }

  //緯度経度を空にする
  function empty(event) {
    let rec = event["record"];
    //保存の際に緯度経度を空にする
    rec["緯度"]["value"] = "";
    rec["経度"]["value"] = "";
    return event;
  }

  //詳細画面を開いたときに実行します
  function detailshow(event) {
    loadMap();
    waitloaded(event, "detail", 10000, 100);
  }

  //一覧画面を開いたときに実行
  function indexshow() {
    loadMap();
    waitloaded(event, "index", 10000, 100);
  }

  //GoogleMap APIをロードする
  function loadMap() {
    //document.writeを定義
    let nativeWrite = document.write;
    document.write = function(html) {
      let m = html.match(/script.+src="([^~]+)"/);
      if (m) {
        load(m[1]);
      } else {
        nativeWrite(html);
      }
    };

    //GoogleMap APIライブラリをダウンロード
    load("https://maps-api-ssl.google.com/maps/api/js?v=3&sensor=false");
  }

  //GooglMap API ロードされるまで待機
  function waitloaded(event, mode, timeout, interval) {
    setTimeout(function() {
      timeout -= interval;
      if (
        typeof google !== "undefined" &&
        typeof google.maps !== "undefined" &&
        typeof google.maps.version !== "undefined"
      ) {
        if (mode === "detail") {
          setLocationDetail(event);
        } else if (mode === "index") {
          setLocationIndex(event);
        }
      } else if (timeout > 0) {
        waitloaded(event, mode, timeout, inteval);
      }
    }, interval);
  }

  function setLocationIndex(event) {
    let lat = [];
    let lng = [];
    let recNo = [];
    let rec;

    //レコード番号と緯度経度を取得
    if (event.type == "app.record.index.show") {
      rec = event.records;
    } else if (event.type == "mobile.app.record.index.show") {
      let appUrl =
        kintone.api.url("/k/v1/records") +
        "?app=" +
        event.appId +
        "&query=" +
        encodeURI(
          "order by record_no desc&fields[0]=record_no&fields[1]=lat&fields[2]=lng"
        );
    }
  }
})();
