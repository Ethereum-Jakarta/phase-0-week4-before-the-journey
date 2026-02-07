/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  function cek_terbesar (a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    }
    return 0;
  }
  return arrNumber.sort(cek_terbesar);
}

function getTotal(arrNumber) {
  // code di sini
  if (!arrNumber || arrNumber.length === 0) {
    return "''";
  }

  const terbesar = arrNumber[0];

  function hitung (arr) {
    if (arr.length === 0 || arr[0] !== terbesar) {
      return 0;
    }
    return 1 + hitung(arr.slice(1));
  }

  const jumlah = hitung(arrNumber);
  
  return `angka paling besar adalah ${terbesar} dan jumlah kemunculan sebanyak ${jumlah} kali`
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