window.addEventListener("load", function(){
  document.getElementById("pref").addEventListener("change", function(){
    document.getElementsByTagName("output")[0].innerHTML = this.value;
  });
});
