
function dynamicArray(n, queries) {
    // Write your code here
	// let arr = [[], []];
	let arr = []
	let lastAnswer = 0;
	let answers = [];
	for (let i = 0; i < queries.length; i++) {
		const el = queries[i];
		const key = el[0];
		const x = el[1];
		const y = el[2];
		let idx = 0;
		idx = (x ^ lastAnswer) % n;
		if (arr[idx] == undefined) arr[idx] = [];
		if (key === 1) {
			arr[idx].push(y);
		} else {
			lastAnswer = arr[idx][y % arr[idx].length];
			answers.push(lastAnswer);
		}
		console.log(arr);
	}
	answers.forEach(e => console.log(e));
	return answers;
}

console.log(0 ^ 1);
const queries = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]];
console.log(dynamicArray(2, queries));
