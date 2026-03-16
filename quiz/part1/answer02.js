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
  const input = str.split("");
  const vocalChar = ["a", "i", "u", "e", "o"];
  for (let i = 0; i < input.length; i++) {
    for (vocal of vocalChar) {
      if (input[i].toLowerCase() === vocal) {
        const binaryChar = vocal.charCodeAt(0);
        const nextChar = binaryChar + 1;
        if (input[i] === input[i].toLowerCase()) {
          input[i] = String.fromCharCode(nextChar);
        } else {
          const result = String.fromCharCode(nextChar);
          input[i] = result.toUpperCase();
        }
      }
    }
  }
  return input;
}

function reverseWord(str) {
  //code di sini
  const reversed = str.reverse();
  return reversed;
}

function setLowerUpperCase(str) {
  //code di sini
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toLowerCase()) {
      str[i] = char.toUpperCase();
    } else {
      str[i] = char.toLowerCase();
    }
  }
  return str;
}

function removeSpaces(str) {
  //code di sini
  const cleanStr = [];
  for (char of str) {
    if (char !== " ") {
      cleanStr.push(char);
    }
  }
  return cleanStr;
}

function passwordGenerator(name) {
  if (name.length < 6)
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  const changedName = changeVocals(name);
  const reversedName = reverseWord(changedName);
  const convertedCase = setLowerUpperCase(reversedName);
  const cleanUp = removeSpaces(convertedCase);
  const result = cleanUp.join("");
  return result;
  //code di sini
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs' VPNVGBRdJFGRFs
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
