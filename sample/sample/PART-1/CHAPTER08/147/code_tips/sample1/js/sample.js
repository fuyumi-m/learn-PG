window.addEventListener("load", function(){
  document.querySelectorAll("#photo1")[0]
    .addEventListener("click", function(){
      var ele = document.getElementsByTagName("output")[0];
      ele.innerText = ele.textContent = "クリックイベント発生";
      this.style.opacity = 0.5;
  });
});
