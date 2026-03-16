/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str, index = 0) {
  if (index >= str.length) {
    return "";
  }

  let vowels = 'aiueoAIUEO';
  let replacements = 'bjvfpBJVFP';
  let char = str[index];
  let newChar = vowels.includes(char) ? replacements[vowels.indexOf(char)] : char;

  return newChar + changeVocals(str, index + 1);
}

function reverseWord (str) {
  if(str.length === 0) {
    return "";
  }

  return str[str.length -1] + reverseWord(str.slice(0, -1));
}

function setLowerUpperCase (str, index = 0) {
    if (index >= str.length) {
        return "";
      }

    let char = str[index];
    let newchar = char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

    return newchar + setLowerUpperCase(str, index + 1);
}

function removeSpaces (str, index = 0) {
    if (index >= str.length) {
        return '';
    }

    let char = str[index];
    return (char === ' ' ? '' : char) + removeSpaces(str, index + 1);
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 10 kurang 5 karakter';
  }

  let changed = changeVocals(name);
  let reversed = reverseWord(changed);
  let swappedCase = setLowerUpperCase(reversed);
  let password = removeSpaces(swappedCase);

  return password;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'