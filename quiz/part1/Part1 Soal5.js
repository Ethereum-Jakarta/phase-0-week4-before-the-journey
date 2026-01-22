function kaliTerusRekursif(angka) {
  if (angka < 10) {
    return angka;
  }

  var strAngka = String(angka);
  var hasil = 1;

  for (var i = 0; i < strAngka.length; i++) {
    hasil *= Number(strAngka[i]);
  }

  return kaliTerusRekursif(hasil);
}

console.log(kaliTerusRekursif(66));
console.log(kaliTerusRekursif(3));
console.log(kaliTerusRekursif(24));
console.log(kaliTerusRekursif(654));
console.log(kaliTerusRekursif(1231));
