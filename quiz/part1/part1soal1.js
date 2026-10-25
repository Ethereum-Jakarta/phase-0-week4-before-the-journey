/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    // code di sini
    let sortedArr = [];
    let loop;
    let max = arrNumber[0];
    let maxIndex = 0;
    do{
        max = arrNumber[0];
        maxIndex = 0;
        for(let i = 0; i<arrNumber.length; i++){
            if(max < arrNumber[i]){
                max = arrNumber[i];
                maxIndex = i;
            }
        }
        sortedArr = [...sortedArr, ...arrNumber.splice(maxIndex,1)];
        if(arrNumber.length == 0){
            loop = false;
        }
        else{
            loop = true;
        }
    } while(loop);
    return sortedArr
}

function getTotal(arrNumber) {
    let i = 1;
    while(arrNumber[i-1] == arrNumber[0] || (i - 1 == arrNumber.length)){
        i++;
    }
    return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${i} kali`;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));