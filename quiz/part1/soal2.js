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
  let vocal = 'aiueoAIUEO';

  for(let i = 0; i < str.length; i++) {
    let isVocal = false;
    for(let j = 0; j < vocal.length; j++) {
        if(str[i] === vocal[j]) {
            result += String.fromCharCode(str.charCodeAt(i) + 1);
            isVocal = true;
            break;
        }
    }
    if(!isVocal) {
        result += str[i];
    }
  }
  return result;
}

function reverseWord (str) {
  //code di sini
  let result = '';
  for(let i = str.length -1; i >= 0; i--) {
    result += str[i]
  }
  return result;
}


function setLowerUpperCase (str) {
  //code di sini
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toLowerCase()) {
        result += str[i].toUpperCase();
    } else {
        result += str[i].toLowerCase();
    }
  }
  return result;
}


function removeSpaces (str) {
  //code di sini
  let result = '';

  for(let i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
        result += str[i];
    }
  }
  return result;
}


function passwordGenerator (name) {
  //code di sini

  if(name.length < 5) {
    return 'Minimal Karakter yang diinputkan adalah 5 karakter'
  }

  name = changeVocals(name);
  name = reverseWord(name);
  name = setLowerUpperCase(name);
  name = removeSpaces(name);
  return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'