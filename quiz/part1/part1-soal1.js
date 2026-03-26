/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka 
yang paling besar dan mengetahui berapa kali angka tersebut muncul di 
dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan 
(sorting dan getTotal). Dilarang mengubah isi dalam function 
mostFrequentLargestNumbers!
*/

/* 
Step
1. Cari angka yg paling tinggi. [8,8,8]
2. Cari brp byk angka yg paling tinggi.
3. Hitung jumlah angka yg paling tinggi.
*/

function sorting(arrNumber) {
    // code di sini

    const max = Math.max(...arrNumber);
    return arrNumber.filter(num => num === max);
  }
  
  // console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));

  function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length === 0) return [];
    
    let jumlahangka = arrNumber.length;
    let angkaterbesar = arrNumber[0];
    return `angka paling besar adalah ${angkaterbesar} dan jumlah kemunculan sebanyak ${jumlahangka}`;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([])); 
  //''