function makanTerusRekursif(waktu) {
  if (waktu <= 0) {
    return 0;
  } else {
    return 1 + makanTerusRekursif(waktu - 15);
  }
}

console.log(makanTerusRekursif(66));
console.log(makanTerusRekursif(100));
console.log(makanTerusRekursif(90));
console.log(makanTerusRekursif(10));
console.log(makanTerusRekursif(0));
