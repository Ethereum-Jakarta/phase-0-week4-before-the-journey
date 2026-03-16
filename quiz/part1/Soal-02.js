/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    let vokal = 'aiueoAIUEO';
    let ganti = 'bjvfpBJVFP';
    let hasil = '';

    for (let i = 0; i < str.length; i++) {
        let index = vokal.indexOf(str[i]);
        if (index !== -1) {
            hasil += ganti[index];
        } else {
            hasil += str[i]
        }
    }

    return hasil;
  }
  
  function reverseWord (str) {
    return str.split('').reverse().join('');
  }
  
  function setLowerUpperCase (str) {
    let hasil = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            hasil += str[i].toLowerCase();
        } else {
            hasil += str[i].toUpperCase();
        }
    }

    return hasil;
  }
  
  function removeSpaces (str) {
    return str.split(' ').join('');
  }
  
  function passwordGenerator (name) {
    if (name.length < 5 ) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    let ubahVokal = changeVocals(name);
    let balikKata = reverseWord(ubahVokal);
    let tukarHuruf = setLowerUpperCase(balikKata);
    let hapusSpasi = removeSpaces(tukarHuruf);

    return hapusSpasi;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
