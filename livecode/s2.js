/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
    let temp = sentences;
    temp = temp.split("")
    // console.log(temp)
    if (sentences.length === 0){
        return 0;
    } else if (temp[0] == "a" || temp[0] == "A" || temp[0] == "i" || temp[0] == "u" || temp[0] == "U" || temp[0] == "e" || temp[0] == "E" || temp[0] == "o" || temp[0] == "O" || temp[0] == " " || temp[0] == "0" || temp[0] == "1" || temp[0] == "2" || temp[0] == "3" || temp[0] == "4" || temp[0] == "6" || temp[0] == "7" || temp[0] == "8"|| temp[0] == "9"){
        temp.shift();
        temp = temp.join("")
        return consonantCounterRecursive(temp);
    }
    temp.shift();

    temp = temp.join("")
    // console.log(temp)
    return 1 + consonantCounterRecursive(temp)
    
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3

// let oo = "";
// console.log(oo.length)