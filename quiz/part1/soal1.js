/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  // mengurutkan data dari yang terbesar ke kecil
  return arrNumber.sort((a, b) => b - a);
}

function getTotal(arrNumber) {
  // code di sini
  // pengondisian apakah array kosng atau tidak
  if (!Array.isArray(arrNumber) || arrNumber.length === 0) {
    const result = "''";
    return result;
  }

  // deklarasi variabel yang dibutuhkan
  let max = sorting(arrNumber)[0];// karena dari fungsi sudah urut dari besar ke kecil maka index 0 pasti angka yang paling besar
  let jumlah = 1;// karena sudah pasti ada angka yang paling besar maka jumlahnya adalah 1

  // perulangan untuk menghitung berapa angka terbesarnya
  for (let i = 1; i < arrNumber.length; i++) {
    if (arrNumber[i] === arrNumber[0]) {
      jumlah += 1;
    }
  }

  let output = `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${jumlah} kali`;
  return output;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
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
//''
