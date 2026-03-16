/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arrNumber.length - 1; i++) {
      if (arrNumber[i] > arrNumber[i + 1]) {
        let temp = arrNumber[i];
        arrNumber[i] = arrNumber[i + 1];
        arrNumber[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arrNumber;
}

function getTotal(arrNumber) {
  if (!arrNumber.length) {
    return '';
  }

  const highest = arrNumber[arrNumber.length - 1];
  let count = 0;

  for (const num of arrNumber) {
    if (num === highest) {
      count++;
    }
  }

  return `angka paling besar adalah ${highest} dan jumlah kemunculan sebanyak ${count} kali`;
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