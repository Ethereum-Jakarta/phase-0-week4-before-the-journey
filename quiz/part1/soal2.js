// Soal 2

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
  let result = ``;
  let vocalLatters = `aiueoAIUEO`;

  for(let i = 0; i < str.length; i++) {
    if(vocalLatters.includes(str[i])) {
        result += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
        result += str[i];
    }
  }
  return result;
}

function reverseWord (str) {
  //code di sini
    if(!str) throw new Error(`input string kosong!`);
    if(str.length <= 1) return str;
    return reverseWord(str.slice(1)) + str[0];

}

function setLowerUpperCase (str) {
  //code di sini
  let result = ``;
  let upperCaseVersion = str.toUpperCase();
  for(let i = 0; i < str.length; i++) {
    if(str[i] === upperCaseVersion[i]) {
        result += str[i].toLowerCase();
    } else {
        result += str[i].toUpperCase();
    }
  }
  return result;
}

function removeSpaces (str) {
  //code di sini
  return str.split(' ').join(``);
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5) return `Minimal karakter yang diinputkan adalah 5 karakter`;
  let changeVocalss = changeVocals(name);
  let reverseWordd = reverseWord(changeVocalss);
  let setLowerUpperCasee = setLowerUpperCase(reverseWordd);
  let result = removeSpaces(setLowerUpperCasee);
  return result;
}

console.log(passwordGenerator('Sergei Dragunov'), 'VPNVGBRdJFGRFs'); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
