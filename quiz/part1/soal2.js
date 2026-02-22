/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    //code di sini
    str = str.split('');
    let vocal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    let after = ['b', 'j', 'v', 'f', 'p', 'B', 'J', 'V', 'F', 'P'];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vocal.length; j++) {
            if (str[i] == vocal[j]) {
                str[i] = after[j];
            }
        }
    }
    return str.join('');
}

function reverseWord(str) {
    //code di sini
    str = str.split('');
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join('');
}

function setLowerUpperCase(str) {
    //code di sini
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        } else if (str[i] == str[i].toLowerCase()) {
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
}

function removeSpaces(str) {
    //code di sini
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            str.splice(i, 1);
        }
    }
    return str.join('');
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minmal karakter yang diinputkan adalah 5 karakter';
    } else {
        var ubah = changeVocals(name);
        var balik = reverseWord(ubah);
        var kapital = setLowerUpperCase(balik);
        var spasi = removeSpaces(kapital);
        return spasi;
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'