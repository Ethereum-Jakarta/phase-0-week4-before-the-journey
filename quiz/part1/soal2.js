/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan
menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  //code di sini
  let result = '';
  for (let i = 0; i < str.length; i++){
    let char = str[i];
    if ('aiueoAIUEO'.includes(char)){
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    result += char;
  }
  return result;
}
function reverseWord (str) {
  //code di sini
  return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
  //code di sini
  let arr = str.split('');
  let result = '';
  for (let i = 0; i < arr.length; i++){
    let charTemp = arr[i];
    if (charTemp === charTemp.toUpperCase()){
      result += charTemp.toLowerCase();
    } else {
      result += charTemp.toUpperCase();
    }
  }
  return result;
}

function removeSpaces (str) {
  //code di sini
  let noSpace = str.split(' ').join('');
  return noSpace;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <= 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
  var vocals = changeVocals(name);
  var reversing = reverseWord(vocals);
  var upLowCase = setLowerUpperCase(reversing);
  var spacing = removeSpaces(upLowCase);
  return spacing;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
