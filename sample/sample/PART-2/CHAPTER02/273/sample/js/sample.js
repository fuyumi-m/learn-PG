$(function(){
  // 生成ボタンをクリックし生成する場合の処理
  $("#create").click(function(){
    // div要素を生成しプログレスバーを設置する
    $('<div></div>').appendTo("#allStatus").progressbar({
      value : (Math.random() * 50 | 0 )+ 10
    });
  });
  // 破棄ボタンをクリックし生成する場合の処理
  $("#destroy").click(function(){
    // プログレスバーの数だけ繰り返す
    $("#allStatus div").each(function(idx, ele){
      // div要素でもプログレスバーでない場合はエラーになるので対処する
      try{
        // プログレスバーを破棄する
        $(this).progressbar("destroy");
      }catch(e){ }
    });
  });
});