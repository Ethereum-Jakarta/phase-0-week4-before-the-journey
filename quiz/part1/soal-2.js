/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  const map = {
    a: "b",
    i: "j",
    u: "v",
    e: "f",
    o: "p",
    A: "B",
    I: "J",
    U: "V",
    E: "F",
    O: "P",
  };

  return str
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

function reverseWord(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  return str
    .split("")
    .map((char) =>
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase(),
    )
    .join("");
}

function removeSpaces(str) {
  str = str.replace(/\s+/g, "");
  return str;
}

function passwordGenerator(name) {
  if (name.length < 5)
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
