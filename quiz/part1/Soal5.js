/*
Diberikan sebuah function kaliTerusRekursif(angka) yang menerima satu parameter berupa angka. Function akan memproses angka yang lebih dari satu digit menjadi satu digit dengan melakukan perkalian. Bila masih lebih dari satu digit, terus lakukan perkalian setiap digit-nya untuk pada akhirnya mendapatkan satu digit. Wajib menggunakan rekursif untuk berlatih rekursif, namun kamu boleh menggunakan looping juga disini.

Contoh:

3 => 3, karena sudah satu digit 24 => 8. Karena 24 dua digit, maka kita lakukan 2 * 4 = 8. 8 satu digit, maka hasilnya adalah 8. 654 => 0. Karena 654 tiga digit, maka lakukan 6 * 5 * 4 = 120. 120 tiga digit, maka lakukan 1 * 2 * 0 = 0. 0 satu digit, maka hasilnya adalah 0.
*/

// function kaliTerusRekursif(angka) {
//   // you can only write your code here!
//   let tt = angka.toString()
//   if(tt.length === 1) {
//     return angka
//   }
//   let hasil = 1
//   for(let digit of tt) {
//     hasil *= parseInt(digit)
//   }
//   return kaliTerusRekursif(hasil)
// }

// // TEST CASES
// console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6
// function toCamelCase(str){
// let gg = str.split(/[-_]/);
//   let hasil = gg[0]
  
//   if(str.length <1)return hasil
// for(var i=1;i<gg.length;i++) {
//   hasil += gg[i].charAt(0).toUpperCase() + gg[i].slice(1)
// }

// return hasil
// }

// console.log(toCamelCase('the_stealth_warrior'))
// console.log(toCamelCase(''))
// function duplicateEncode(words) {
//   let wod = words.toLowerCase()
//   let obj = {}
//   for(var i=0;i<wod.length;i++) {
//     if(!obj[wod[i]]){
//     obj[wod[i]] = 1
//   }else {
//     obj[wod[i]] += 1
//   }
//   }
//   let hasil = ''
//   for(let dd of wod){
//   if(obj[dd] === 1) {
//     hasil+= '('
//   }else {
//     hasil+= ')'
//   }
//   }

//   return hasil
// }
// console.log(duplicateEncode("CodeWarrior"));
// console.log(duplicateEncode("din"),"(((");
//     console.log(duplicateEncode("recede"),"()()()");
//     console.log(duplicateEncode("Success"),")())())","should ignore case");
//     console.log(duplicateEncode("(( @"),"))((");
// function findUniq(arr) {
//   let obj ={}
//   for(var i=0;i<arr.length;i++) {
//     if(!obj[arr[i]]) {
//       obj[arr[i]] =1
//     }else {
//       obj[arr[i]] +=1
//     }
//   }
//   for(let dd of arr)
//   if(obj[dd] == 1) {
//     return dd
//   }
// }
//   console.log(findUniq([ 1, 0, 0 ]), 1);
//     console.log(findUniq([ 0, 1, 0 ]), 1);
//     console.log(findUniq([ 0, 0, 1 ]), 1);
//     console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//     console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//     console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
function add(num1,num2) {
  let n1 = num1.toString()
  let n2 = num2.toString()
  let hasil =''
  if(n1.length > n2.length) {
  for(var i=n1.length-1;i>=0;i--) {
      let selisih  = n1.length -n2.length
    if(i-selisih >= 0) {
    let dd = parseInt(n1[i])+parseInt(n2[i-selisih])
    hasil = dd + hasil
}else {
  hasil = n1 +hasil
}
  }
  }else {
    for(var i=n2.length-1;i>=0;i--) {
    let selisih2 = n2.length-n1.length
    if(i - selisih2 >= 0) {
      let ff = parseInt(n1[i-selisih2])+parseInt(n2[i])
    hasil = ff + hasil
    }else {
      hasil = n2 + hasil
    }
  }
  }
  return parseInt(hasil)
}
    console.log(add(122, 81), 1103);
    console.log(add(16, 18), 214);

console.log(add(2, 11), 13);
    console.log(add(0, 1), 1);
    console.log(add(0, 0), 0);
    console.log(add(26, 39), 515);
  
