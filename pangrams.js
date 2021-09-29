let aPangram = "We promptly judged antique ivory buckles for the next prize";
let notPangram = "We promptly judged antique";

function pangrams(s) {
  const MIN_CODE = 97;
  const MAX_CODE = 122;
  const ALPHABET_LENGTH = 26;
  s = s.toLowerCase();
  let letterCount = s.split("").reduce((acc, char) => {
    if (char.charCodeAt() >= MIN_CODE && char.charCodeAt() <= MAX_CODE && !acc.some(toCompare => toCompare === char)) {
      acc.push(char);
    }
    return acc;
  }, []);
  return letterCount.length === ALPHABET_LENGTH? "pangram": "not pangram";
}

console.log(pangrams(aPangram));
console.log(pangrams(notPangram));