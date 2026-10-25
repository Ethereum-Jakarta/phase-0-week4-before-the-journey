//1. Bikin regex yang match email valid (format: xxx@xxx.xxx)
let pattern1 = /\S+@\w+\.\w+/;
console.log(pattern1.test('bayu6   63424123@gmail.com'));

//2. Bikin fungsi yang hitung berapa kali huruf vokal muncul di string
function jumlahVokal(str){
    let pattern2 = /[aiueo]/g;
    return str.match(pattern2).length;
}
console.log(jumlahVokal('Hello World!'));

//3. Bikin fungsi `censorBadWords(str, badWords)` yang ganti kata - kata di array `badWords` jadi "***"
function censorBadWords(str, badWords){
    return str.replace(badWords, '***');
}
console.log(censorBadWords("ih goblok banget anjing", /goblok|anjing/gi));

//4.  Bikin regex yang validasi password: minimal 8 karakter, ada huruf besar, huruf kecil, dan angka
function checkPassword(str){
    let pattern4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return pattern4.test(str);
}
console.log(checkPassword('Hallo Masyarakat 123'))
