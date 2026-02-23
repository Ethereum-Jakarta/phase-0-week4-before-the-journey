/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str = "") {
  //code di sini
  let abjad = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z", 
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z"
];
  
let vocalWord = [
    "a", "i", "u", "e", "o",
    "A", "I", "U", "E", "O",
];

  str = str.slice().split("");

  for (let j = 0; j < str.length; j++) {
    for (let i = 0; i < vocalWord.length; i++) {
      if (str[j] === vocalWord[i]) {
        str[j] = abjad[abjad.indexOf(vocalWord[i]) + 1];
      };
    }
  }
  return str;
}

function reverseWord(str = []) {
  //code di sini
  const newStr = str.slice().reverse();
  return newStr;
}

function setLowerUpperCase(str = []) {
  //code di sini
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) str[i] = str[i].toUpperCase();
    else if (str[i] === str[i].toUpperCase()) str[i] = str[i].toLowerCase();
  }
  return str;
}

function removeSpaces(str = []) {
  //code di sini
  const newStr = str.slice().filter(value => value !== " ").join("");
  return newStr;
}

function passwordGenerator(name = "") {
  //code di sini
  if (name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter";
  
  let changedVocal = changeVocals(name);
  let reversedWord = reverseWord(changedVocal);
  let switchedUpLowerCase = setLowerUpperCase(reversedWord);
  let removedSpace = removeSpaces(switchedUpLowerCase);

  return removedSpace;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
