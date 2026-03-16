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
    let newStr = [];
    str.split('').forEach(e => {
        if ('aiueoAIUEO'.includes(e)){
        newStr.push(String.fromCharCode(e.charCodeAt(0) + 1))
        } else {
            newStr.push(e)
        }
    });

    return newStr.join('')
}

function reverseWord (str) {
  //code di sini
  let arr = []
  for (let i = str.length -1; i >= 0; i--) {
    arr.push(str[i])
  }
  return arr.join('')
  
}

function setLowerUpperCase (str) {
  //code di sini
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' '){
        arr.push(str[i])
    } else if(str[i] === str[i].toUpperCase()){
        arr.push(str[i].toLowerCase())
    } else {
         arr.push(str[i].toUpperCase())
    }
    
  }
  return arr.join('')
}

function removeSpaces (str) {
  //code di sini
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) return `'Minimal karakter yang diinputkan adalah 5 karakter'`

  let cv = changeVocals(name)
  let rw = reverseWord(cv)
  let suc = setLowerUpperCase(rw)
  let rs = removeSpaces(suc)

  return rs
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'