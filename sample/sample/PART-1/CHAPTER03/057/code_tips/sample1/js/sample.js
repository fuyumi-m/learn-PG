window.addEventListener("load", function(){
  setInterval(function(){
    var ele = document.querySelector(":focus");
    if(ele){
      document.getElementsByTagName("output")[0].innerHTML = ele.value;
    }
  }, 200);
});