function changeVocals(str) {
  var vokal = "aiueoAIUEO";
  var hasil = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (vokal.indexOf(char) !== -1) {
      hasil += String.fromCharCode(char.charCodeAt(0) + 1);
    } else {
      hasil += char;
    }
  }
  return hasil;
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

function setLowerUpperCase(str) {
  var hasil = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (char === char.toLowerCase()) {
      hasil += char.toUpperCase();
    } else {
      hasil += char.toLowerCase();
    }
  }
  return hasil;
}

function removeSpaces(str) {
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  var step1 = changeVocals(name);
  var step2 = reverseWord(step1);
  var step3 = setLowerUpperCase(step2);
  var step4 = removeSpaces(step3);
  return step4;
}

console.log(passwordGenerator("Sergei Dragunov"));

console.log(passwordGenerator("Dimitri Wahyudiputra"));

console.log(passwordGenerator("Alexei"));

console.log(passwordGenerator("Alex"));
