function sorting(arrNumber) {
    return arrNumber.sort((a,b) => b - a) //Sorting dari angka terbesar ke terkecil
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length == 0) { //Jika arrNumber kosong maka return ''
        return '';
    }
    let MaxNumber = arrNumber[0]; //Mencari nilai terbesar
    let count = arrNumber.filter(num => num === MaxNumber).length //Menghitung berapa kali muncul

    return `Angka paling besar adalah ${MaxNumber} dan jumlah kemunculan sebanyak ${count} kali`
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