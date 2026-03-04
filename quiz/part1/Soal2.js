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
  let vocal = 'aAiIuUeEoO'
  let nextVocal = 'bBjJvVfFpP'
  let hasil = ''
  for(var i=0;i<str.length;i++) {
    if(vocal.includes(str[i])) {
      let gg = vocal.indexOf(str[i])
      hasil += nextVocal[gg]
    }else {
      hasil += str[i]
    }
  }
  return hasil
}

function reverseWord (str) {
  //code di sini
  let sekai = ''
  for(var i = str.length-1;i>=0;i--) {
    sekai += str[i]
  }
  return sekai
}

function setLowerUpperCase (str) {
  //code di sini
  let hasil = ''
  for(var i=0;i<str.length;i++) {
    
    if(str[i] == str[i].toUpperCase()) {
      hasil += str[i].toLowerCase()
    }else {
      hasil += str[i].toUpperCase()
    }
  }
  return hasil
}

function removeSpaces (str) {
  //code di sini
  return str.replaceAll(' ','')
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5)  {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var change = changeVocals(name)
  var reverse = reverseWord(change)
  var upperLower = setLowerUpperCase(reverse)
  var space = removeSpaces(upperLower)
  return space
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'