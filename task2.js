const getNextIndex = (cashiers, index) => {
  return cashiers.reduce((prev, curr, currIndex) => {
    if (cashiers[prev] <= cashiers[currIndex]) {
      return prev;
    }
    return currIndex;
  }, index);
};

const queueTime = (customers, cashierCnt) => {
  const cashiers = Array(cashierCnt).fill(0);

  let iCashier = 0;

  for (let i = 0; i < customers.length; i++) {
    const nextIndex = getNextIndex(cashiers, iCashier);
    if (cashiers[iCashier] > cashiers[nextIndex]) {
      iCashier = nextIndex;
    }
    cashiers[iCashier] += customers[i];
  }
  return Math.max(...cashiers);
};

console.log(queueTime([5, 3, 4], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([], 1));
console.log(
  queueTime([26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14], 1)
);
console.log(
  queueTime(
    [34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47],
    4
  )
);
console.log(queueTime([19, 1, 27, 35, 16, 4, 45, 49, 41, 25], 5));

// 19 1 27 35 16, 4
// 19 5 27 35 16, 45
// 19 50 27 35 16, 49
// 19 50 27 35 65, 41
// 60,
