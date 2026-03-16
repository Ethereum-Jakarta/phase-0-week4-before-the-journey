/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  str = str.split("")
  let vocal = "aiueoAIUEO"
  let change = "bjvfpBJVFP"

  for(let i in str){
    let find = vocal.split("").findIndex(a => a == str[i])

    if(find !== -1) str[i] = change[find]
    
  }
  return str.join("")
}

function reverseWord(str) {
  //code di sini
  return str.split("").reverse().join("")
}

function setLowerUpperCase(str) {
  //code di sini
  str = str.split("")

  for(let i in str){
    if(str[i] === str[i].toLowerCase()){
      str[i] = str[i].toUpperCase()
    } else {
      str[i] = str[i].toLowerCase()
    }
  }

  return str.join("")
}

function removeSpaces(str) {
  //code di sini
  let result = ""
  
  for(let i in str) {
    if(str[i] !== " ") result += str[i]
  }
  return result
}

function passwordGenerator(name) {
  //code di sini
  let change = changeVocals(name)
  let reverse = reverseWord(change)
  let setLowerUpper = setLowerUpperCase(reverse)
  let removeSpace = removeSpaces(setLowerUpper)

  if(name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter"
  return removeSpace
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
