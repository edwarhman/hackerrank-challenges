function birthday(a, d, m) {
    // Write your code here
  console.log(a);
  let s = [...a];
  let spliceCount = 0;
  return s.reduce((acc, el, index) => {
    let sum = s.slice(index - spliceCount, index - spliceCount + m).reduce((acc, el) => acc + el, 0);
    if (sum === d) {
      s.splice(index, index + m);
      acc++;
      spliceCount++;
    }
    return acc;
  }, 0);
}

function birthday2(s, d, m) {
  let nop = 0;
  for (let i = 0; i < s.length - (m-1); i++) {
    const sum = s.slice(i, i + m).reduce((acc,el) => acc + el, 0);
    sum
    if (sum === d) {
      nop++;
    }
  }
  return nop;
}

// I had problems because I didn't read the problem's statement correctly