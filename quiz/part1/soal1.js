/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber = []) {
  // code di sini
  // arrNumber harusnya array tidak berurutan
  return arrNumber.sort((a, b) => a - b).reverse();
}

function getTotal(arrNumber = []) {
  // code di sini
  // jika arrNumber adalah array yang tidak ada isinya maka return ""
  if (arrNumber && arrNumber.length < 1) return "";

  // arrNumber harusnya array yang sudah diurutkan di function sorting
  let highestNumber = arrNumber.filter(value => value === arrNumber[0]);
  return `angka paling besar adalah ${highestNumber[0]} dan jumlah kemunculan sebanyak ${highestNumber.length} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
