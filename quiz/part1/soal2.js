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
    
    let vowels = { 'a': 'b', 'i': 'j', 'u': 'v', 'e': 'f', 'o': 'p', 'A': 'B', 'I': 'J', 'U': 'V', 'E': 'F', 'O': 'P' };
    let newVocal = "";
    for(let i = 0; i < vowels.length; i++) {
        if(vowels[i]) {
            let index = vowels.indexOf(vowels[i]);
            newVocal += vowels[(index + 1) % vowels.length];
        } else {
            newVocal += str[i];
        }
    }
return vowels;
}
  
  function reverseWord (str) {
    //code di sini
    if(str.length < 5 ) return "Minimal karakter yang diinputkan adalah 5 karakter ";
   
    return str.split('').reverse().join('');
  
}
  
  function setLowerUpperCase (str) {
    //code di sini
    let result = '';
    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
  }
  
  function removeSpaces (str) {
    //code di sini
    return str.replace(/\s/g, '');
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(str.length < 5 ) return "Minimal karakter yang diinputkan adalah 5 karakter ";
   
    let changedVocals = changeVocals(name);
    let reversedWord = reverseWord(changedVocals);
    let lowerUpper = setLowerUpperCase(reversedWord);
    let finalPassword = removeSpaces(lowerUpper);
    return finalPassword;
}
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'