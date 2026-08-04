/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === 'a') result += 'b';
    else if (char === 'e') result += 'f';
    else if (char === 'i') result += 'j';
    else if (char === 'o') result += 'p';
    else if (char === 'u') result += 'v';
    else if (char === 'A') result += 'B';
    else if (char === 'E') result += 'F';
    else if (char === 'I') result += 'J';
    else if (char === 'O') result += 'P';
    else if (char === 'U') result += 'V';
    else result += char;
  }
  return result;
}

function reverseWord(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  let result = '';
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
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  let step1 = changeVocals(name);
  let step2 = reverseWord(step1);
  let step3 = setLowerUpperCase(step2);
  let step4 = removeSpaces(step3);
  return step4;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'