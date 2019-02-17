$(function(){
    // SelectmenuウィジェットのカスタムメソッドselectmenuIconを作成する
    $.widget("custom.selectmenuIcon", $.ui.selectmenu, {
      // 描画する際に要素とスタイルを処理（アイコン付加）する
      _renderItem: function( ul, item ) {
        // option要素の項目内容を読み出す
        var li = $( "<li>", { text: item.label } );
        // アイコンを付加するためのspan要素の設定
        $("<span>", {
          // data-iconurl属性を読み出しCSSのstyle(style属性)として設定する
          style : "background: url("+item.element.attr("data-iconurl")+") 0px 0px",
          // jQuery UIのアイコン表示のCSSクラス名ui-iconを追加する
          class : "ui-icon"
        }).appendTo(li);
        // アイコンを追加したリスト項目の要素を返す
        return li.appendTo(ul);
      }
    });
  // 上記で作成したメソッドを呼び出すと自動的にアイコンが付加される
  $("#mySelectMenu").selectmenuIcon()
});