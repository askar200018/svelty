const biggerNumber = (num) => {
  const numArr = stringPermutations(num.toString()).map((n) => Number(n));
  let maxNum = null;

  numArr.forEach((element) => {
    if (element > num && (maxNum === null || element < maxNum)) {
      maxNum = element;
    }
  });

  return maxNum === null ? -1 : maxNum;
};

const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

console.log(biggerNumber(23));
console.log(biggerNumber(624));
console.log(biggerNumber(2018));
console.log(biggerNumber(9));
console.log(biggerNumber(111));
console.log(biggerNumber(531));
