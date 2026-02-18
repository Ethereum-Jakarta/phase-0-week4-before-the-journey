function kaliTerusRekursif(angka) {
  // you can only write your code here!
  // Base case: if angka is a single digit, return it
  if (angka < 10) {
    return angka;
  }
  // Convert angka to string, split into array, then multiply all digits
  let digits = angka.toString().split("");
  let hasil = 1;
  for (let i = 0; i < digits.length; i++) {
    hasil *= Number(digits[i]);
  }
  // Recursive call
  return kaliTerusRekursif(hasil);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
