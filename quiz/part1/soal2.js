/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf 
setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "i" ||
      str[i] === "u" ||
      str[i] === "e" ||
      str[i] === "o" ||
      str[i] === "A" ||
      str[i] === "I" ||
      str[i] === "U" ||
      str[i] === "E" ||
      str[i] === "O"
    ) {
      let charCode = str.charCodeAt(i);
      result += String.fromCharCode(charCode + 1);
    } else {
      result += str[i];
    }
  }
  return result;
}

function reverseWord(str) {
  //code di sini
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  //code di sini
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

function removeSpaces(str) {
  //code di sini
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter";
  let vocalChange = changeVocals(name);
  let reversedWord = reverseWord(vocalChange);
  let lowerUpperCase = setLowerUpperCase(reversedWord);
  return removeSpaces(lowerUpperCase);
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
