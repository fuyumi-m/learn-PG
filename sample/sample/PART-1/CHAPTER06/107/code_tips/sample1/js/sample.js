window.addEventListener("load", function(){
  var oEle = document.getElementsByTagName("output")[0];
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var content = oEle.innerHTML;
      content = content + "<p>"+Math.random()+"</p>";
      oEle.innerHTML = content;
  });
});
