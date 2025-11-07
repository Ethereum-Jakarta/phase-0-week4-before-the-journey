//## Soal 1
//js
/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
  // code di sini
    for (let i = 0; i < arrNumber.length; i++)
    {
        for (j = i + 1; j < arrNumber.length; j++)
        {
            if (arrNumber[j] < arrNumber[i])
            {
                let temp = arrNumber[j];
                arrNumber[j] = arrNumber[i];
                arrNumber[i] = temp;
            }
        }
    }

    return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
    let kalimatHasil = '';

    if (arrNumber.length > 0)
    {
        let angkaTerbesar = arrNumber[arrNumber.length - 1];

        let hitung = 0;

        for (let i = 0; i < arrNumber.length; i++)
        {
            if (arrNumber[i] === angkaTerbesar)
            {
                hitung++;
            }
        }

        kalimatHasil += `angka paling besar adalah ${angkaTerbesar} dan jumlah kemunculan sebanyak ${hitung} kali`
    }

    return kalimatHasil;
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