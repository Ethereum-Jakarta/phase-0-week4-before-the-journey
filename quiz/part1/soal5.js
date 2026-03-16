/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

/**
 * angka = 28
 * function(8 * function(2)); // function(2) akan dijalankan terlebih dahulu, dan karena 2 < 10 function mengembalikan nilai 2 sehingga
 * function(8 * 2) >> function(16);
 * 
 * function(6 * function(1));
 * function(6 * 1) >> function(6); // karena 6 < 10, fungsi akan mengembalikan nilai 6
 */

function kaliTerusRekursif(angka) {
  if (angka < 10) {
    return angka;
  }

  const lastDigit = angka % 10;
  const remaining = angka / 10;

  return kaliTerusRekursif(lastDigit * kaliTerusRekursif(Math.floor(remaining)));
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6