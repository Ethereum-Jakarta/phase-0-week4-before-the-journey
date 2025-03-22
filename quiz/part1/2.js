function changeVocals(str) {
  //code di sini
  const wordAfterVocal = "bjvfpBJVFP";
  const vocal = "aiueoAIUEO";
  let result = "";

  for (const word of str) {
    if (vocal.includes(word)) {
      const getIndex = vocal.indexOf(word);
      result += wordAfterVocal[getIndex];
    } else {
      result += word;
    }
  }

  return result;
}

function reverseWord(str) {
  //code di sini
  return str.split("").reverse().join("");
}

function setLowerUpperCase(str) {
  //code di sini
  let result = "";

  for (const word of str) {
    if (word === word.toLowerCase()) {
      result += word.toUpperCase();
    } else {
      result += word.toLowerCase();
    }
  }

  return result;
}

function removeSpaces(str) {
  //code di sini
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  const getChangeVocal = changeVocals(name);
  const getReverseWord = reverseWord(getChangeVocal);
  const getSetLowerUpperCase = setLowerUpperCase(getReverseWord);
  const getRemoveSpace = removeSpaces(getSetLowerUpperCase);

  return getRemoveSpace;
  //code di sini
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
