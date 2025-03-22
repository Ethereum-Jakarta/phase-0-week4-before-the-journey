function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (angka < 10) {
    return angka;
  } else {
    let multiply = 1;
    const num = String(angka);
    for (let i = 0; i < num.length; i++) {
      multiply *= Number(num[i]);
    }

    return kaliTerusRekursif(multiply);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
