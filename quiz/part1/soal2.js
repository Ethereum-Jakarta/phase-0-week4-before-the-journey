/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        str[i] = "b";
        break;
      case "i":
        str[i] = "j";
        break;
      case "u":
        str[i] = "v";
        break;
      case "e":
        str[i] = "f";
        break;
      case "o":
        str[i] = "p";
        break;
      case "A":
        str[i] = "B";
        break;
      case "I":
        str[i] = "J";
        break;
      case "U":
        str[i] = "V";
        break;
      case "E":
        str[i] = "F";
        break;
      case "O":
        str[i] = "P";
        break;
    }
  }
}

function reverseWord(str) {
  let balik = str.reverse();
}

function setLowerUpperCase(str) {
  for (let j = 0; j < str.length; j++) {
    if (str[j] == str[j].toUpperCase()) {
      str[j] = str[j].toLowerCase();
    } else if (str[j] == str[j].toLowerCase()) {
      str[j] = str[j].toUpperCase();
    }
  }
}

function removeSpaces(str) {
  let result = [];
  for (let kata of str) {
    if (kata != " ") {
      result.push(kata);
    }
  }
  return result.join("");
}

function passwordGenerator(name) {
  name = name.split("");
  if (name.length < 5)
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  changeVocals(name);
  reverseWord(name);
  setLowerUpperCase(name);
  return removeSpaces(name);
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
