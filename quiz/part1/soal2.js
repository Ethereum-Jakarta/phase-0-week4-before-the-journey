function changeVocals(str) {
  const vocals = "aiueoAIUEO";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (vocals.includes(str[i])) {
      result += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

function setLowerUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  let changed = changeVocals(name);
  let reversed = reverseWord(changed);
  let swapped = setLowerUpperCase(reversed);
  let removed = removeSpaces(swapped);
  return removed;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
