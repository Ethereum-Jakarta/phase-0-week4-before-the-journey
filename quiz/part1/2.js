/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
            abjad = str[i] = String.fromCharCode(str.charCodeAt(i) + 1);
            result += abjad;
        } else if (str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            abjad = String.fromCharCode(str.charCodeAt(i) + 1);
            result += abjad;
        } else {
            result += str[i];
        }
    }
    return reverseWord(result);
}

function reverseWord(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return setLowerUpperCase(result);
}

function setLowerUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return removeSpaces(result);
}

function removeSpaces(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

function passwordGenerator(name) {
    if (name.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    // console.log(name);
    return changeVocals(name);


    //code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'