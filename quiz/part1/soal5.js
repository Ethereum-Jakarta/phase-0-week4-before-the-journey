function kaliTerusRekursif(num) {
  if (num < 10) {
    return num;
  }
  let digits = num.toString().split('').map(Number);
  let hasil = 1;
  for (let d of digits) {
    hasil *= d;
  }
  return kaliTerusRekursif(hasil);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6