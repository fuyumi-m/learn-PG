window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll(".note");
      for(var i=0; i<ele.length; i++){
        ele[i].style.background = "orange";
      }
  });
});