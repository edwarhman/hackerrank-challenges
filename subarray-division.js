function birthday(s, d, m) {
  let numberOfParts = 0;
  for (let index = 0; index < s.length - (m-1); index++) {
    const sum = s.slice(index, index + m).reduce((acc,el) => acc + el, 0);
    if (sum === d) {
      numberOfParts++;
    }
  }
  return numberOfParts;
}

// I had problems because I didn't read the problem's statement correctly