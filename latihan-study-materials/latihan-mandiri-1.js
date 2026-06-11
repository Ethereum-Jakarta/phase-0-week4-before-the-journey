
// 1. Bikin sumDigits(n) yang jumlahkan semua digit. Contoh: sumDigits(1234) → 10
// 2. Bikin countDown(n) yang print n sampai 0 secara rekursif
// 3. Bikin flattenArray(arr) yang ratakan nested array pakai recursion
// 4. Bikin power(base, exp) tapi yang handle exponent negatif juga

// soal 1
function sumDigits(n) {
    if (n < 10) return n;
    n = String(n);
    return sumDigits(Number(n[0])) + sumDigits(Number(n.slice(1)));
}
console.log(sumDigits(1234));
console.log("\n\n");

//soal2
function countDown(n) {
    if (n === 0) return 0;
    if (n > 0) {
        return String(n) + "\n" + countDown(n - 1)
    }
    if (n < 0) {
        return String(n) + "\n" + countDown(n + 1) // ku tambahin bisa angka minus wkwkwkwk
    }
}
console.log(countDown(-17));
console.log("\n\n");

//soal 3
function flattenArray(arr) {
    let hasil = [];

    for(let i of arr) {
        if (Array.isArray(i)) {
            hasil = hasil.concat(flattenArray(i)); // sorry yang nomer 3 agak sedikit pake yaa wkwkwk
        } else {
            hasil.push(i);
        }
    }
    return hasil;
}
console.log(flattenArray([12, [2, [3], [4, [2]], [1], [12, [15]], 24]]));
console.log("\n\n");

//soal 4
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else if (exponent < 0) {
        return 1 / (base * power(base, exponent + 1));
    }
}
console.log(power(2, -3));
console.log("\n\n");