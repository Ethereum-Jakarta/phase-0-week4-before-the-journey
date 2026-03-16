/*
Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

Contoh:

512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.
*/

/**
 * Extracting Digits of a Number:
 * Whenever it comes down to extraction of digit straightaway modulo with 10 is the answer because it extracts out the last digit.
 * 
 * let number = 21;
 * 
 * // Finding the remainder (Last Digit)
 * let remainder = number % 10; // remainder = 1
 * 
 * // Removing the last digit/current last digit
 * number = number / 10; // number = 2
 * 
 * The same process is iterated till the end of number is extracted.
 */

function totalDigitRekursif(angka) {
  if (angka === 0) {
    return 0;
  }
  
  return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5