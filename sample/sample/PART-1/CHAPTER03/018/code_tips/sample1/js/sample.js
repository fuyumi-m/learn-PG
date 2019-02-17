window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.getElementsByTagName("input");
      ele[0].style.background = "orange";
  });
});