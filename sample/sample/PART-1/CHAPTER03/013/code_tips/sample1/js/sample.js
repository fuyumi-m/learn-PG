window.addEventListener("load", function(){
  var ele = document.querySelectorAll("img[class][alt='dam']");
  for(var i=0; i<ele.length; i++){
    ele[i].style.border = "4px solid red";
  }
});
