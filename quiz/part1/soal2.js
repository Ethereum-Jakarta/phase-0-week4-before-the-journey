/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  let res = ''
  //  alfabet
  const vokalMap = {
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
// loop cek
for (let alfa  of str) {
  if (vokalMap[alfa]) {
    res+=vokalMap[alfa]
  }
  else{
    res+=alfa
  }
}
return res
}

function reverseWord(str) {
  return str.split('').reverse().join('')
}

function setLowerUpperCase(str) {
  let res = ''
  for (const alfa of str) {
    if (alfa===alfa.toLowerCase()) {
      res += alfa.toUpperCase()
    }else{
      res+=alfa.toLowerCase()
    }
  }
 return res
}

function removeSpaces(str) {
  return str.replaceAll(' ','')
}

function passwordGenerator(name) {
  let ubahvokal =changeVocals(name)
  let balikhuruf = reverseWord(ubahvokal)
  let ubahbesarkecil = setLowerUpperCase(balikhuruf)
  let hapusspasi=removeSpaces(ubahbesarkecil)
  return hapusspasi
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'