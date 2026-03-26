/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, 
removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah 
ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan 
aturan huruf vokal yang diganti akan menjadi huruf setelah huruf 
vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J,
 U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan 
reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi 
kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam 
string yang sudah kita manipulasi
*/
function changeVocals (str) {
    //code di sini
    let ubahhuruf = '';
    for (let i = 0; i < str.length; i++) {
        ubahhuruf += String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return ubahhuruf;
  }

// console.log(changeVocals('Sergei Dragunov'));
  
  function reverseWord (str) {
    //code di sini
    return str.split('').reverse().join('');
    }

// console.log(reverseWord('Sergei Dragunov'));


  function setLowerUpperCase (str) {
    //code di sini
    let hasilkecilbesar = '';
    for (let i = 0; i <str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            hasilkecilbesar += str[i].toLowerCase();
        } else {
            hasilkecilbesar += str[i].toUpperCase();
        }
    }
    return hasilkecilbesar;
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.split(' ').join('');
  }
  
//   console.log(removeSpaces('Sergei Dragunov'));

  function passwordGenerator (name) {
    //code di sini
    let ubahvokal = changeVocals(name);
    let undurkata = reverseWord(ubahvokal);
    let ubahkecilbesar = setLowerUpperCase(undurkata);
    let hapusspasi = removeSpaces(ubahkecilbesar);
    return hapusspasi;

  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  