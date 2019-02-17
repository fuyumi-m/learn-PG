window.addEventListener("load", function(){
  var ele = document.getElementsByTagName("output")[0];
  var eImg = document.querySelectorAll("#photo1")[0]
  eImg.addEventListener("mousedown", function(){
    ele.innerText = ele.textContent = "マウスダウンイベント発生";
    this.style.opacity = 0.5;
  });
  eImg.addEventListener("mouseup", function(){
    ele.innerText = ele.textContent = "マウスアップイベント発生";
    this.style.opacity = 1.0;
  });
});
