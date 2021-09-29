let arr = [1, 2, 3, 4, 3, 2, 1];

function lonelyinteger(a) {
  // Write your code here
  let lonely = a.reduce((lon, key) => {
    let b = a.reduce((acc, el) => {
      if (el !== key) {
        acc.push(el);
      }
      return acc;
    },[])
    if (a.length - b.length === 1) {
      lon = key;
    }
    return lon;
  });
  return lonely;
}
arr.length
// lonelyinteger(arr);
console.log(lonelyinteger(arr));