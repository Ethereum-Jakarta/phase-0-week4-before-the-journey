/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
}

function getTotal(arrNumber) {
  // code di sini
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let hurufVokal = "aiueoAIUEO"

  let huruf = str.split('')
  
  for (let i = 0; i < str.length; i++) {

    for (let a = 0; a < hurufVokal.length; a++) {
      if (str[i] == hurufVokal[a]) {
        let asci = str.charCodeAt(i)
    
        huruf[i] = String.fromCharCode(asci + 1)
      }
    }
    
  }
  
  return huruf;
}

function reverseWord (str) {
  //code di sini
  
  return str.reverse()
}

function setLowerUpperCase (str) {
  //code di sini
  let hasil = str

 for (let i = 0; i < str.length; i++) {
  if (hasil[i] == hasil[i].toUpperCase()) {
    hasil[i] = hasil[i].toLowerCase()
  }else if (hasil[i] != hasil[i].toUpperCase())
    hasil[i] = hasil[i].toUpperCase()
  
 }

  return hasil
}

function removeSpaces (str) {
  //code di sini
  if (str.length <= 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }

  let remove = str.join("")

  return remove.replace(/\s+/g, ""); 
}

function passwordGenerator (name) {
  //code di sini
  let changeVocals1 = changeVocals(name)
  let reverseWord1 = reverseWord(changeVocals1)
  let setLowerUpperCase1 = setLowerUpperCase(reverseWord1)
  let removeSpaces1 = removeSpaces(setLowerUpperCase1)

  return removeSpaces1;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

/*
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). 
Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. 
Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. 
Begitu seterusnya sampai waktunya habis 
.Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. 
Function akan memproses jika waktu masih ada. 
Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. 
Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1
*/

function makanTerusRekursif(waktu) {
  // you can only write your code here!

  if (waktu <= 0) {
    return 0
  }
  
  hasil = hasil + 1

  return 1 + makanTerusRekursif(waktu - 15) // 51,36,21,6,-9
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0

/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. 
Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. 
Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

function totalDigitRekursif(angka) {
  // you can only write your code here!

  if (angka < 10) {
    return angka;
  }

  let index = angka % 10
  
  return index + totalDigitRekursif(Math.floor(angka / 10))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5

/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. 
Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. 
Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. 
Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 
24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 
654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let jadikanAray = String(angka)

  if (angka < 10) {
    return angka
  }

  let hasilnya = 1

  for (let i = 0; i < jadikanAray.length; i++) {
    hasilnya = hasilnya * jadikanAray[i] 
  }

  return kaliTerusRekursif(hasilnya)
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
