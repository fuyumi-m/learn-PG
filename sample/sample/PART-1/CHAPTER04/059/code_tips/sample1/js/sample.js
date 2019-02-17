window.addEventListener("load", function(){
  var eImg = document.getElementById("myPhoto");
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      alert(eImg.attributes.src.value);
  });
  document.querySelectorAll("input[type=button]")[1]
    .addEventListener("click", function(){
      eImg.attributes.src.value = "images/1.jpg";
  });
});
