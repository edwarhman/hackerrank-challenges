let arr = [[1, 2, 1], [4, 5, 6], [7, 8, 9]];
console.log(arr.reduce((acc, el, index) => acc + el[index], 0))
console.log(arr);
console.log(difference(arr));
console.log(arr);

function difference(arr) {
  let a = arr.reduce((acc, el, index) => acc+el[index], 0);
  let b = [...arr].reverse().reduce((acc, el, index) => acc+el[index], 0);
  return Math.abs(a-b);
}