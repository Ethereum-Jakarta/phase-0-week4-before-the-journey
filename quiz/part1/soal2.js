/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/

function changeVocals (str) {
    var nextVowels = { a: "b", i: "j", u: "v", e: "f", o: "p", A: "B", I: "J", U: "V", E: "F", O: "P" }
    var changedVowels = ""

    for (var char of str) {
        if (nextVowels[char])
            changedVowels += nextVowels[char]
        else 
            changedVowels += char
    }

    return changedVowels
}

function reverseWord (str) {
    if (str === "") 
        return ""
    else
        return reverseWord(str.substr(1)) + str.charAt(0)
}

function setLowerUpperCase (str) {
    var toggledCases = ""

    for (var char of str) {
        if (char === char.toLowerCase())
            toggledCases += char.toUpperCase()
        else
            toggledCases += char.toLowerCase()
    }

    return toggledCases
}

function removeSpaces (str) {
    var removedSpaces = ""

    for (var char of str) {
        if (char !== " ") removedSpaces += char
    }

    return removedSpaces
}

function passwordGenerator (name) {
    if (name.length < 5) return "Minimal karakter yang diinputkan adalah 5 karakter"

    var changeVowels = changeVocals(name)
    var reverse = reverseWord(changeVowels)
    var toggleCase = setLowerUpperCase(reverse)
    var password = removeSpaces(toggleCase)

    return password
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
