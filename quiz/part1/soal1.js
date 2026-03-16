/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini

  // Quick Sort
  let pivot = arrNumber[Math.floor(arrNumber.length / 2)];
  let middleGroup = [];
  let left = [];
  let right = [];

  if (arrNumber.length <= 1) return arrNumber;

  for (const num of arrNumber) {
    if (num === pivot) middleGroup.push(num);
    else if (num > pivot) right.push(num);
    else left.push(num);
  }

  arrNumber = [...sorting(left), ...middleGroup, ...sorting(right)];
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if (arrNumber.length <= 1) return arrNumber;

  const highest = arrNumber[arrNumber.length - 1];
  const modes = arrNumber.filter((num) => num === highest).length;

  return `angka paling besar adalah ${highest} dan jumlah kemunculannya sebanyak ${modes}`;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]),
);
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
