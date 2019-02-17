$(function(){
  // ツールチップを設定する
  $("#worldheritage a").tooltip({
    position: {
      my : "left center",
      at : "right center"
    }
  });
  // 順番に全てのツールチップを表示するためのカウンタを設定
  var counter = 3;
  // 最初は1秒後に、その後は3秒後にツールチップを順番に表示する
  setTimeout(function(){
    // 現在表示されているツールチップを非表示にする
    $("#worldheritage a").eq(counter).tooltip("close");
    // カウンタを増やす。ただし、0〜3の範囲になるように調整する
    counter = (counter + 1) & 3;
    // ツールチップを表示する
    $("#worldheritage a").eq(counter).tooltip("open");
    // 3秒後に自分自身（関数）を呼び出す
    setTimeout(arguments.callee, 3000);
  }, 1000);
});