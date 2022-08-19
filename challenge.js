const uniqueInOrder = iterable => {
  const len = iterable.length;
  let result = [];
  let lastItem;

  for (let i = 0; i < len; i++) {
    if (iterable[i] !== lastItem) {
      result.push(iterable[i]);
      lastItem = iterable[i];
    }
  }

  return result;
};
  
  console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
  console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
  console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']