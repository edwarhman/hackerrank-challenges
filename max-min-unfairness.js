let arr = [1,4,7,2];
k = 2;


function minMax(k, arr) {
  let min = 0;
  // sort 
  const sorted = [...arr].sort((a, b) => a - b);
  // find minimized
  for (let i = 0; i <= sorted.length - k; i++) {
    const unfairness = sorted.slice(i + k - 1, i + k) - sorted[i];
    if (min === 0 || unfairness < min) {
      min = unfairness;
    }
  }
  return min;
}

console.log(minMax(k, arr));

const string = "10 4 1 2 3 4 10 20 30 40 100 200".split(" ").map(el => Number(el));
console.log([].concat([2,3,4]));

const cad2 = "4504 1520 5857 4094 4157 3902 822 6643 2422 7288 8245 9948 2822 1784 7802 3142 9739 5629 5413 7232".split(" ").map(el => Number(el));

console.log(minMax(5, cad2));
console.log(minMax(k, arr));
console.log(minMax(4, string));
console.log(minMax(4, [1, 2, 3, 3, 3, 3, 4 ,5]));


// I had problems because I tried to use a dictionary and it means so many steps to execute :(