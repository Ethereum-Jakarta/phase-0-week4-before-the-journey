function changeVocals (str) {
  let change = {'a' : 'b', 'i': 'j', 'u' : 'v', 'e' : 'f', 'o' : 'p', 'A':'B', 'I':'J', 'U':'V', 'E':'F', 'O':'P'}
  return str.replace(/[aiueoAIUEO]/g, match => change[match]); //Ubah huruf dlu
}

function reverseWord (str) {
  return str.split('').reverse().join('') //Membalikkan string
}

function setLowerUpperCase (str) {
    let result = ""; // Menyimpan nilai

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toLowerCase()) {
        result += str[i].toUpperCase(); // Jika huruf kecil, ubah ke huruf besar
      } else {
        result += str[i].toLowerCase(); // Jika huruf besar, ubah ke huruf kecil
      }
    }
  
    return result;
  }

function removeSpaces (str) {
  return str.replace(/\s/g, '') //Menghapus spasi
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  let Vocals = changeVocals(name)
  let reverse = reverseWord(Vocals)
  let setUpLow = setLowerUpperCase(reverse)
  let removeSpasi = removeSpaces(setUpLow)

  return removeSpasi;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'