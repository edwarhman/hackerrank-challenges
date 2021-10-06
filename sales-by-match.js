const arr = [1,2,1,2,1,3,2];
const n = 7;

function sockMerchant(n, ar) {
    // Write your code here
  let pairsCount = 0;
  ar.reduce((acc, el) => {
    ++acc[el] % 2 === 0 ? pairsCount++ : pairsCount;
    return acc;
  }, new Array(ar.reduce((max, el) => el > max? el : max) + 1).fill(0));
  return pairsCount;
}

console.log(arr);
console.log(sockMerchant(n,arr));
console.log(arr);