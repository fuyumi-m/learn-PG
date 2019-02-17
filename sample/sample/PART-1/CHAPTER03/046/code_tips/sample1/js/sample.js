window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll("td:not(.down)");
      for(var i=0; i<ele.length; i++){
        ele[i].style.color = "black";
      }
  });
});