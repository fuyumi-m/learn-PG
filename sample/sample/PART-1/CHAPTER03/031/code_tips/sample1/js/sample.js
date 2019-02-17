window.addEventListener("load", function(){
  var ele = document.querySelectorAll("#myList ol:first-child");
  for(var i=0; i<ele.length; i++){
    ele[i].style.backgroundColor = "yellow";
  }
  var ele = document.querySelectorAll("#myList li:first-child");
  for(var i=0; i<ele.length; i++){
    ele[i].style.backgroundColor = "orange";
  }
});