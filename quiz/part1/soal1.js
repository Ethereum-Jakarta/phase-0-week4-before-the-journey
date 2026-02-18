function sorting(arrNumber) {
  // code di sini
  return arrNumber.sort(function (a, b) {
    return a - b;
  });
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length === 0) {
    return "";
  }
  var largest = arrNumber[arrNumber.length - 1]; // angka terbesar
  var count = 0; // kemunculan angka terbesar (sementara 0)
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === largest) {
      count++;
    }
  }
  return (
    "angka paling besar adalah " +
    largest +
    " dan jumlah kemunculan sebanyak " +
    count +
    " kali"
    // mengembalikan string sesuai format yang diminta
  );
}

function mostFrequentLargestNumbers(arrNumber) {
  //fungsi untuk mencari angka terbesar dan jumlah kemunculannya
  var listSort = sorting(arrNumber); // memanggil fungsi sorting untuk mengurutkan angka
  var countHighest = getTotal(listSort); // memanggil fungsi getTotal untuk mendapatkan angka terbesar dan jumlah kemunculannya
  return countHighest; // mengembalikan hasil dari fungsi getTotal
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
