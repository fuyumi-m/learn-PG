window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll("input[value|='mz']");
      for(var i=0; i<ele.length; i++){
        if(ele[i].type === "text"){
          ele[i].style.background = "orange";
        }
      }
  });
});