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
  let hasil = "";
  let vokal = "AIUEOaiueo";
  for (let i = 0; i < str.length; i++) {
    if (vokal.includes(str[i])) {
      let nextCode = str.charCodeAt(i) + 1;
      hasil += String.fromCharCode(nextCode);
    }else{
      hasil += str[i];
    }
  }return hasil;
}

function reverseWord(str) {
  //code di sini
  const balik = str.split("").reverse().join("");
  return balik;
}

function setLowerUpperCase(str) {
  //code di sini
  let hasil ='';
  let kalimat = str;
  for(let i= 0; i< kalimat.length;i++){
    if(kalimat[i] === kalimat[i].toUpperCase()){
      hasil += kalimat[i].toLowerCase()
    }else if(kalimat[i] === kalimat[i].toLowerCase()){
      hasil += kalimat[i].toUpperCase();
    }else{
      hasil += kalimat[i];
    }
  }return hasil;
}

function removeSpaces(str) {
  //code di sini
const hapus = str.split(" ").join("");
return hapus;
}

function passwordGenerator(name) {
  //code di sini
  if(name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
  let gantivokal = changeVocals(name);
  let balik = reverseWord(gantivokal);
  let kecil = setLowerUpperCase(balik);
  let space = removeSpaces(kecil);
  return space;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
