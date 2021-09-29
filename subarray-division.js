function birthday(s, d, m) {
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