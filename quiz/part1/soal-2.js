/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
    //code di sini
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let newVocal = "";

    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        if (element === ' ') {
            newVocal += element;
            // break;
        } else {

            for (let j = 0; j < alphabets.length; j++) {
                const char = alphabets[j];
                
                if (element.toLowerCase() === char || element.toLowerCase() === char) {
                    // console.log(char, alphabets);
                    if(element.toLowerCase() === 'a') {
                        newVocal += element.toUpperCase() === element ? alphabets[j + 1].toUpperCase() : alphabets[j + 1];
                    } else if(element.toLowerCase() === 'i') {
                        newVocal += element.toUpperCase() === element ? alphabets[j + 1].toUpperCase() : alphabets[j + 1];
                    } else if(element.toLowerCase() === 'u') {
                        newVocal += element.toUpperCase() === element ? alphabets[j + 1].toUpperCase() : alphabets[j + 1];
                    } else if(element.toLowerCase() === 'e') {
                        newVocal += element.toUpperCase() === element ? alphabets[j + 1].toUpperCase() : alphabets[j + 1];
                    } else if(element.toLowerCase() === 'o') {
                        newVocal += element.toUpperCase() === element ? alphabets[j + 1].toUpperCase() : alphabets[j + 1];
                    } else {
                        newVocal += element;
                    }
                }
            }
        }
    }
    return newVocal;
}

function reverseWord(str) {
    //code di sini
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        // console.log(element);
        reverse += element;
    }
    return reverse;
    
}

function setLowerUpperCase(str) {
    //code di sini
    let setLowerUpperName = '';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element.toLowerCase() === element) {
            setLowerUpperName += element.toUpperCase()
        } else if(element.toUpperCase() === element) {
            setLowerUpperName += element.toLowerCase()
        } else {
            setLowerUpperName += ' '
        }
    }
    return setLowerUpperName;
}

function removeSpaces(str) {
    //code di sini
    let newPassword = '';
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element !== ' ') {
            newPassword += element;
        }
    }
    return newPassword
}

function passwordGenerator(name) {
    //code di sini
    if(name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } 
    const changeVocal = changeVocals(name);
    const reverse = reverseWord(changeVocal);
    const changeChar = setLowerUpperCase(reverse);
    return removeSpaces(changeChar);
}

console.log(passwordGenerator('Andika')); // 'bNDJKB'
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'