/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  let newStr = [];
  newStr = str.replace(/[aiueoAIUEO]/g, (letter) =>
    String.fromCharCode(letter.charCodeAt(0) + 1),
  );
  return newStr;
}

function reverseWord(str) {
  //code di sini
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

function setLowerUpperCase(str) {
  //code di sini
  let newStr = str.replace(/[a-zA-Z]/g, (letter) =>
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase(),
  );
  return newStr;
}

function removeSpaces(str) {
  //code di sini
  return str.replace(/\s/g, "");
}

function passwordGenerator(name) {
  //code di sini
  if (name.length < 5)
    return "Minimal karakter yang didinputkan adalah 5 karakter";
  let result = changeVocals(name);
  result = reverseWord(result);
  result = setLowerUpperCase(result);
  result = removeSpaces(result);
  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
