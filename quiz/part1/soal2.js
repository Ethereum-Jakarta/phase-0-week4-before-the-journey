/*Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  //code di sini
  const changeMap = {
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
  };

  let result = '';

  for (let char of str) {
    if (changeMap[char]) {
      result += changeMap[char];
    } else {
      result += char;
    }
  }

  return result;
}

function reverseWord (str) {
  //code di sini
  return str.split('').reverse().join('');
}

function setLowerUpperCase (str) {
  //code di sini
  let result = '';

  for (let char of str) {
    if (char === char.toLowerCase()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }

  return result;
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s+/g, '');
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  const vocalChanged = changeVocals(name);
  const reversed = reverseWord(vocalChanged);
  const caseSwapped = setLowerUpperCase(reversed);
  const noSpaces = removeSpaces(caseSwapped);
  return noSpaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'