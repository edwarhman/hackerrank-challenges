let cadena = "middle-Outz";

console.log("a".charCodeAt());
console.log("z".charCodeAt());
console.log(122-97);

function caesarCipher(s, k) {
  if (k === undefined) {
    return s;
  }

  const ALPHABET_LETTERS = 26
  let encrypted = "";

  if (k >= ALPHABET_LETTERS) {
    k = k % ALPHABET_LETTERS;
    console.log(k);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isLetter(char)) {
      const encryptedChar = String.fromCharCode(char.charCodeAt() + k);
      if (isLetter(encryptedChar) && (isUpperCase(char) && isUpperCase(encryptedChar)) || (isLowerCase(char) && isLowerCase(encryptedChar)) ) {
        encrypted += encryptedChar;
      } else {
        encrypted += String.fromCharCode(char.charCodeAt()- ALPHABET_LETTERS + k);
      }
      console.log(char, encrypted.slice(-1), encryptedChar, i)
    } else {
      encrypted += char;
    }
  }
  return encrypted;
}

function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

function isUpperCase(char) {
  return isLetter(char) && char.toUpperCase() == char ? true : false;
}

function isLowerCase(char) {
  return isLetter(char) && char.toLowerCase() == char ? true : false;
}

console.log(caesarCipher(cadena, 3));

// I have problems seeing every single case. But after test I was able to solve the problem.