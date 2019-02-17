window.addEventListener("load", function(){
  var ele = document.querySelectorAll("#myList li:nth-child(1)");
  for(var i=0; i<ele.length; i++){
    ele[i].style.backgroundColor = "yellow";
  }
  var ele = document.querySelectorAll("#myList li:nth-child(2)");
  for(var i=0; i<ele.length; i++){
    ele[i].style.backgroundColor = "orange";
  }
});