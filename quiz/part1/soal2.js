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
  const arrStr = str.split("");
  let hasil = [];
  const vokal = ["a", "i", "u", "e", "o"];
  const vokal2 = ["A", "I", "U", "E", "O"];
  const konsonan = ["b", "j", "v", "f", "p"];
  const konsonan2 = ["B", "J", "V", "F", "P"];
  for (let i = 0; i < arrStr.length; i++) {
    if (vokal.includes(arrStr[i])) {
      const index = vokal.indexOf(arrStr[i]);
      arrStr[i] = konsonan[index];
      hasil.push(arrStr[i]);
    } else if (vokal2.includes(arrStr[i])) {
      const index = vokal2.indexOf(arrStr[i]);
      arrStr[i] = konsonan2[index];
    } else {
      hasil.push(arrStr[i]);
    }
  }
  str = arrStr.join("");

  return str;
}

function reverseWord(str) {
  //code di sini

  let currentReverse = [];

  for (let i = str.length; i >= 0; i--) {
    currentReverse.push(str[i]);
  }

  str = currentReverse.join("");
  return str;
}

function setLowerUpperCase(str) {
  //code di sini
  // const balikKata = reverseWord(str);
  let hasil = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      const huruf = str[i].toUpperCase();
      hasil.push(huruf);
    } else if (str[i] === str[i].toUpperCase()) {
      const huruf = str[i].toLowerCase();
      hasil.push(huruf);
    }
  }
  str = hasil.join("");
  return str;
}

function removeSpaces(str) {
  //code di sini
  let arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === " ") {
      delete arrStr[i];
    }
  }
  str = arrStr.join("");
  return str;
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  const phase1 = changeVocals(name);
  const phase2 = reverseWord(phase1);
  const phase3 = setLowerUpperCase(phase2);
  const phase4 = removeSpaces(phase3);

  let password = phase4;
  return password;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
