/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  let sortedArr = arrNumber;

  for(let i = 0; i < sortedArr.length; i++){
    for(let j = 0; j < sortedArr.length - 1 - i; j++) {
      if(sortedArr[j] > sortedArr[j + 1]) {
        let tukar = sortedArr[j];
        sortedArr[j] = sortedArr[j+1]
        sortedArr[j+1] = tukar;
      }
    }
  }
  return sortedArr;
}

function getTotal(arrNumber) {
  // code di sini

  if(arrNumber.length < 1) {
    return "''";
  }

  let max = -Infinity;
  let count = 0;

  for(let i = 0; i < arrNumber.length; i++){
    if(arrNumber[i] > max) {
      max = arrNumber[i];
    }
  }

  for(let i = 0; i < arrNumber.length; i++){
    if(arrNumber[i] === max) {
      count++
    }
  }

  let hasil = `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${count} kali`
  return hasil;
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