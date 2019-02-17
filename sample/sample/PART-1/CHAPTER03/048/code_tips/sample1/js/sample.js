window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var text = "";
      var ele = document.querySelectorAll("input[type=checkbox]:checked");
      for(var i=0; i<ele.length; i++){
        text = text + ele[i].name + "<br>";
      }
      document.getElementsByTagName("output")[0].innerHTML = text;
  });
});
