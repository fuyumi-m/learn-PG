window.addEventListener("load", function(){
  var ele = document.querySelectorAll("#sale tbody td");
  for(var i=0; i<ele.length; i++){
    if(ele[i].textContent.indexOf("-") > -1){
      ele[i].style.color = "red";
    }
  }
});
