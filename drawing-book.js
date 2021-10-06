function pageCount(n, p) {
    // Write your code here
    if (n - p === 1 && n % 2 === 0 && p !== 1) {
      return 1;
    }
    const fromFirst = Math.floor(p/2);
    const fromLast = Math.floor((n-p) / 2);
    return Math.min(fromFirst, fromLast);
}

console.log(pageCount(2,1));

// I got stuck because I didn't consider all posible cases like this:
// when n - p = 1, n is even and p is not the first element only one shift is done.