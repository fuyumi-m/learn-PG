window.addEventListener("load", function(){
  var ele = document.getElementsByTagName("th");
  for(var i=0; i<ele.length; i++){
    ele[i].style.background = "orange";
  }
  var ele = document.getElementsByTagName("td");
  for(var i=0; i<ele.length; i++){
    ele[i].style.background = "yellow";
  }
});