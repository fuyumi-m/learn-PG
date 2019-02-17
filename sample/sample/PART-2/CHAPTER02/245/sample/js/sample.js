$(function(){
  // オートコンプリート機能を設定する
  $("#pet").autocomplete({
    // 表示リストを設定する
    source:[
      "<img src='images/dog.png'>柴犬",
      "<img src='images/dog.png'>土佐犬",
      "<img src='images/dog.png'>秋田犬",
      "<img src='images/dog.png'>バカ犬",
      "<img src='images/dog.png'>ドーベルマン",
      "<img src='images/dog.png'>チワワ",
      "<img src='images/cat.png'>三毛猫",
      "<img src='images/cat.png'>チェシャ猫",
      "<img src='images/cat.png'>なめ猫",
      "<img src='images/cat.png'>シャム猫"
    ],
    // HTMLタグを有効にする
    html : true
  });
});