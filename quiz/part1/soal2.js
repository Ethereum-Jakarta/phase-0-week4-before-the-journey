//Soal 2
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
  let vokal = {
    a: 'b', i: 'j', u: 'v', e: 'f', o: 'p',
    A: 'B', I: 'J', U: 'V', E: 'F', O: 'P'
  };
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if(vokal[arr[i]]) arr[i] = vokal[arr[i]];
  }
  return arr;
}

function reverseWord(str) {
  //code di sini
  return str.reverse();
}

function setLowerUpperCase(str) {
  //code di sini
  return str
    .map((c) => {
      if(c >= "a" && c <= "z") return c.toUpperCase();
      else if(c >= "A" && c <= "Z") return c.toLowerCase();
      else return c;
    })
    .join("");
}

function removeSpaces(str) {
  //code di sini
  return str.split(" ").join("");
}

function passwordGenerator(name) {
  //code di sini
  if (!name || name.length < 5)
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  let a = changeVocals(name);
  let b = reverseWord(a);
  let c = setLowerUpperCase(b);
  let d = removeSpaces(c);
  return d;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
