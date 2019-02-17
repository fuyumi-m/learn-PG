window.addEventListener("load", function(){
  document.querySelectorAll("input[type=button]")[0]
    .addEventListener("click", function(){
      var ele = document.querySelectorAll(":enabled");
      for(var i=0; i<ele.length; i++){
        // テキストフィールドだけを対象にする
        if(ele[i].type === "text"){
          // 背景色をオレンジ色にする
          ele[i].style.backgroundColor = "orange";
        }
      }
  });
});