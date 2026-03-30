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
  const replacements = {
    'a': 'b',
    'i': 'j',
    'u': 'v',
    'e': 'f',
    'o': 'p',
    'A': 'B',
    'I': 'J',
    'U': 'V',
    'E': 'F',
    'O': 'P'
  }

  let changedStr = str.replace(/[aiueoAIUEO]/g, matchedLetter => {
    return replacements[matchedLetter] || matchedLetter;
  })

  return changedStr;
}

function reverseWord (str) {
  //code di sini
  return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
  //code di sini
    splitStr = str.split('');
    for (let i = 0; i < str.length; i++){
      if (splitStr[i].toLowerCase() == str[i]){
        splitStr[i] = splitStr[i].toUpperCase();
      } else {
        splitStr[i] = splitStr[i].toLowerCase()
      }
    }
    return splitStr.join('');
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s/g, '');
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5){
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
  let changedVocals = changeVocals(name);
  let reversedWord = reverseWord(changedVocals);
  let setLowerUpper = setLowerUpperCase(reversedWord);
  let removedSpaces = removeSpaces(setLowerUpper);
  return removedSpaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'