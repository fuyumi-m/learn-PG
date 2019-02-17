window.addEventListener("load", function(){
  var ele = document.querySelectorAll(":only-child");
  for(var i=0; i<ele.length; i++){
    ele[i].style.backgroundColor = "yellow";
  }
});