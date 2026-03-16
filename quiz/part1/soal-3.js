/*
Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). 
Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. 
Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis.
Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. Function akan memproses jika waktu masih ada. 
Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1
*/

function makanTerusRekursif(waktu) {
    // you can only write your code here!
    console.log(`memanggil rekursif makanTerusRekursif(${waktu})`);
    
    if (waktu <= 0) {
        // console.log('base case', waktu);
        console.log('base', waktu);
        return 0;
    } else {
        let result = makanTerusRekursif(waktu - 15)
        console.log(`Rekursif makan : 1 + ${result}`);
        return 1 + result;
    }    
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0