// ## Soal 2

/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  const vowels = 'aiueoAIUEO';
  const replacements = 'bjvfpBJVFP';

  return setLowerUpperCase(str).split('').map((e) => vowels.includes(e) ? replacements[vowels.indexOf(e)] : e).join('')
}

function reverseWord (str) {
  return removeSpaces(str).split('').reverse().join('')
}

function setLowerUpperCase (str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return reverseWord(str).split('').map((e) => alpha.includes(e) ? e.toUpperCase() : e.toLowerCase()).join('')
}

function removeSpaces (str) {
  return str.replace(/\s+/g, '')
}

function passwordGenerator (name) {
  return changeVocals(name)
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'`