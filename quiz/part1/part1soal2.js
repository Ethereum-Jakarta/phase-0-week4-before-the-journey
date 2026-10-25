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
    let change = '';
    let vokal = ['a', 'A', 'i', 'I', 'u', 'U', 'e', 'E', 'o', 'O'];
    for(let i = 0; i < str.length;i++){
        if(vokal.includes(str[i])){
            change = change + String.fromCharCode(str.charCodeAt(i) + 1);
        }
        else{
            change = change + str[i];
        }
    }
    return change;
}

function reverseWord(str) {
    let reverse = '';
    for(let i = str.length - 1; i>=0; i--){
        reverse = reverse + str[i];
    }
    return reverse;
}

function setLowerUpperCase(str) {
    //code di sini
    let caseLowUp = '';
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() != str[i]){
            caseLowUp = caseLowUp + str[i].toUpperCase();
        }
        else if(str[i].toLowerCase() != str[i]){
            caseLowUp = caseLowUp + str[i].toLowerCase();
        }
    } 
    return caseLowUp;
}

function removeSpaces(str) {
    let noSpace ='';
    for(let i = 0; i<str.length;i++){
        if(str[i] != ' '){
            noSpace = noSpace + str[i];
        }
    }
    return(noSpace);
}

function passwordGenerator(name) {
    if(name.length >=5){
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
    else{
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'