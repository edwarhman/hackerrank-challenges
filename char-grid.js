let charA = "a", charB = "b";
let grid = ["abc", "ade", "efg"];

function gridChallenge(grid) {
    // Write your code here
  let result = "YES";
  let numbered = grid.map(row => row.split("").map(char => char.charCodeAt()));
  numbered.forEach(row => row.sort((a, b) => a - b));
  numbered.transpose().forEach(col => col.reduce((acc, el) => {
    if (acc > el) result = "NO";
    return el;
  }, []))
  return result;
}

Array.prototype.transpose = function () {
  return this[0].map((_, colIndex) => this.map(row => row[colIndex]));
  
}
console.log(gridChallenge(grid));
