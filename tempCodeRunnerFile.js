A.sort().reverse();
  B.sort();
  const sum = A.map((el, index) => el + B[index]);
  // console.log(A, B, sum)
  return sum.every(el => el >= k)? "YES": "NO";