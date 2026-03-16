/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
    let hurufKecil = "abcdefghijklmnopqrstuvwxyza";
    let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZA";

    for (let i = 0; i < str.length; i++) {
        let indexHuruf = 0;
        if (hurufKecil.includes(str[i])) {
            indexHuruf = hurufKecil.indexOf(str[i]);
            str = str.replace(str[i], hurufKecil[indexHuruf + 1]);
        } else if (hurufBesar.includes(str[i])) {
            indexHuruf = hurufBesar.indexOf(str[i]);
            str = str.replace(str[i], hurufBesar[indexHuruf + 1]);
        }
    }
    return str;
}

function reverseWord (str) {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}

function setLowerUpperCase (str) {
    let hurufKecil = "abcdefghijklmnopqrstuvwxyz";
    let hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < str.length; i++) {
        if (hurufKecil.includes(str[i])) {
            str = str.replace(str[i], str[i].toUpperCase());
        } else if (hurufBesar.includes(str[i])) {
            str = str.replace(str[i], str[i].toLowerCase());
        }
    }
    return str;
}

function removeSpaces (str) {
    return str.split(" ").join("");
}

function passwordGenerator (name) {
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
    let mengubahHuruf = changeVocals(name);
    let membalikKalimat = reverseWord(mengubahHuruf);
    let besarKecilHuruf = setLowerUpperCase(membalikKalimat);
    let result = removeSpaces(besarKecilHuruf);

    return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'