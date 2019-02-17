window.addEventListener("load", function(){
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    var oEle = document.getElementsByTagName("output")[0];
    oEle.innerHTML = xhr.responseText;
  }
  xhr.open("get", "./data.txt");
  xhr.send(null);
});
