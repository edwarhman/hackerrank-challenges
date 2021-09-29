let a = 541231654;
function flippingBits(n) {
    // Write your code here
  const bits = 32;
  let inBits, arr, fliped;
  inBits = n.toString(2);
  arr = Array(bits -inBits.length).fill(0).concat(inBits.split(""));
  fliped = arr.map(el => el === '1'? 0 : 1).join('');
  return parseInt(fliped, 2);
}

console.log(flippingBits(a));