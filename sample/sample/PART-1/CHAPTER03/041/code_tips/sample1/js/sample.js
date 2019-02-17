window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll("input[value='Nexus']");
      for(var i=0; i<ele.length; i++){
        if(ele[i].type === "text"){
          ele[i].style.background = "orange";
        }
      }
  });
  document.querySelectorAll("input[type=button]")[1]
    .addEventListener("click", function(){
      document.getElementById("kindle").attributes["value"].nodeValue = "Nexus";
  });
  document.querySelectorAll("input[type=button]")[2]
    .addEventListener("click", function(){
      document.getElementById("kindle").value = "Nexus";
  });
});