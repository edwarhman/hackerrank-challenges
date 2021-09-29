function twoArrays(k, A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  const sum = A.map((el, index) => el + B[index]);
  return sum.every(el => el >= k)? "YES": "NO";
}

const A = "84 2 50 51 19 58 12 90 81 68 54 73 81 31 79 85 39 2".split(" ").map(el => Number(el));
const B = "53 102 40 17 33 92 18 79 66 23 84 25 38 43 27 55 8 19".split(" ").map(el => Number(el));
const k = 88;
console.log(A, B);
console.log(twoArrays(k, A, B));