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
  let vokal = "aiueoAIUEO";
  let hasil = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vokal.length; j++) {
      if (vokal[j].charCodeAt() === str[i].charCodeAt()) {
        let newLetter = String.fromCharCode(str[i].charCodeAt() + 1);
        hasil += newLetter;
      }
    }
    let position = vokal.indexOf(str[i]);
    if (position < 0) {
      hasil += str[i];
    }
  }
  return hasil;
}

function reverseWord(str) {
  //code di sini
  let hasil = "";
  for (let i = str.length - 1; i >= 0; i--) {
    hasil += str[i];
  }
  return hasil;
}

function setLowerUpperCase(str) {
  //code di sini
  let hasil = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      hasil += str[i].toUpperCase();
    } else {
      hasil += str[i].toLowerCase();
    }
  }
  return hasil;
}

function removeSpaces(str) {
  //code di sini
  if (str.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    return str.split(" ").join("");
  }
}

function passwordGenerator(name) {
  //code di sini
  let gantiVocals = changeVocals(name);
  let balikKata = reverseWord(gantiVocals);
  let gantiHuruf = setLowerUpperCase(balikKata);
  let tanpaSpasi = removeSpaces(gantiHuruf);
  return tanpaSpasi;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
