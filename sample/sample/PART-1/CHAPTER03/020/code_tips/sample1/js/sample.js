window.addEventListener("load", function(){
  var ele = document.querySelectorAll("h1+ol");
  for(var i=0; i<ele.length; i++){
    ele[i].style.border = "1px solid red";
  }
});
