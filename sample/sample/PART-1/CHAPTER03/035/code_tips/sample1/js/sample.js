window.addEventListener("load", function(){
  var btn = document.querySelectorAll("input[type=button]");
  btn[0].addEventListener("click", function(){
    var ele = document.querySelectorAll("img");
    for(var i=0; i<ele.length; i++){
      if (ele[i].style.display === "none"){
        ele[i].style.border = "4px solid blue";
      }
    }
  });
  btn[1].addEventListener("click", function(){
    var ele = document.querySelectorAll("img");
    for(var i=0; i<ele.length; i++){
      ele[i].style.display = "";
    }
  });
});
