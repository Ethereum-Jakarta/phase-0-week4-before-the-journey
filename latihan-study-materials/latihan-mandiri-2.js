/*
## Latihan Mandiri

1. Bikin regex yang match email valid (format: xxx@xxx.xxx)
2. Bikin fungsi yang hitung berapa kali huruf vokal muncul di string
3. Bikin fungsi `censorBadWords(str, badWords)` yang ganti kata-kata di array `badWords` jadi "***"
4. Bikin regex yang validasi password: minimal 8 karakter, ada huruf besar, huruf kecil, dan angka
*/

// Soal 1
let contohEmail1 = "hai@gmail.com";
let contohEmail2 = "vdajvdgsavggvas.co.id";
let contohEmail3 = "TEST@Gmail.com";
let patternSoal1 = /^[a-z0-9-_]+@[a-z0-9-]+\.[a-z]+$/;

console.log(`Pattern Email valid = ${patternSoal1.test(contohEmail1)}`);
console.log(`Pattern Email valid = ${patternSoal1.test(contohEmail2)}`);
console.log(`Pattern Email valid = ${patternSoal1.test(contohEmail3)}`);


//soal 2
function HitungVocal(kata) {
    return kata.match(/[aiueo]/gi).length;
}

console.log(HitungVocal("aku SUKA MAKON BAOkpao"));
console.log(HitungVocal("Pak PREsidEn sUKA PerdamAiAn"));

//Soal 3
function censorBadWords(str, badWords) {
    return str.replace(badWords, "****");
}

let badWords = /asu|celeng|babi|anjing|tolol|cok/gi
console.log(censorBadWords("WOY ANJING LO BAYAR UTANG GUE COK. CELENG TENAN URIPMU. NEK MISKIN TUH KERJA COK TOLOL, BUKANNYA MALAH NYARI PASANGAN YANG MAU NERIMA APA ADANYA BABI", badWords));
// kata diatas cuma buat ngerjain tugas y. aslinya gw ramah dan baik hati kok wkwkwk


// Soal 4 
function passwordValidation(pw) {
    let pwBaru = "";
    let patternSoal4 = /^[a-z0-9]{8,}$/gi;
    let cekKondisi = patternSoal4.test(pw); // keknya lebih gampang dibuat variable deh wkwkwk
    if (cekKondisi === true) {
        return `Nice Passwordmu sudah sesuai. passwordmu adalah ${pw}`;
    } else {
        return `Passwordmu belum sesuai broo. Buat passwordnya pake minimal 8 karakter dan sertakan huruf kecil, huruf besar, angka saja yaa. Spasi dan TAB juga gak bisa yaa`;
    }
}

console.log(passwordValidation("SayaSukaMakan1k4n"));
console.log(passwordValidation("Burung Kutilang 99      "));