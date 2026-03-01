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

  let vocal = [["a", "b"], ["i", "j"], ["u", "v"], ["e", "f"], ["o", "p"], ["A", "B"], ["I", "J"], ["U", "V"], ["E", "F"], ["O", "P"]]
  for (let i = 0; i < str.length; i++) {
    let berubah = str[i];
    for (let j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j][0]) {
        berubah = vocal[j][1];
        break;
      }
    }
    hasil += berubah;
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  if (str.length <= 1) {
    return str;
  }

  let huruf_terakhir = str[str.length - 1];
  let sisa = str.slice(0, -1);

  return huruf_terakhir + reverseWord(sisa);
}

function setLowerUpperCase (str) {
  //code di sini
  if (str.length === 0) {
    return "";
  }

  let huruf = str[0];
  let sisa = str.slice(1);

  if (huruf.match(/[a-z]/)) {
    huruf = huruf.toUpperCase();
  } else if (huruf.match(/[A-Z]/)) {
    huruf = huruf.toLowerCase();
  }

  return huruf + setLowerUpperCase(sisa)
}

function removeSpaces (str) {
  //code di sini
  let hasil = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      hasil += str[i];
    }
  }
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  let hasil = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return hasil;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'