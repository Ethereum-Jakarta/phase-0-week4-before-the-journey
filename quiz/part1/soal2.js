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
    let ubahVokal = [];
    const vokal = 'abijuvefop';
    for (let i = 0; i < str.length; i++) {
        ubahVokal.push(str[i]);
        for (let j = 0; j < vokal.length; j += 2) {
            if (ubahVokal[i] === vokal[j]) ubahVokal[i] = vokal[j + 1];
            if (ubahVokal[i] === vokal[j].toUpperCase()) ubahVokal[i] = vokal[j + 1].toUpperCase();
        }
    }
    return ubahVokal.join('');
  }
  
  function reverseWord (str) {
    //code di sini
    const text = changeVocals(str);
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverse += text[i];
    }
    return reverse;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    const text = reverseWord(str);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) result += text[i].toLowerCase();
        if (text[i] === text[i].toLowerCase()) result += text[i].toUpperCase();
    }
    return result;
  }
  
  function removeSpaces (str) {
    //code di sini
    const before = setLowerUpperCase(str);
    let setelahBefore = '';

    for (let i = 0; i < before.length; i++) {
        if (before[i] !== " ") setelahBefore += before[i]; 
    }
    return setelahBefore;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    return removeSpaces(name);
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'