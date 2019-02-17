window.addEventListener("load", function(){
  var oEle = document.getElementsByTagName("output")[0];
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var content = oEle.innerText || oEle.textContent;
      content = content + Math.random() + ", ";
      oEle.innerText = oEle.textContent = content;
  });
});
