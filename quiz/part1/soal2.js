/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
    //code di sini
    function changeVocals (str) {
        //code di sini
        let huruf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let vokal = "aiueoAIUEO";
        let arrHuruf = huruf.split('')
        let arrVokal = vokal.split('')
        let newStr = str.split('')
        
        for(let i = 0; i < newStr.length; i++) {
            for(let j = 0; j < arrVokal.length; j++) {
                if(newStr[i] === arrVokal[j]) {
                    for(let l = 0; l < arrHuruf.length; l++){
                        if(arrVokal[j] === arrHuruf[l]){
                            newStr[i] = arrHuruf[l + 1];
                        }
                    }
                }
            }
        }
    
        return newStr.join('')
  }
  
  function reverseWord (str) {
    //code di sini
    let newStr = "";
    
    for(let i = str.length - 1; i > -1; i--) {
        newStr += str[i]
    }
    
    return newStr
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let newStr = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
            
        }
    }
    return newStr;
  }
  
  function removeSpaces (str) {
    //code di sini
    let newStr = ""
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== " ") {
            newStr += str[i]
        }
    }
    return newStr
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    let noVocal = changeVocals(name);
    let reversed = reverseWord(noVocal);
    let setCase = setLowerUpperCase(reversed);
    let noSpace = removeSpaces(setCase);
    let password = removeSpaces(noSpace);
    return password;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'