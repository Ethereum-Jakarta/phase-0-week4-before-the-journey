/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  const nextVowel = {
    a: 'b', i: 'j', u: 'v', e: 'f', o: 'p', A: 'B', I: 'J', U: 'V', E: 'F', O: 'P',
  };

  let changed = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (nextVowel[char]) {
      changed += nextVowel[char];
    } else {
      changed += char;
    }
  }

  return changed;
}

function reverseWord(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];

    reversed += char;
  }

  return reversed;
}


function setLowerUpperCase(str) {
  let changed = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === char.toUpperCase()) {
      changed += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      changed += char.toUpperCase();
    } else {
      changed += char;
    }
  }

  return changed;
}

function removeSpaces(str) {
  let removed = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char !== " ") {
      removed += char;
    }
  }

  return removed;
}

function passwordGenerator(name) {
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  const changeVowel = changeVocals(name);
  const reverseName = reverseWord(changeVowel);
  const toggleCase = setLowerUpperCase(reverseName);
  const password = removeSpaces(toggleCase);

  return password;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'