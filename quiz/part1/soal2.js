/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  //code di sini
  let hasil = "";
  for (let i = 0; i < str.length; i++) {
    if ("AIUEOaiueo".includes(str[i])) {
        hasil+=String.fromCharCode(str[i].charCodeAt(0) + 1)
    } else {
        hasil+=str[i];
    }
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  let hasil = "";
  for (let i = str.length - 1; i >= 0; i--) {
    hasil+=str[i];
  }
  return hasil;
}

function setLowerUpperCase (str) {
  //code di sini
  str = str.split(""); // sesekali pake array wkwkwk
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === str[i]) {
        str[i] = str[i].toUpperCase();
    } else if (str[i].toUpperCase() === str[i]) {
        str[i] = str[i].toLowerCase();
    }
  }
  return str.join("");
}

function removeSpaces (str) {
  //code di sini
  str = str.split(" ");
  return str.join("");
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  name = changeVocals(name);
  name = reverseWord(name);
  name = setLowerUpperCase(name);
  name = removeSpaces(name);
  return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'