// ## Soal 2
//js
/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  //code di sini
    let newStr = '';
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) === 'A' || str.charAt(i) === 'I' || str.charAt(i) === 'U' || str.charAt(i) === 'E' || str.charAt(i) === 'O' || str.charAt(i) === 'a' || str.charAt(i) === 'i' || str.charAt(i) === 'u' || str.charAt(i) === 'e' || str.charAt(i) === 'o')
        {
            newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        else
        {
            newStr += str.charAt(i);
        }
    }

    return newStr;
}

function reverseWord (str) {
  //code di sini
    let newStr = ''
    for (let i = str.length - 1; i > -1; i--)
    {
        newStr += str.charAt(i);
    }

    return newStr;
}

function setLowerUpperCase (str) {
  //code di sini
    let newStr = '';

    for (let i = 0; i < str.length; i++)
    {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
        {
            newStr += String.fromCharCode(str.charCodeAt(i) + 32);
        }
        else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 132)
        {
            newStr += String.fromCharCode(str.charCodeAt(i) - 32);
        }
        else
        {
            newStr += str.charAt(i);
        }
    }

    return newStr;
}

function removeSpaces (str) {
  //code di sini
    let newStr = '';
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) !== ' ')
        {
            newStr += str.charAt(i);
        }
    }

    return newStr;
}

function passwordGenerator (name) {
  //code di sini
    if (name.length > 4)
    {
        let ubahVokal = changeVocals(name);
        let reverse = reverseWord(ubahVokal);
        let lowerUpper = setLowerUpperCase(reverse);
        let hilangSpasi = removeSpaces(lowerUpper);
        return hilangSpasi;
    }

    return 'Minimal karakter yang diinputkan adalah 5 karakter';
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
