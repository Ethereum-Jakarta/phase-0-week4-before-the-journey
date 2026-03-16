/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newKata = '';
    let vocal = "aeiouAEIOU"

    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j <= abc.length - 1; j++) {
            let word = ''
            if (str[i] == abc[j]) {
                word = abc[j];
                for (k = 0; k <= vocal.length; k++) {
                    if (str[i] == vocal[k])
                        word = abc[j + 1]
                }
                newKata += word
            }
        }
    }
    return newKata;
}

function reverseWord(str) {
    let vocals = changeVocals(str)
    // var splitStr = vocals.split("");
    // let reverseStr = splitStr.reverse();
    let joinStr = vocals.split("").reverse().join("")

    return joinStr;
}

function setLowerUpperCase(str) {
    var reverseList = reverseWord(str)
    reverseList.split("")
    let lowerUpper = ''
    for (let i = 0; i <= reverseList.length - 1; i++) {
        let word = '';
        if (reverseList[i] == reverseList[i].toUpperCase()) {
            word = reverseList[i].toLowerCase();
        } else
            word = reverseList[i].toUpperCase();
        lowerUpper = lowerUpper + word
    }
    return lowerUpper;
}

function removeSpaces(str) {
    var listWord = setLowerUpperCase(str);
    if (listWord.includes(' ')) {
        return listWord.replace(/\s+/g, "")
    }
    return listWord
} //ini ga kepake :v

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else
        var noSpaceWord = removeSpaces(name);
        return noSpaceWord;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'