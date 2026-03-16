function kaliTerusRekursif(angka) {
    if (angka < 10) return angka

    var remainder = angka % 10
    var firstDigit = (angka / 10) | 0

    return kaliTerusRekursif(remainder * kaliTerusRekursif(firstDigit))
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
