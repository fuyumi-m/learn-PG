window.addEventListener("load", function(){
  var ele = document.querySelectorAll("#sale tbody tr");
  for(var i=0; i<ele.length; i++){
    if (i < 6){
      ele[i].style.background = "orange";
    }
  }
});