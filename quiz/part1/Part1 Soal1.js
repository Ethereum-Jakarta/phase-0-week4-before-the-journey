function getTotal(arrNumber) {
  if (arrNumber.length === 0) {
    return "";
  }

  var highest = arrNumber[arrNumber.length - 1];
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === highest) {
      count++;
    }
  }

  return (
    "angka paling besar adalah " +
    highest +
    " dan jumlah kemunculan sebanyak " +
    count +
    " kali"
  );
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));

console.log(mostFrequentLargestNumbers([]));
