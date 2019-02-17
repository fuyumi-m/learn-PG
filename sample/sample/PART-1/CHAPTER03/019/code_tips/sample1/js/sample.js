window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll("input[type='text']");
      ele[ele.length-1].style.background = "orange";
  });
});