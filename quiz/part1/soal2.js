/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    const vocals = 'aiueoAIUEO';
    const replacements = 'bjvfpBJVFP';
    return str.split('').map(char => {
        const index = vocals.indexOf(char);
        return index !== -1 ? replacements[index] : char;
    }).join('');
}
  
  function reverseWord (str) {
    //code di sini
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(charCode + 32);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(charCode - 32);
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  function removeSpaces (str) {
    //code di sini
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        result += str[i];
      }
    }
    return result;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    let changedVocals = changeVocals(name);
    let reversedWord = reverseWord(changedVocals);
    let lowerUpperCase = setLowerUpperCase(reversedWord);
    let removedSpaces = removeSpaces(lowerUpperCase);
    return removedSpaces;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'