/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if ("aiueoAIUEO".includes(str[i])) {
      newStr += String.fromCharCode(str[i].charCodeAt() + 1);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

function reverseWord(str) {
  //code di sini
  let newStr = str.split("").reverse().join("");
  return newStr;
}

function setLowerUpperCase(str) {
  //code di sini
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

function removeSpaces(str) {
  //code di sini
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") newStr += str[i];
  }

  return newStr;
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  let vocals = changeVocals(name);
  let reverse = reverseWord(vocals);
  let setCase = setLowerUpperCase(reverse);
  let result = removeSpaces(setCase);

  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
