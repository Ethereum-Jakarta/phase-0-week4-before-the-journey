/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let outputString = ""
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ("aeiouAEIOU".includes(char)) {
      char = String.fromCharCode(char.charCodeAt(0) + 1);
    }
    outputString += char;
  }
  return outputString;
}





function reverseWord(str) {
  //code di sini
   let reversedStr = ""
    for(let i = str.length -1; i >= 0; i--) {
      reversedStr += str[i]
    }
    return reversedStr;
}






function setLowerUpperCase(str) {
  //code di sini
  let outputStr = ""
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i].toLowerCase()) {
      outputStr += str[i].toUpperCase()
    } else {
      outputStr += str[i].toLowerCase()
    }
  }
  return outputStr;
}





function removeSpaces(str) {
  //code di sini
  return str.replace(/\s+/g, "");
}


function passwordGenerator(name) {
  let ubahVokal = changeVocals(name)
  let balikKata = reverseWord(ubahVokal)
  let ubahKecilBesar = setLowerUpperCase(balikKata);
  let hapusSpasi = removeSpaces(ubahKecilBesar);

  return name.length < 5 ? "Minimal karakter yang diinputkan adalah 5 karakter" : hapusSpasi;
  
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

