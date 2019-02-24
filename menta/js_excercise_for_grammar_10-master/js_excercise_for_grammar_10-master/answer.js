/**
 * 課題1: 数値が格納されている配列を引数で受け取り、一番大きい数値を削除した配列を返す関数を作成する
 *   - 関数名は「removeMaxNumberFromArray」とする
 *   - removeMaxNumberFromArray関数は次の1つの引数を持つ
 *     - 第1引数: 配列(引数名は_numbersとする)
 *   - 引数にわたす配列は事前に変数に格納する
 *     - 変数名は「numbers」とする
 *     - 「numbers」の内容は[10, 500, 234, 965, 221] とする
 *   - removeMaxNumberFromArray関数の戻り値は、第1引数で渡した配列の中から一番大きい数値を削除した新しい配列が返る
 *     - 戻り値は、「returnedNumbers」という変数に代入する
 *   - numbersとreturnedNumbersの中身をconsole.logで確認する。
 *   - 期待する結果
 *     - removeMaxNumberFromArray関数の戻り値は[10, 500, 234, 221]である
 *     - removeMaxNumberFromArray関数を実行した後の配列numbersの内容は [10, 500, 234, 965, 221] のままである
 */
const removeMaxNumberFromArray = (_numbers) => {
  const copiedNumbers = _numbers.slice();
  let indexOfMaxNumber = 0;
  let currentMaxNumber;
  copiedNumbers.forEach((number, index) => {
    if(currentMaxNumber === undefined || currentMaxNumber < number) {
      currentMaxNumber = number;
      indexOfMaxNumber = index;
    }
  });

  copiedNumbers.splice(indexOfMaxNumber, 1);

  return copiedNumbers;
};

const numbers = [10, 500, 234, 965, 221];
const returnedNumbers = removeMaxNumberFromArray(numbers);

console.log('numbersの内容は [10, 500, 234, 965, 221] であるべき : ', numbers);
console.log('returnedNumbersの内容は [10, 500, 234, 221] であるべき : ', returnedNumbers);


/**
 * 課題2: 数値が格納されている配列を引数で受け取り、小さい順に並べ替える
 *   - 関数名は「sortNumbers」とする
 *   - sortNumbers関数は次の1つの引数を持つ
 *     - 第1引数: 配列(引数名は_numbersとする)
 *   - 引数にわたす配列は事前に変数に格納する
 *     - 変数名は「beforeSortNumbers」とする
 *     - 「beforeSortNumbers」の内容は [1000, 10, 500, 234, 965, 221, 102] とする
 *   - sortNumbers関数の戻り値は、第1引数で渡した配列内の数値を小さい順に並べた配列となる
 *     - 戻り値は、「afterSortNumbers」という変数に代入する
 *   - beforeSortNumbersとafterSortNumbersの中身をconsole.logで確認する。
 *   - 期待する結果
 *     - sortNumbers関数の戻り値は[10, 102, 221, 234, 500, 965, 1000]である
 *     - sortNumbers関数を実行した後のbeforeSortNumbersの内容は [1000, 10, 500, 234, 965, 221, 102] のままである
 *   - その他
 *     - 「Array.prototype.sort()」を使う
 *       - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
const sortNumbers = (_numbers) => {
  const copiedNumbers = _numbers.slice();
  copiedNumbers.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0
  });

  return copiedNumbers;
};

const beforeSortNumbers = [1000, 10, 500, 234, 965, 221, 102];
const afterSortNumbers = sortNumbers(beforeSortNumbers);

console.log('beforeSortNumbersの内容は [1000, 10, 500, 234, 965, 221, 102] であるべき : ', beforeSortNumbers);
console.log('afterSortNumbersの内容は [10, 102, 221, 234, 500, 965, 1000] であるべき : ', afterSortNumbers);