$(function(){
  $("#btn").click(function(){
    $(":file").each(function(){
      // ファイル名を表示
      var filename = $(this).val();
      alert(filename);
    });
  });
});