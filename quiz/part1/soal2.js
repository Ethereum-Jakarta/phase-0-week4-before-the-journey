/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    let result = [];
    str = str.split("");
    str.forEach((e) => {
        if (e === "a" || e === "A" || e === "i"|| e === "I" || e === "u" || e === "U" || e === "e" || e === "E" || e === "o" || e === "O"){
            result.push(String.fromCharCode(((String(e).charCodeAt(0))+1)));
        } else result.push(e);
    })
    return result;

  }
  
  function reverseWord (str) {
    let result = [];
    for (i = str.length; i >= 0; i--){
        if (str[i] !== undefined) result.push(str[i]);
    }
    return result;
  }
  
  function setLowerUpperCase (str) {
    let result = [];
    for (i = 0; i <= str.length -1; i++){
        if (str[i] === str[i].toUpperCase()) result.push(str[i].toLowerCase());
        else if (str[i] === str[i].toLowerCase()) result.push(str[i].toUpperCase());
    }
    return result;
  }
  
  function removeSpaces (str) {
    for (i = 0; i <= str.length-1; i++){
        if (str[i] === ' ') str.splice(i, 1);
    }
    return str.join("");
  }
  
  function passwordGenerator (name) {
    if (name.length < 5) return `Minimal karakter yang diinputkan adalah 5 karakter`;
    let changedVocals = changeVocals(name);
    let reversedWord = reverseWord(changedVocals);
    let lowerOrUpper = setLowerUpperCase(reversedWord);
    let removedSpaces = removeSpaces(lowerOrUpper);
    return removedSpaces;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'