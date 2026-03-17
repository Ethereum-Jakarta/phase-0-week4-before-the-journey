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
    const mapper = {
      a: 'b', e: 'f', i: 'j', o: 'p', u: 'v',
      A: 'B', E: 'F', I: 'J', O: 'P', U: 'V'
    }

    let change = '';

    for(let char of str) {
      if(mapper[char]) {
        change += mapper[char];
      } else {
        change += char;
      }
    }
    return change;
  }
  
  function reverseWord (str) {
    //code di sini
    let result = '';
    for(let i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let change = '';

    for(let char of str) {
      if(char === char.toUpperCase()) {
        change += char.toLowerCase();
      } else if(char === char.toLowerCase()) {
        change += char.toUpperCase();
      } else {
        change += char;
      }
    }
    return change;
  }
  
  function removeSpaces (str) {
    //code di sini
    let result = '';

    for(let char of str) {
      if(char !== ' ') {
        result += char;
      }
    }
    return result;
 }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    const changeVocal = changeVocals(name);
    const reverse = reverseWord(changeVocal);
    const upOrLow = setLowerUpperCase(reverse);
    const removespace = removeSpaces(upOrLow);

    return removespace;

  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

