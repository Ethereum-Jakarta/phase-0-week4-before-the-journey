/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    //code di 
    let lower = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let hasil = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let lowidx = lower.indexOf(char);
        let upidx = upper.indexOf(char);
        if ((char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o') && lowidx !== -1) {
            hasil += lower[(lowidx + 1) % 26]
        } else if ((char === 'A' || char === 'I' || char === 'U' || char === 'E' || char === 'O') && upidx !== -1) {
            hasil += upper[(upidx + 1) % 26]
        }else {
            hasil += char
        }
    }
    return hasil
}

function reverseWord(str) {
    //code di 
    let tampung = changeVocals(str)
    let hasil = ''
    for (let i = str.length - 1; i >= 0; i--) {
        // let hasil = '';
        hasil += str[i]
    }
    return hasil
}

function setLowerUpperCase(str) {
    //code di sini
    let hasil = ''
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(char === char.toUpperCase()){
            hasil += char.toLowerCase();
        }else{
            hasil += char.toUpperCase()
        }
    }
    return hasil
}

function removeSpaces(str) {
    //code di sini
    let hasil = '';
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(char != ' '){
            hasil += char;
        }
    }
    return hasil
}

function passwordGenerator(name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    let vokal = changeVocals(name);
    let reverse = reverseWord(vokal);
    let casee = setLowerUpperCase(reverse);
    let space = removeSpaces(casee);
    return space
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'