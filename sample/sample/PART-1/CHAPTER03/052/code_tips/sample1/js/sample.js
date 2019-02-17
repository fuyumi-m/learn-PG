window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll("input");
      for(var i=0; i<ele.length; i++){
        if (ele[i].type === "submit"){
          ele[i].style.border = "2px dotted red";
        }
      }
  });
});
