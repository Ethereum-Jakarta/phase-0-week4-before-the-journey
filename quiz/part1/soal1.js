/*Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/

function sorting(arrNumber, i = 0) {
  if (arrNumber.length === 0) return '';
  if (i === arrNumber.length) return arrNumber;

  for (let j = 0; j < arrNumber.length - 1 - i; j++) {
    if (arrNumber[j] < arrNumber[j + 1]) {
      let temp = arrNumber[j];
      arrNumber[j] = arrNumber[j + 1];
      arrNumber[j + 1] = temp;
    }
  }

  return sorting(arrNumber, i + 1);
}

function getTotal(arrNumber, i = 0, mode = null, maxCount = 0) {
  if (arrNumber.length === 0) return arrNumber;
  if (i === arrNumber.length) {
    return `angka paling besar adalah ${mode} dan jumlah kemunculan sebanyak ${maxCount} kali`;
  }

  const current = arrNumber[i];
  let count = 1;
  let j = i + 1;

  while (j < arrNumber.length && arrNumber[j] === current) {
    count++;
    j++;
  }

  if (count > maxCount) {
    mode = current;
    maxCount = count;
  }

  return getTotal(arrNumber, j, mode, maxCount);
}

// TIDAK BOLEH DIUBAH
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