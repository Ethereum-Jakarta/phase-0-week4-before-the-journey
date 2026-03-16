function sorting(arrNumber) {
    return arrNumber.sort((a, b) => b - a);
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length === 0) return '';
    
    let max = arrNumber[0];
    let count = arrNumber.filter(num => num === max).length;
    
    return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${count} kali`;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  console.log(mostFrequentLargestNumbers([]));
  console.log("");
  function changeVocals(str) {
    let vocals = 'aiueoAIUEO';
    let replace = 'bjvfpBJVFP';
    let result = '';
    
    for (let char of str) {
      let index = vocals.indexOf(char);
      result += index !== -1 ? replace[index] : char;
    }
    
    return result;
  }
  
  function reverseWord(str) {
    return str.split('').reverse().join('');
  }
  
  function setLowerUpperCase(str) {
    return str
      .split('')
      .map(char => (char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()))
      .join('');
  }
  
  function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }
  
  function passwordGenerator(name) {
    if (name.length < 5) return 'Minimal karakter yang diinputkan adalah 5 karakter';
    
    let changed = changeVocals(name);
    let reversed = reverseWord(changed);
    let swapped = setLowerUpperCase(reversed);
    return removeSpaces(swapped);
  }
  
  console.log(passwordGenerator('Sergei Dragunov'));
  console.log(passwordGenerator('Dimitri Wahyudiputra'));
  console.log(passwordGenerator('Alexei'));
  console.log(passwordGenerator('Alex'));
  console.log("");
  function makanTerusRekursif(waktu) {
    if (waktu <= 0) return 0;
    return 1 + makanTerusRekursif(waktu - 15);
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66));
  console.log(makanTerusRekursif(100));
  console.log(makanTerusRekursif(90));
  console.log(makanTerusRekursif(10));
  console.log(makanTerusRekursif(0));
  console.log("");

  function totalDigitRekursif(angka) {
    if (angka < 10) return angka;
    return (angka % 10) + totalDigitRekursif(Math.floor(angka / 10));
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512));
  console.log(totalDigitRekursif(1542));
  console.log(totalDigitRekursif(5));
  console.log(totalDigitRekursif(21));
  console.log(totalDigitRekursif(11111));
  console.log("");
  
  function kaliTerusRekursif(angka) {
    if (angka < 10) return angka;
    
    let product = angka
      .toString()
      .split('')
      .reduce((acc, num) => acc * Number(num), 1);
    
    return kaliTerusRekursif(product);
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66));
  console.log(kaliTerusRekursif(3));
  console.log(kaliTerusRekursif(24));
  console.log(kaliTerusRekursif(654));
  console.log(kaliTerusRekursif(1231));
  