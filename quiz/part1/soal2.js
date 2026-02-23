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
    let result = '';
    for(let char of str) {
        charLower = char.toLowerCase();
        if (charLower === 'a' || charLower === 'i' || charLower === 'u' || charLower === 'e' || charLower === 'o') {
            char = String.fromCharCode(char.charCodeAt() + 1);
        }
        result += char;
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
    for(let char of str) {
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
    return str.split(' ').join('');
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'