(function() {
  "use strict";

  function test() {
    console.log(kintone.getLoginUser());
    console.log("hello");
  }
  test();

  //   var portal = document.getElementsByClassName(
  //     ".ocean - portal - announcement-text"
  //   );
  //   portal.id = "portal";
  let userName = function() {
    userName = kintone.getLoginUser().name;
    if (userName != test) {
      return;
    }
    const portal = document.getElementsByClassName(
      ".ocean-portal-announcement"
    );
    portal.id = "portal";
    portal.style.display = "";
  };
  userName();
  // if (!linkTest) {
  //   return;
  // }
  // var testA = document.createElement("a");
  // testA.href =
  //   location.protocol +
  //   "//" +
  //   location.hostname +
  //   "/k/#/space" +
  //   "/1/thread/1";

  // location.replace(testA);

  console.log("FIN");
})();
