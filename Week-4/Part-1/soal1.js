/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
  let arr = [];
  let asumsiTerbesar = arrNumber[0] // 8
  for (let i = 1; i < arrNumber.length; i++) {
      if (arrNumber[i] >= asumsiTerbesar) {
        asumsiTerbesar = arrNumber[i]
    }
  }

  for(let j = 0; j < arrNumber.length; j++) {
    if(arrNumber[j] >= asumsiTerbesar) {
      arr.push(arrNumber[j]);
    }
  }
    if (arrNumber.length === 0) {
      return [];
    } else
  return arr;
}

function getTotal(arrNumber) {
  // code di sini
  for(let j = 0; j < arrNumber.length; j++) {
    for(let k = 0; k < arrNumber.length; k++) {
      if(arrNumber[j] > arrNumber[k]) {
        let temp = arrNumber[j];
        arrNumber[j] = arrNumber[k];
        arrNumber[k] = temp;
      }
    }
  }

  let arr = arrNumber[0]
  let total = 0;
  for(let i = 0; i < arrNumber.length; i++) {
    if (
      arrNumber[i] === arrNumber[i + 1] ||
      (arrNumber[i] === arrNumber[arrNumber.length - 1] && arrNumber[i] === arr)
    ) {
      total++;
    }
  }

   if (arrNumber.length === 0) {
     return " ";
   } else {
     return `angka paling besar adalah ${arr} dan jumlah kemunculan sebanyak ${total} kali`;
   }
 
   

}

// console.log(getTotal([8, 8, 8]));



function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber); //8
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// 'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
// 'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
