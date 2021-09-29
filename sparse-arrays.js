function matchingStrings(strings, queries) {
    // Write your code here
  let counts = queries.reduce((count, key) => {
    count.push(strings.filter(element => element === key).length);
    return count;
  },[])
  return counts;
}


let strings = ['ab', 'ab', 'abc'];
let queries = ['ab', 'abc', 'bc'];
let res = matchingStrings(strings, queries);
console.log(res.join('\n')+"\n");
