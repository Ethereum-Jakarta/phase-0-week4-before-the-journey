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
  const hasil = [];
  const cocok =  "aiueoAIUEO"
  const change = "bjvfpBJVFP"
  
  for (let i = 0; i < str.length; i++) {
    hasil.push(str[i]);
    for (let j = 0; j < cocok.length; j++) {
      if(str[i] == cocok[j]){
        hasil.pop();
        hasil.push(change[j]);
      }
    }
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  const hasil = [];
  const temp =  changeVocals(str)
  for (let i = temp.length -1; i >=0 ;i--) {
    hasil.push(temp[i]);
  }
  return hasil;
}

function setLowerUpperCase (str) {
  //code di sini
  const hasil = [];
  const temp =  reverseWord(str)
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == ' ') {
      hasil.push(temp[i]);
    }
    else if (temp[i].toLowerCase() == temp[i]) {
      hasil.push(temp[i].toUpperCase());
    }
    else if (temp[i].toUpperCase() == temp[i]) {
      hasil.push(temp[i].toLowerCase());
    }
  }
  return hasil;

}

function removeSpaces (str) {
  //code di sini
  const hasil = [];
  const temp =  setLowerUpperCase(str)
  for (let i = 0; i < temp.length; i++) {
    hasil.push(temp[i]);
    if (temp[i] == " ") {
      hasil.pop();
    }    
  }
  return hasil;

}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return removeSpaces(name).join('');
  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'