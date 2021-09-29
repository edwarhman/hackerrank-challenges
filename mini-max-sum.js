const arr = [5, 1, 9, 3, 7];
const arrSize = 5, maxSum = 4;

arr.sort();
const min = arr.slice(0, maxSum).reduce((acc, el) => acc + el);
const max = arr.slice(arrSize - maxSum, arrSize).reduce((acc, el) => acc + el);
console.log(min, max);