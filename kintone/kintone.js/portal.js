(function() {
  "use strict";

  function test() {
    console.log(kintone.getLoginUser());
    console.log("hello");
  }
  test();

  let portal0 = document.getElementsByClassName(
    ".ocean-portal-announcement-body"
  );
  let portal1 = document.getElementsByClassName(
    ".ocean-portal-announcement-text"
  );
  let portaldiv = document
    .querySelectorAll(".ocean-portal-announcement-text>div")
    .display("");

  console.log(portal0);
  console.log(portal1);
})();
