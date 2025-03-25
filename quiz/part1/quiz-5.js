
function kaliTerusRekursif(angka) {
    if (angka < 10) return angka
    angka = angka.toString();
    let count = 1
    for (let i = 0; i < angka.length; i++) {
        count *= Number(angka[i])
    }
    return kaliTerusRekursif(count)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6