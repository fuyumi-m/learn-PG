$(function(){
  // 生成ボタンをクリックした場合の処理
  $("#create").click(function(){
    // input要素を生成しスピナーを設置する
    $('<input class="spnr" name="orderNumber" value="7">').appendTo("form").spinner();
  });
  // 破棄ボタンをクリックした場合の処理
  $("#destrory").click(function(){
    // スピナーを個別に処理する
    $(".spnr").each(function(idx, ele){
      // すでにスピナーを破棄した場合はエラーになるのでtry...catchで処理する
      try {
        // スピナーを破棄する
        $(this).spinner("destroy");
      }catch(e){}
    });
  });
});