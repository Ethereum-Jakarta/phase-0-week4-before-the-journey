

//? Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

//? Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

//? Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

//? Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

//? Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

//? Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

function changeVocals (str) {
    let vowels = { 
        'a' : 'b', 'i': 'j', 'u': 'v', 'e': 'f', 'o': 'p',
        'A' : 'B', 'I': 'J', 'U': 'V', 'E': 'F', 'O': 'P'
      };
    return str.replace(/[aiueoAIUEO]/g, match => vowels[match])
  }
  
  function reverseWord (str) {
    return str.split('').reverse().join('')
  }
  
  function setLowerUpperCase (str) {
    let word = ''
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        word += str[i].toUpperCase();
      } else if (str[i] === str[i].toUpperCase()) {
        word += str[i].toLowerCase()
      }
    }
    return word
  }
  
  function removeSpaces (str) {
    return str.split(' ').join('')
  }
  
  function passwordGenerator (name) {
    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter'
    let change_vocals = changeVocals(name)
    let reverse_word = reverseWord(change_vocals)
    let set_case = setLowerUpperCase(reverse_word)
    let remove_spaces = removeSpaces(set_case)
    return remove_spaces
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); //? 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); //? 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); //? 'JFXFLb'
  console.log(passwordGenerator('Alex')); //? 'Minimal karakter yang diinputkan adalah 5 karakter'
  