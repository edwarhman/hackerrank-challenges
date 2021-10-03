function findMedian(arr) {
    // Write your code here
    arr.sort((prev, next) => prev - next);
    return arr[Math.round(arr.length/2) - 1];
}

let arr = [0, 1, 2, 4, 6, 5, 3];

let result = findMedian(arr);
console.log(result);


// Solved