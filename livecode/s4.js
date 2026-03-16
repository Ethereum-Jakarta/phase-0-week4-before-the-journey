/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text){
    text = text.toLowerCase().split("");
    let count = {};
    let result = 0;
    for (let i = 0; i < text.length; i++){
        count[text[i]] = text[i];
    }

    return count;
} 
      //GAGAALLL;
// console.log(duplicateCount("")) //0
// console.log(duplicateCount("abcde")) //0
console.log(duplicateCount("aabbcde")) //2
// console.log(duplicateCount("aabBcde")) //2
// console.log(duplicateCount("Indivisibility")) //1
// console.log(duplicateCount("Indivisibilities")) //2
// console.log(duplicateCount("abcabcdABcefGhg")) //4