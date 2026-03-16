/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  const vocal = "aiueoAIUEO";
  const replace = "bjvfpBJVFP";
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    const index = vocal.indexOf(str[i]);

    if (index !== -1) temp += replace[index];
    else temp += str[i];
  }
  return temp;
}

function reverseWord(str) {
  return str.split("").reverse().join("");
}

function setLowerUpperCase(str) {
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase()) temp += char.toLowerCase();
    else temp += char.toUpperCase();
  }
  return temp;
}

function removeSpaces(str) {
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  if (name.length < 5)
    return "Minimal karakter yang di inputkan adalah 5 karakter";

  let changedWord = changeVocals(name);
  let reverse = reverseWord(changedWord);
  let removeCase = setLowerUpperCase(reverse);
  let removeSpace = removeSpaces(removeCase);

  return removeSpace;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
