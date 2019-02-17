window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll("td");
      for(var i=0; i<ele.length; i++){
        if (ele[i].childNodes.length > 0){
          ele[i].style.background = "orange";
        }
      }
  });
});
