function sorting(arrNumber) {
    var n = arrNumber.length
    var temp = null
    var swapped = false

    for (var i = 0; i < n - 1; i++) {
        swapped = false
        for (var j = 0; j < n - i - 1; j++) {
            if (arrNumber[j] > arrNumber[j + 1]) {
                temp = arrNumber[j]
                arrNumber[j] = arrNumber[j + 1]
                arrNumber[j + 1] = temp
                swapped = true
            }
        }
        if (!swapped) break
    }

    return arrNumber
}

function getTotal(arrNumber) {
    if (!arrNumber?.length) return ""

    var n = arrNumber.length
    var highestNumber = arrNumber[n - 1]
    var counter = 0

    for (var i = 0; i < n; i++) {
        if (arrNumber[i] === highestNumber) {
            counter++
        }
    }

    return `angka paling besar adalah ${highestNumber} dan jumlah kemunculan sebanyak ${counter} kali`
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
