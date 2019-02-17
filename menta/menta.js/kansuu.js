(function() {
        for (let i = 1; i < 100; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + "FizzBuzz");
          } else if (i % 3 === 0) {
            console.log(i + "Fizz");
          } else if (i % 5 === 0) {
            console.log(i + "Buzz");
          }
        }

        // 課題1: 引数に渡した数値(整数)に応じて、奇数なら「true」、偶数なら「false」を返す「isOddNumber関数」を作る
        //   - 関数宣言の形式で作ること
        //   - 「isOddNumber関数」を定義した後に、console.logを使って「isOddNumber関数」の引数に次の数を入力して、期待している結果が返ってくること確認する
        //     - 入力: 9, 期待する結果: true
        //     - 入力: 14, 期待する結果: false

        // ここにisOddNumber関数を作る
        function isOddNumber(num) {
          if (num % 2 !== 0) {
            console.log("true");
          } else {
            console.log("false");
          }
        }

        // ここにconsole.logを使って「9」「14」を引数に渡したときの結果値を出力する
        isOddNumber(9);
        isOddNumber(14);
        // 課題2: 引数に渡した「1」以上の整数をつかって階乗の結果を返す「factorial関数」を作る (階乗とは: https://ja.wikipedia.org/wiki/%E9%9A%8E%E4%B9%97)
        //   - 関数式の形式で作ること
        //   - 「factorial関数」を定義した後に、console.logを使って「factorial関数」の引数に次の数を入力して、期待している結果が返ってくること確認する
        //     - 入力: 4, 期待する結果: 24 (= 4 * 3 * 2 * 1)
        //     - 入力: 5, 期待する結果: 120 (= 5 * 4 * 3 * 2 * 1)
        //   - 様々な実装方法があるため次の3つの内、好きなやり方で実装して構わない
        //     1. forループを使ったやり方
        //     2. whileループを使ったやり方
        //     3. 【チャレンジ問題】再帰関数を使ったやり方(参考記事: https://qiita.com/chuck0523/items/2c40a5da90a1d73ab956)

        // ここにfactorial関数を作る
        let i = 1;
        let sum = 1;
        const factoria = function(num) {
          while (i < num) {
            //numの値まで繰り返す
            sum *= i;
            i++;
          }
          console.log((num *= sum));
        };
        // ここにconsole.logを使って「4」「5」を引数に渡したときの結果値を出力する
        factoria(4);
        factoria(5);
        // 課題3: 引数に渡した、全ての小文字の文字列の先頭1文字を大文字に変換した文字列を返す「convertFirstCharacterToUpperCase関数」を作る
        //   - アロー関数の形式で作ること
        //   - 「convertFirstCharacterToUpperCase関数」を定義した後に、console.logを使って「convertFirstCharacterToUpperCase関数」の引数に次の文字列を入力して、期待している結果が返ってくること確認する
        //     - 入力: 'hello', 期待する結果: 'Hello'
        //     - 入力: 'world', 期待する結果: 'World'
        //   - 「先頭1文字を大文字にするやり方」の参考記事: https://qiita.com/ichironagata/items/091f8cd629b82b0dcbf8

        // ここにconvertFirstCharacterToUpperCase関数を作る

        const convertFirstCharacterToUpperCase = str => {
          let text = str.slice(str, 1);
          let text2 = text.toUpperCase();
          let result = str.replace(text, text2);
          console.log(result);
        };

        convertFirstCharacterToUpperCase("hello");
        convertFirstCharacterToUpperCase("world");
      })();