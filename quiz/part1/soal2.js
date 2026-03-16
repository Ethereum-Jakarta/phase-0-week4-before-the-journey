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
    const sandi = "abefijopuvABEFIJOPUV";
    let vocalArray = str.match(/[aiueoAIUEO]/g);
    let result = str;
    for(let vocal of vocalArray){
        let idxVocal = sandi.indexOf(vocal);
        result = result.replace(new RegExp(vocal, "g"), sandi[idxVocal+1]);
    }
    return result;

  }
  
  function reverseWord (str) {
    //code di sini
    return str.split("").reduce((a,b) => b+a, "");
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    return str.split("").map((item) => {
        let temp = item.toLowerCase();
        return temp === item ? item.toUpperCase() : item.toLowerCase();
    }).join("");
  }
  
  function removeSpaces (str) {
     return str.replace(/\s+/g, "");
  }
  
  function passwordGenerator (name) {
    return name.length > 4 ? 
    removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name)))) : "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'