window.addEventListener("load", function(){
  var ele = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  for(var i=0; i<ele.length; i++){
    ele[i].addEventListener("mouseover", function(){
      this.style.backgroundColor = "orange";
    });
    ele[i].addEventListener("mouseout", function(){
      this.style.backgroundColor = "white";
    });
  }
});
