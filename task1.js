function compareFn(a, b) {
  const regex = /[0-9]/g;
  const numA = +a.match(regex)[0];
  const numB = +b.match(regex)[0];
  return numA - numB;
}

const sortString = (str) => {
  const words = str.split(' ');
  words.sort(compareFn);
  return words.join(' ');
};

console.log(sortString('g5et ski3lls on6 use1 your2 to4 7top'));
console.log(sortString('practic3 h4rder yo1u 2hould'));
