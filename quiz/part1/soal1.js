/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka 
tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function 
mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  let arr = arrNumber;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (temp > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

function getTotal(arrNumber) {
  // code di 
  if ( arrNumber.length === 0) return "''"
  let result = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if(arrNumber[i] === arrNumber.at(-1)) result++
  }
  return `angka paling besar adalah ${arrNumber.at(-1)} dan jumlah kemunculan sebanyak ${result} kali`
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
