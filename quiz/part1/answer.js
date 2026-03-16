// console.log("Soal ke-1:");
// function sorting(arrNumber) {
//     // console.log(arrNumber)
//     for (let i = 0; i < arrNumber.length; i++) {
//         for (let j = 0; j < (arrNumber.length - i - 1); j++) {
//             if (arrNumber[j] > arrNumber[j + 1]) {
//                 let temp = arrNumber[j];
//                 arrNumber[j] = arrNumber[j + 1]
//                 arrNumber[j + 1] = temp
//             }
//         }
//     }
//     return arrNumber
// }

// function getTotal(arrNumber) {
//     let count = 0;
//     let max = arrNumber[arrNumber.length - 1];
//     for (let i = 0; i < arrNumber.length; i++) {
//         // console.log("getTotal:", arrNumber[i])

//         if (arrNumber[i] === max) {
//             count++
//         }
//     }
//     return count
// }

// function mostFrequentLargestNumbers(arrNumber) {
//     var listSort = sorting(arrNumber);
//     // console.log(listSort)
//     var countHighest = getTotal(listSort);
//     // console.log(countHighest)
//     return countHighest;
// }

// console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
// //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

// console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

// console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

// console.log(mostFrequentLargestNumbers([]));
//''

// console.log("Soal ke-2:");
// function changeVocals(str) {
//     let vocals = "AIUEOaiueo";
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         if (vocals.includes(str[i])) {
//             result += String.fromCharCode(str.charCodeAt(i) + 1);
//         } else {
//             result += str[i]
//         }
//     }
//     return result;
// }
// // console.log(changeVocals('zSergei Dragunov')); // 'VPNVGBRdJFGRFs'

// function reverseWord(str) {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;

//     // return str.split("").reverse().join("") //keep it simple stupid
// }
// // console.log(reverseWord('zSergei Dragunov')); // 'VPNVGBRdJFGRFs'


// function setLowerUpperCase(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         // console.log(str[i])
//         if (str[i] === str[i].toLowerCase()) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i].toLowerCase()
//         }
//     }
//     return result;
// }
// // console.log(setLowerUpperCase('zSergei Dragunov')); // 'VPNVGBRdJFGRFs'


// function removeSpaces(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             result += str[i]
//         }
//     }
//     return result;

//     // return str.split(" ").join("") //keep it simple stupid
// }
// // console.log(removeSpaces('zSergei Dragunov')); // 'VPNVGBRdJFGRFs'

// function passwordGenerator(name) {
//     let resultChangeVocals = changeVocals(name);
//     let resultReverseWord = reverseWord(resultChangeVocals);
//     let resultSetLowerUpperCase = setLowerUpperCase(resultReverseWord);
//     let resultRemoveSpaces = removeSpaces(resultSetLowerUpperCase);
//     return resultRemoveSpaces;
// }

// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// console.log("Soal ke-3:");
// function makanTerusRekursif(waktu) {
//     if (waktu <= 0) {
//         return 0;
//     } else {
//         return 1 + makanTerusRekursif(waktu - 15);
//     }
// }

// console.log(makanTerusRekursif(66)); // 5
// console.log(makanTerusRekursif(100)); // 7
// console.log(makanTerusRekursif(90)); // 6
// console.log(makanTerusRekursif(10)); // 1
// console.log(makanTerusRekursif(0)); // 0

// console.log("Soal ke-4:");
// function totalDigitRekursif(angka) {
//     let strAngka = angka.toString();
//     // console.log(strAngka[0])

//     if (strAngka.length === 1) {
//         return parseInt(strAngka[0])
//     } else {
//         return parseInt(strAngka[0]) + totalDigitRekursif(parseInt(strAngka.slice(1)))
//     }
// }

// console.log(totalDigitRekursif(512)); // 8
// console.log(totalDigitRekursif(1542)); // 12
// console.log(totalDigitRekursif(5)); // 5
// console.log(totalDigitRekursif(21)); // 3
// console.log(totalDigitRekursif(11111)); // 5

console.log("Soal ke-5:");
function kaliTerusRekursif(angka) {
    if (angka < 10) {
        return angka;
    } else {
        let multiply = 1;
        const strAngka = angka.toString()

        for (let i = 0; i < strAngka.length; i++) {
            multiply *= strAngka[i]
        }

        /* 
            angka = 66
            1 * 6= 6
            6 * 6 = 36

            angka = 36
            1 * 3 = 3
            3* 6 = 18

            angka = 18
            1 * 1 = 1
            1 * 8 = 8
        */

        return kaliTerusRekursif(multiply)
    }
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6