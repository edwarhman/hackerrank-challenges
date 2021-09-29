function countRepeats(arr) {
  const max = arr.reduce((acc, el) => el > acc? el : acc);
  return arr.reduce((acc, el) => {
    acc[el]++;
    return acc;
  }, Array(max+1).fill(0,0));
}

function twoArrays(k, A, B) {
  // Write your code here
  A.sort().reverse();
  B.sort();
  console.log(A, B);
  const sum = A.map((el, index) => el + B[index]);
  return sum.every(el => el >= k)? "YES": "NO";
}
function twoArrays2(k, A, B) {
  const min = A.reduce((acc, el) => el < acc ? el : acc);
  const max = B.reduce((acc, el) => el > acc ? el : acc);
  let repeatsInA = countRepeats(A);
  let repeatsInB = countRepeats(B);
  console.log(repeatsInA, repeatsInB);

  repeatsInA.forEach((element, index) => {
    console.log(repeatsInB[max  - index])
    if (element === repeatsInB[max + 1 - index]) {
      console.log("as");
    }
  });
}
let arr = [1,1,2,3,1];
const A = "84 2 50 51 19 58 12 90 81 68 54 73 81 31 79 85 39 2".split(" ").map(el => Number(el));
const B = "53 102 40 17 33 92 18 79 66 23 84 25 38 43 27 55 8 19".split(" ").map(el => Number(el));
const k = 88;
console.log(A, B);
// console.log(twoArrays(10, [2,1,3], [7,8,9]));
console.log(twoArrays(k, A, B));