let matrix = [[112, 42, 83, 119], [56,125,56,49],[15,78,101,43], [62,98,114,108]];


// Flipping matrix first method. It is not very efficient, and is not much human-readeable but it work.
function flippingMatrix(matrix) {
    // Write your code here
    let midle = Math.floor(matrix.length/2)
    let subMatrices = [];

    // Find submatrices, transform them and save in array
    subMatrices.push(matrix.slice(0, midle).map(el => el.slice(0, midle)));
    subMatrices.push(matrix.slice(0, midle).map(el => el.slice(midle)).transpose().reverse().transpose());
    subMatrices.push(matrix.slice(midle).map(el => el.slice(0, midle)).reverse());
    subMatrices.push(matrix.slice(midle).map(el => el.slice(midle)).transpose().reverse().transpose().reverse());


    // flat submatrices in array
    let a = subMatrices.map(el => el.reduce((acc, el) => acc.concat(el)));

    // calc maximum submatrix element
    const max = a.transpose().reduce((acc, el) => acc +  el.reduce((max, el) => el > max? el : max), 0);

    return max;
  }

// transponse method
Array.prototype.transpose = function () {
  return this[0].map((_, colIndex) => this.map(row => row[colIndex]));
  
}

// Fliping the matrix second method. It is much more efficient and readable than firts method. It work well :)
function flippingMatrix2(matrix) {
  const size = matrix.length;
  let max = 0;
  for (let j = 0; j < Math.floor(size / 2); j++) {
    for (let i = 0; i < Math.floor(size / 2); i++) {
      max += Math.max(matrix[j][i], matrix[j][size - 1 - i], matrix[size - 1 - j][i], matrix[size - 1 - j][size - 1 - i]);
    }
  }
  return max;
}

console.log(matrix);
console.log(flippingMatrix(matrix));

let string = "107 54 128 15 12 75 110 138 100 96 34 85 75 15 28 112"


// Transform string of integers in a square matrix
let matrix3 = string.split(" ").map((el) => Number(el)).reduce((acc,_,__, arr) => {
  acc.push(arr.splice(0, Math.sqrt(arr.length)+ acc.length));
  return acc;
}, []);


console.log(matrix3, string.length);
console.log(flippingMatrix(matrix3));

console.log(flippingMatrix2(matrix));
console.log(flippingMatrix2(matrix3));
