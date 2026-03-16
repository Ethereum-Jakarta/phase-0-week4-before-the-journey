
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
  let hasil = "";
  for (huruf of str) {
      if ("AIUEOaiueo".includes(huruf)) {
          hasil+=String.fromCharCode(huruf.charCodeAt(0) + 1) // btw, aku pake cara ini dapat referensi dari sepuh2 codewars
      } else {
          hasil += huruf
      }
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  let hasil = [];
  for (i of str) {
    hasil.unshift(i)
  }
  hasil = hasil.join("");
  return hasil;
}

function setLowerUpperCase (str) {
  //code di sini
  hasil = str.split("");
  for (i in hasil) {
    if (hasil[i].toLowerCase() === hasil[i]) {
        hasil.splice(i,1,hasil[i].toUpperCase())
    } else if (hasil[i].toUpperCase() === hasil[i]) {
        hasil.splice(i,1,hasil[i].toLowerCase())
    }
  }
  return hasil.join("");
}

function removeSpaces (str) {
  //code di sini
  str = str.split(" ");
  return str.join("");
}

function passwordGenerator (name) {
  //code di sini
  let ubah_vokal = changeVocals(name);
  let balik_tulisan = reverseWord(ubah_vokal);
  let besar_kecil = setLowerUpperCase(balik_tulisan);
  let hasil = removeSpaces(besar_kecil);
  if (hasil.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  } 
  return hasil;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'